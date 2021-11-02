import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

export const JobSchema = new Schema({
  company: { type: String, required: true },
  title: { type: String, required: true },
  rate: { type: Number, required: true },
  days: { type: Number, required: true },
  description: { type: String },
  creatorId: { type: ObjectId, required: true, ref: 'Profile' }
}, { timestamps: true, toJSON: { virtuals: true } })

JobSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
