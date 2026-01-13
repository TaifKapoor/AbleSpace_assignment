import mongoose, { Schema, Document } from 'mongoose';

export interface INavigation extends Document {
  title: string;
  slug: string;
  url: string;
}

const NavigationSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  url: { type: String, required: true }
});

export default mongoose.model('Navigation', NavigationSchema);