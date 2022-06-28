import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
  image: String,
  title: String,
  overview: String,
  release_date: Date
}, {
  timestamps: true
})

const factSchema = new mongoose.Schema({
  fact: String
}, {
  timestamps: true
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  facts: [factSchema],
  movies: [movieSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
