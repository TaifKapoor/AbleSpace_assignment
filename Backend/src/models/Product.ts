import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  title: string;
  author?: string;
  price: number;
  imageUrl?: string;
  sourceUrl: string;
  sourceId: string;
  categoryId: mongoose.Types.ObjectId;
  description?: string;
  reviews?: { author: string; rating: number; text: string }[];
}

const ProductSchema = new Schema({
  title: { type: String, required: true },
  author: String,
  price: { type: Number, required: true },
  imageUrl: String,
  sourceUrl: { type: String, required: true },
  sourceId: { type: String, required: true, unique: true },
  categoryId: { type: Schema.Types.ObjectId, ref: 'Category' },
  description: String,
  reviews: [{ author: String, rating: Number, text: String }]
});

export default mongoose.model('Product', ProductSchema);