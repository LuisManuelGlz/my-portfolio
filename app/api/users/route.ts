import { NextRequest, NextResponse } from "next/server";
import { ValidationError } from "yup";
import { PrismaClient } from "@prisma/client";
import { User } from "@/types/User";
import userSchema from "@/schemas/userSchema";

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const userData: User = await request.json();

  try {
    await userSchema.validate({ ...userData }, { abortEarly: false });

    const existingUser = await prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (existingUser) {
      throw new ValidationError(
        new ValidationError("Email is already in use", userData, "email")
      );
    }

    const newUser = await prisma.user.create({
      data: {
        ...userData,
      },
    });

    return NextResponse.json(newUser);
  } catch (error) {
    console.log(error);

    if (error instanceof ValidationError) {
      const validationErrors = error.inner.map((err) => ({
        field: err.path,
        message: err.message,
      }));
      return NextResponse.json({ errors: validationErrors }, { status: 400 });
    }
  }
}
