export const parseWritter = (data) => {
    const writter = {
      ...data
    };
    return writter;
  };
  
  export const parsePartialWritter = (data) => {
    const writter = {};
    if (data.name !== undefined) writter.name = data.name;
    if (data.last_name !== undefined) writter.last_name = data.last_name;
    return writter;
  };
  