import mongoose, { Schema } from "mongoose";

const findData = new Schema({
    id: {
        type: Number,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    borrowDate: {
        type: Date,
        default: Date.now
    },
    returnDate: {
        type: Date
    }
}, {
    versionKey: false,
    timestamps: true
});

export const modelData = mongoose.model("BookRental", findData);
