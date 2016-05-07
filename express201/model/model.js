/**
 * Created by t_boyas on 5/7/16.
 */
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = User.encryptPassword(this.password);
    next();
});