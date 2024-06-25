export const parseStringsToArrays = (string) => {
  const unParseArray = string.split(",");
  let array = [];
  for (let i = 0; i < unParseArray.length / 3; i++) {
    const parseArray = unParseArray.splice(0, 3);
    array = [
      ...array,
      {
        id: parseInt(parseArray[0]),
        name: parseArray[1],
        last_name: parseArray[2],
      },
    ];
  }
  return array;
};
