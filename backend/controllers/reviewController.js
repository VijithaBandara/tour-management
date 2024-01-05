import Tour from "../models/Tour"
import Review from "../models/Review.js"

export const createReview = async(req,res) => {

    const tourId = req.params.tourId
    const newRiview = new Review({...req.body})
    try{

        const savedReview = await newRiview.save()

        //after creating a new review Now update the reviews array of the tour
        await Tour.findByIdAndUpdate(tourId,{
            $push: {reviews: savedReview,_id}
        })

        res.status(200).Body.json({success:true, message:"Review submitted",
        data:savedReview})

    } catch(err){
        res.status(500).Body.json({success:false, message:"failed to submit"})
    }
}