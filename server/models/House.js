import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

export const HouseSchema = new Schema({
  bedrooms: { type: Number, required: true, min: 1 },
  bathrooms: { type: Number, required: true, min: 1 },
  levels: { type: Number, required: true, min: 1 },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  creatorId: { type: ObjectId, required: true, ref: 'Profile' }

}, { timestamps: true, toJSON: { virtuals: true } })

HouseSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Profile',
  foreignField: '_id',
  justOne: true
})
