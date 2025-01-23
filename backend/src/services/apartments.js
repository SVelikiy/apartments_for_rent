import ApartmentCollection from "../db/models/apartment.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";
// import { SORT_ORDER } from "../constants/index.js";

export const getAllApartments = async ({
  page = 1,
  perPage = 10,
  sortOrder = "asc",
  sortBy = "_id",
  filter = {},
}) => {
  const apartmentsQuery = ApartmentCollection.find();
  const limit = perPage;
  const skip = (page - 1) * perPage;

  if (filter.maxPrice) {
    apartmentsQuery.where("price").lte(filter.maxPrice);
  }
  if (filter.minPrice) {
    apartmentsQuery.where("price").gte(filter.minPrice);
  }
  if (filter.maxRooms) {
    apartmentsQuery.where("rooms").lte(filter.maxRooms);
  }
  if (filter.minRooms) {
    apartmentsQuery.where("rooms").gte(filter.minRooms);
  }

  const [apartmentsCount, apartments] = await Promise.all([
    ApartmentCollection.find().merge(apartmentsQuery).countDocuments(),
    apartmentsQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);
  const paginationData = calculatePaginationData(
    apartmentsCount,
    perPage,
    page
  );
  return {
    data: apartments,
    ...paginationData,
  };
};

export const createApartment = (payload) => ApartmentCollection.create(payload);

export const deleteApartment = async (apartmentId) => {
  const apartment = await ApartmentCollection.findOneAndDelete({
    _id: apartmentId,
  });
  return apartment;
};

export const updateApartment = async ({ _id, payload, options = {} }) => {
  const data = await ApartmentCollection.findOneAndUpdate(
    { _id },
    payload,
    options
  );

  return data;
};
