import mongoose, { Schema } from "mongoose";

const bookModel = new Schema({
    id: {
        type: String,
    },
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    publishedYear: {
        type: Number,
    },
    genre: {
        type: String,
    },
    isAvailable: {
        type: Boolean,
    }
},{
    versionKey: false,
    timestamps: true
});

const bookSchema = mongoose.model("Book", bookModel);

export default bookSchema;