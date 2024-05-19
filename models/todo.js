import mongoose from "mongoose";

const { Schema } = mongoose;

const todoSchema = new Schema({
    data: {
        type: 'string',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


export default mongoose.model('Todo', todoSchema)