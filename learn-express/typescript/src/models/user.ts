import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  username: string;
  password: string;
  email: string;
}

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email:{ type: String, required: true },
});

userSchema.pre('save', async function (next) {
  const user = this as IUser;
  if (!user.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
  next();
});

export default mongoose.model<IUser>('User', userSchema);