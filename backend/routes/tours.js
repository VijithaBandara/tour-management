import express from "express";
import { createTour, getAllTour, getSingleTour, deleteTour, updateTour, getTourBySearch, getFeacturedTour, getTourCount } from "../controllers/tourController";

import { verifyAdmin } from "../Utils/verifyToken";

const router = express.Router();

//create new tour
router.post( "/" , verifyAdmin, createTour );

//update tour
router.post( "/:id" , verifyAdmin, updateTour );

// delete tour
router.post( "/:id" , verifyAdmin, deleteTour );

// getSingle tour
router.post( "/:id" , getSingleTour );

// getAll tour  
router.post( "/" , getAllTour );

// get tour by search  
router.post( "/search/getTourBySearch" , getTourBySearch );

// get featured tours  
router.post( "/search/getFeaturedTours" , getFeacturedTour );

// get tour count  
router.post( "/search/getTourCount" , getTourCount );

export default router;