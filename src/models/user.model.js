import mongoose, { Schema } from "mongoose";



const userModel = new Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
        require: true,
    },
   email: {
    type: String,
    unique: true
   }
}, {
    versionKey: false,
    timestamps: true,
});

const userSchema = mongoose.model("user", userModel);
export default userSchema;