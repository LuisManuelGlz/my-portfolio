import client from './sanity';
import emailjs from 'emailjs-com';
import { TemplateParamsType } from '../types/templateParams';
import config from '../config';

export const getAllProjects = async () => {
  const data = await client.fetch(
    `*[_type == 'project' && show == true] | order(order asc) {
        _id,
        title,
        description{
          "en": en[0],
          "es": es[0]
        },
        website,
        repo,
        tags,
        members[]->{
          _id,
          name,
          github,
        },
        image{
          asset->{
            _id,
            url,
          }
        }
    }`
  );
  return data;
};

export const getSkills = async () => {
  const data = await client.fetch(
    `*[_type == 'skill']{
      _id,
      name,
      backgroundColor,
      logo{
        asset->{
          _id,
          url,
        }
      }
    }`
  );
  return data;
};

export const getSiteSettings = async () => {
  const data = await client.fetch(
    `*[_type == 'siteSettings'][0]{
      siteName,
      shortName,
      role,
      about{
        "en": en[0],
        "es": es[0]
      },
      whatIDo{
        "en": en[0],
        "es": es[0]
      },
      location
    }`
  );
  return data;
};

export const sendEmail = async (templateParams: TemplateParamsType) => {
  return await emailjs.send(
    config.emailjsServiceId,
    config.emailjsTemplateId,
    templateParams,
    config.emailjsUserId
  );
};
