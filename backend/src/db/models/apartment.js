import { Schema, model } from "mongoose";


const apartmentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rooms: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ApartmentCollection = model('apartments', apartmentSchema);

export default ApartmentCollection;