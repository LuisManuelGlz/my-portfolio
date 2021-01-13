import { useState } from 'react';
import Container from './container';

type Props = {
  siteName: string;
};

const Header = ({ siteName }: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full bg-dark">
      <Container>
        <button
          id="hamburger"
          className="absolute top-5 right-5 p-1 block sm:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? (
            <span className="text-light text-4xl px-3">&times;</span>
          ) : (
            <>
              <div className="w-8 h-0.5 bg-light m-2 rounded" />
              <div className="w-8 h-0.5 bg-light m-2 rounded" />
              <div className="w-8 h-0.5 bg-light m-2 rounded" />
            </>
          )}
        </button>
        <ul
          className={`${
            !isNavOpen && 'hidden sm:flex'
          } flex flex-col sm:flex-row justify-center items-center font-medium w-full h-screen sm:h-16`}
        >
          <li className="mb-16 sm:mb-0">
            <a
              id="badge"
              href="#"
              className="text-light text-3xl sm:text-base"
              onClick={() => setIsNavOpen(false)}
            >
              {siteName}
            </a>
          </li>
          <div className="flex-grow hidden sm:block" />
          <li className="mr-0 sm:mr-5 mb-16 sm:mb-0">
            <a
              href="#projects"
              className="text-light sm:text-gray text-3xl sm:text-base"
              onClick={() => setIsNavOpen(false)}
            >
              Mis proyectos
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-light sm:text-gray text-3xl sm:text-base"
              onClick={() => setIsNavOpen(false)}
            >
              Acerca de
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Header;
