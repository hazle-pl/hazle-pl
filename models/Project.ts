import mongoose, { Schema, Document } from 'mongoose';

interface IProject extends Document {
  name: string;
  website: string;
  type: string;
  status: string;
  amount: number;
  email: string;
  password: string;
  note: string;
}

const ProjectSchema = new Schema<IProject>({
  name: { type: String, required: true },
  website: { type: String, required: true },
  type: { type: String, required: true },
  status: { type: String, required: true },
  amount: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  note: { type: String, required: true },
});

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);