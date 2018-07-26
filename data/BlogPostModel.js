"use strict";
var mongoose = require('mongoose');

var blogPostSchema = mongoose.Schema({
    title:  String,
    body:   String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BlogPosts', blogPostSchema, 'blogposts');