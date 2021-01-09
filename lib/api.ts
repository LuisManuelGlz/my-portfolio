import client from './sanity';

export const getAllProjects = async () => {
  const data = await client.fetch(
    `*[_type == 'project']{
        _id,
        title,
        description,
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
