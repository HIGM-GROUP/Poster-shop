import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	userName: String,
	email: String,
	phone: Number,
	website: String,
	img: String
});

export default mongoose.model('User', userSchema);
