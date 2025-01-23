const parseNumber = (number) => {
  const isString = typeof number === "string";
  if (!isString) return;

  const parsedNumber = parseInt(number);
  if (Number.isNaN(parsedNumber)) {
    return;
  }

  return parsedNumber;
};

export const parseFilterParams = (query) => {
  const { maxPrice, minPrice, maxRooms, minRooms } = query;

  const parcedMaxPrice = parseNumber(maxPrice);
  const parsedMinPrice = parseNumber(minPrice);
  const parsedMaxRooms = parseNumber(maxRooms);
  const parsedMinRooms = parseNumber(minRooms);

  return {
    maxPrice: parcedMaxPrice,
    minPrice: parsedMinPrice,
    maxRooms: parsedMaxRooms,
    minRooms: parsedMinRooms,
  };
};