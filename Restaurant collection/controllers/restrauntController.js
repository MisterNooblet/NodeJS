import asyncHandler from "express-async-handler";
import Restraunt from "../models/Restraunt.js";


// @desc    Get all Restraunts
// @route   GET /api/v1/restraunts
// @access  Public

export const getRestraunts = asyncHandler(async (req, res, next) => {
    try {
        const restraunt = await Restraunt.find({});
        res.status(200).json({
            success: true,
            data: restraunt
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            data: error.message
        });
    }
})

// @desc    create Restraunt
// @route   Post /api/v1/restraunts
// @access  private

export const createRestraunt = asyncHandler(async (req, res, next) => {
    const body = await req.body
    console.log(body);
    try {
        const restraunt = await Restraunt.create(req.body);
        res.status(200).json({
            success: true,
            data: restraunt
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            data: error.message
        });
    }
})

// @desc    find restraunt by cuisine
// @route   GET /api/v1/restraunts/menu/:cuisine
// @access  Public
export const getByCuisine = asyncHandler(async (req, res, next) => {
    const restraunts = await Restraunt.find({ "menu.name": req.params.cuisine });

    if (restraunts.length === 0) {
        return next(new Error(`Restraunts that have '${req.params.cuisine}' not found`));
    }

    res.status(200).json({
        success: true,
        data: restraunts,
    });
});

// @desc    find kosher restraunts
// @route   GET /api/v1/restraunts/kosher
// @access  Public
export const getKoshers = asyncHandler(async (req, res, next) => {
    const restraunts = await Restraunt.find({ "kosher": true });

    if (restraunts.length === 0) {
        return next(new Error(`Restraunts that have '${req.params.cuisine}' not found`));
    }

    res.status(200).json({
        success: true,
        data: restraunts,
    });
});

// @desc    find kosher restraunts
// @route   GET /api/v1/restraunts//city/:city
// @access  Public
export const findByCity = asyncHandler(async (req, res, next) => {
    const restraunts = await Restraunt.find({ "address.city": req.params.city });

    if (restraunts.length === 0) {
        return next(new Error(`Restraunts that are in '${req.params.city}' not found`));
    }

    res.status(200).json({
        success: true,
        data: restraunts,
    });
});

// @desc    find restraunts adress
// @route   GET /api/v1/restraunts/address/:name
// @access  Public
export const findAdressByName = asyncHandler(async (req, res, next) => {
    const restraunts = await Restraunt.find({ "name": req.params.name }, { address: 1 });

    if (restraunts.length === 0) {
        return next(new Error(`Restraunts that are in '${req.params.city}' not found`));
    }

    res.status(200).json({
        success: true,
        data: restraunts,
    });
});

// @desc    find restraunts coords
// @route   GET /api/v1/restraunts/coords/:name
// @access  Public
export const findCoordsByName = asyncHandler(async (req, res, next) => {
    const restraunts = await Restraunt.find({ "name": req.params.name }, { coords: 1 });

    if (restraunts.length === 0) {
        return next(new Error(`Restraunts that are in '${req.params.city}' not found`));
    }

    res.status(200).json({
        success: true,
        data: restraunts,
    });
});

// @desc    sort restraunts by name
// @route   GET /api/v1/restraunts/sortbyname
// @access  Public
export const findAndSortByName = asyncHandler(async (req, res, next) => {
    const restraunts = await Restraunt.find().sort({ name: 1 });

    if (restraunts.length === 0) {
        return next(new Error(`Restraunts that are in '${req.params.city}' not found`));
    }

    res.status(200).json({
        success: true,
        data: restraunts,
    });
});

// @desc    sort restraunts by city name
// @route   GET /api/v1/restraunts/sortbycity
// @access  Public
export const findAndSortByCity = asyncHandler(async (req, res, next) => {
    const restraunts = await Restraunt.find().sort({ "address.city": 1 });

    if (restraunts.length === 0) {
        return next(new Error(`Restraunts that are in '${req.params.city}' not found`));
    }

    res.status(200).json({
        success: true,
        data: restraunts,
    });
});

// @desc    Find restraunt by id
// @route   GET /api/v1/restraunts/:id
// @access  Public
export const findById = asyncHandler(async (req, res, next) => {
    const restraunts = await Restraunt.findById(req.params.id)

    if (restraunts.length === 0) {
        return next(new Error(`Restraunts that are in '${req.params.id}' not found`));
    }

    res.status(200).json({
        success: true,
        data: restraunts,
    });
});

// @desc    Find restraunt by id
// @route   GET /api/v1/restraunts/:id
// @access  Public
export const updateRestrauntById = asyncHandler(async (req, res, next) => {
    const restraunts = await Restraunt.findByIdAndUpdate(req.params.id, req.body)

    if (restraunts.length === 0) {
        return next(new Error(`Restraunts that are in '${req.params.id}' not found`));
    }

    res.status(200).json({
        success: true,
        data: restraunts,
    });
});

// @desc    Find restraunt by id
// @route   GET /api/v1/restraunts/:id
// @access  Public
export const addreview = asyncHandler(async (req, res, next) => {
    const review = req.body
    const restraunts = await Restraunt.findByIdAndUpdate(req.params.id, {
        $push: {
            reviews: { ...review }
        }
    })

    if (restraunts.length === 0) {
        return next(new Error(`Restraunts that are in '${req.params.id}' not found`));
    }

    res.status(200).json({
        success: true,
        data: restraunts,
    });
});

// @desc    Find restraunt by id
// @route   GET /api/v1/restraunts/:id
// @access  Public
export const makeAllKosher = asyncHandler(async (req, res, next) => {
    const restraunts = await Restraunt.updateMany({ kosher: false }, { kosher: true })

    if (restraunts.length === 0) {
        return next(new Error(`Restraunts that are in '${req.params.id}' not found`));
    }

    res.status(200).json({
        success: true,
        data: restraunts,
    });
});



// @desc    Find restraunt by id
// @route   GET /api/v1/restraunts/:id
// @access  Public
export const deleteById = asyncHandler(async (req, res, next) => {

    const restraunts = await Restraunt.findByIdAndDelete(req.params.id)

    if (restraunts.length === 0) {
        return next(new Error(`Restraunts that are in '${req.params.id}' not found`));
    }

    res.status(200).json({
        success: true,
        data: restraunts,
    });
});

// @desc    Find restraunt by id
// @route   GET /api/v1/restraunts/:id
// @access  Public
export const printNames = asyncHandler(async (req, res, next) => {

    const restraunts = await Restraunt.find()
    restraunts.forEach(function (doc) {
        console.log(doc.name);
    });
    if (restraunts.length === 0) {
        return next(new Error(`Restraunts that are in '${req.params.id}' not found`));
    }

    res.status(200).json({
        success: true,
        data: restraunts,
    });
});

// @desc    Find restraunt by id
// @route   GET /api/v1/restraunts/:id
// @access  Public
export const printCities = asyncHandler(async (req, res, next) => {

    const restraunts = await Restraunt.find()
    restraunts.forEach(function (doc) {
        console.log(doc.address.city);
    });
    if (restraunts.length === 0) {
        return next(new Error(`Restraunts that are in '${req.params.id}' not found`));
    }

    res.status(200).json({
        success: true,
        data: restraunts,
    });
});

// @desc    Find restraunt by id
// @route   GET /api/v1/restraunts/:id
// @access  Public
export const printCoords = asyncHandler(async (req, res, next) => {

    const restraunts = await Restraunt.find()
    restraunts.forEach(function (doc) {
        console.log(doc.coords);
    });
    if (restraunts.length === 0) {
        return next(new Error(`Restraunts that are in '${req.params.id}' not found`));
    }

    res.status(200).json({
        success: true,
        data: restraunts,
    });
});

// @desc    Find restraunt by id
// @route   GET /api/v1/restraunts/:id
// @access  Public
export const getbyletter = asyncHandler(async (req, res, next) => {

    const restraunts = await Restraunt.find({ name: { $regex: `^${req.params.letter[0]}` } })

    if (restraunts.length === 0) {
        return next(new Error(`Restraunts that are in '${req.params.id}' not found`));
    }

    res.status(200).json({
        success: true,
        data: restraunts,
    });
});

// @desc    Find restraunt by id
// @route   GET /api/v1/restraunts/:id
// @access  Public
export const howMany = asyncHandler(async (req, res, next) => {

    const restraunts = await Restraunt.count()

    if (!restraunts) {
        return next(new Error(`Restraunts that are in '${req.params.id}' not found`));
    }

    res.status(200).json({
        success: true,
        data: restraunts,
    });
});

// @desc    Find restraunt by id
// @route   GET /api/v1/restraunts/:id
// @access  Public
export const getAllAverage = asyncHandler(async (req, res, next) => {

    const restraunts = await Restraunt.aggregate([
        {
            $group: {
                _id: "$name",
                averageScore: { $avg: { $avg: "$reviews.score" } }
            }
        }
    ])

    if (!restraunts) {
        return next(new Error(`Restraunts that are in '${req.params.id}' not found`));
    }

    res.status(200).json({
        success: true,
        data: restraunts,
    });
});

// @desc    Find restraunt by id
// @route   GET /api/v1/restraunts/:id
// @access  Public
export const getAverage = asyncHandler(async (req, res, next) => {

    const restraunts = await Restraunt.aggregate([
        { $match: { name: req.params.name } },
        {
            $project: {
                _id: 0,
                name: 1,
                averageScore: { $avg: "$reviews.score" }
            }
        }
    ])

    if (!restraunts) {
        return next(new Error(`Restraunts that are in '${req.params.id}' not found`));
    }

    res.status(200).json({
        success: true,
        data: restraunts,
    });
});