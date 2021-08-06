const mongoose =require('mongoose')
const feedbackSchema=mongoose.Schema({
    name:String,
    email:String,
    feedback: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const feedBack = mongoose.model('feedback', feedbackSchema)

module.exports = feedBack