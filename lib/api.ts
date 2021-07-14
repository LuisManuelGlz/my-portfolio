import client from './sanity';

export const getAllProjects = async () => {
  const data = await client.fetch(
    `*[_type == 'project' && show == true]{
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
      github,
      linkedIn,
      twitter,
      location
    }`
  );
  return data;
};
