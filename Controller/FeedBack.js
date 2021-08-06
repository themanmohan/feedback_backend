//@desc      getting feedback 
//@route     GET/feedback
//@access    public
const FeedBack=require('../Model/FeedBack')
 const  getFeedBack = async (req, res) => {
    try {

        const feedback = await FeedBack.find()

        res.status(200).json(feedback)
    } catch (error) {
        res.status(200).json({
            message: error.message
        })
    }
}



//@desc      creating feedback 
//@route     POST/feedback
//@access    public
const createFeedBack = async (req, res) => {
    try {
        console.log(req.body)
        const feedback = await FeedBack.create(req.body)
        res.status(200).json(feedback)
    } catch (error) {
        res.status(200).json({
            message: error.message
        })
    }
}


//exporting
module.exports={
    createFeedBack,
    getFeedBack
}