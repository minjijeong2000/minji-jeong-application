import mongoose from 'mongoose'

const Schema = mongoose.Schema

const imageSchema = new mongoose.Schema ({
    name: String,
    desc: String,
    img: {
        data: Buffer,
        contentType: String
    }
})

const Image = mongoose.model('Image', imageSchema)

export {
    Image
}