import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const movieSchema = new mongoose.Schema({
    id:Number,
    image: String,
    title: String,
    overview: String,
    release_date: Date,
    collectedBy: [{ type: Schema.Types.ObjectId, ref: "Profile" }]
  }, {
    timestamps: true
  })

const Movie = mongoose.model("Movie", movieSchema)

export {
	Movie
}
