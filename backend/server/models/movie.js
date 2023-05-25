import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  desc: { type: String },
  img: { type: String },
  coverImg: { type: String },
  subFile: {type: String},
  trailer: { type: String },
  year: { type: String },
  limit: { type: Number },
  tags: {type: [String]},
  actors: {type: [String]},
  creatorName: { type: String },
  language: { type: String },
  director: { type: String },
  country: { type: String },
  production: { type: String },
  duration: { type: String },
  subType: {type: String},
  likes: { type: [String], default: [] },
  downloadCount: { type: [String], default: [] },
  downloadLink: { type: String },
  comments: { type: [String], default: [] },
  isSeries: { type: Boolean, default: false },
  creatorFirstName: { type: String },
  creatorLastName: { type: String },
  Email: { type: String },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Movies = mongoose.model('Movies', postSchema);

export default Movies;