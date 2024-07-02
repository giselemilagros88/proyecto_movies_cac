export const parseDirector = (data) => {
    const director = {
      ...data
    };
    return director;
  };
  
  export const parsePartialDirector = (data) => {
    const director = {};
    if (data.name !== undefined) director.name = data.name;
    if (data.last_name !== undefined) director.last_name = data.last_name;
    return director;
  };
  