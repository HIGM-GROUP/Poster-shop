import mongoose from 'mongoose';

const coursesSchema = mongoose.Schema({
	course: String,
	teacher: String,
	desc: String,
	bild_course: String
});

export default mongoose.model('Courses', coursesSchema);
