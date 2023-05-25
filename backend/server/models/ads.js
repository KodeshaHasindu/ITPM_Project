import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    adsTitle: { type: String },
    adsImg: { type: String },
    adsImg1: { type: String },
    adsImg2: {type: String},
    adsImg3: {type: String},
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Ads = mongoose.model('Ads', postSchema);

export default Ads;