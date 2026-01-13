import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  title: string;
  slug: string;
  url: string;
  navigationId: mongoose.Types.ObjectId;
}

const CategorySchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  url: { type: String, required: true },
  navigationId: { type: Schema.Types.ObjectId, ref: 'Navigation' }
});

export default mongoose.model('Category', CategorySchema);