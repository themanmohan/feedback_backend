const express =require('express')
const FeedBack= require('../Controller/FeedBack')
const router = express.Router()


//@desc      getting feedback 
//@route     GET/feedback
//@access    public
router.get('/', FeedBack.getFeedBack)

//@desc      creating feedback 
//@route     POST/feedback
//@access    public
router.post('/', FeedBack.createFeedBack)


//exporting
module.exports= router