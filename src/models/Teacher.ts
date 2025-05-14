import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
  _id: String,
  username: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, unique: true, sparse: true },
  phone: { type: String, unique: true, sparse: true },
  address: { type: String, required: true },
  img: String,
  bloodType: { type: String, required: true },
  sex: { type: String, enum: ['MALE', 'FEMALE'], required: true },
  createdAt: { type: Date, default: Date.now },
  subjects: [{ type: Number, ref: 'Subject' }],
  birthday: { type: Date, required: true }
});

export default mongoose.models.Teacher || mongoose.model('Teacher', teacherSchema);