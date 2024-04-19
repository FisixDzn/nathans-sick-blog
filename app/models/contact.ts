import mongoose, { Schema } from 'mongoose';

const contactSchema = new Schema({
    fullname: {
        type: String,
        required: [true, "name is required"],
        trim: true,
        minLength: [2, "name must be longer than 2 characters"],
        maxLength: [50, "name must be less than 50 characters"],
    },

    email: {
        type: String,
        required: [true, "email is required"],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
    },

    subject: {
        type: String,
        required: [true, "subject is required"],
        trim: true,
        minLength: [2, "subject must be longer than 2 characters"],
        maxLength: [50, "subject must be less than 50 characters"],
    },

    message: {
        type: String,
        required: [true, "message is required"],
    },

    date: {
        type: Date,
        default: Date.now,
    },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;