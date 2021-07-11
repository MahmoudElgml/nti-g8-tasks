const dbContext = require('mongoose')
const validator = require('validator')

const Student = dbContext.model("student", {
    name: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'must have a name']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        minLength: 10,
        maxLength: 50,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error('invalid email')
        }
    },
    grade: {
        type: Number,
        required: true,

    },
    courses_enrolled: {
        type:String,
        required:true
    },
    gender: {
        type: String,
        trim:true,
        lowercase:true,
        enum:['male', 'female']
    }
})


module.exports = Student