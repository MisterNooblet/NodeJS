import mongoose from "mongoose";
import slugify from "slugify";

const RestrauntSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: [true, 'Please provide a name'],
        unique: [true, 'Restraunt already exists'],
        trim: true,
        maxlength: [50, 'Name cannot exceed 50 characters']
    },
    slug: String,
    address: {
        city: {
            type: String,
            required: [true, 'Please provide a city name'],
            trim: true,
        },
        street: {
            type: String,
            required: [true, 'Please provide a city name'],
            trim: true,
        }
    },
    coords: {
        type: [Number],
        required: [true, 'Please provide coords'],
    },
    menu: [
        {
            name: { type: String, required: [true, 'Please provide dish name'] },
            price: { type: Number, required: [true, 'Please provide dish price'] },
        }
    ],
    kosher: {
        type: Boolean,
        required: [true, 'Please specify Kosherut']
    },
    reviews: [
        {
            date: { type: Date, default: Date.now },
            score: { type: Number, required: true },
        }
    ],
    averageRating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [5, 'Rating must be less than 5']
    },

}, {
    toJSON: {
        virtuals: true,
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    },
    toObject: {
        virtuals: true,
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    },
})


RestrauntSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
})

export default mongoose.model('Restraunt', RestrauntSchema)