import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    details: {
        description: { type: String, required: true, minlength: 10 },
        price: { type: Number, required: true, min: 0 },
        discount: { type: Number, min: 0, default: 0 },
        images: [
            { src: { type: String, required: true } },
            { src: { type: String, required: true } },
        ],
        phone: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return /\d{3}-\d{7}/.test(v);
                }
            },
            message: props => `${props.value} is not a valid Israeli phone number`
        },
        dateAdded: {
            type: Date,
            default: Date.now
        }
    }
})

export default mongoose.model('Product', productSchema)