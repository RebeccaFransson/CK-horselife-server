"use strict";
var mongoose = require('mongoose');
var BlogPost = require('../data/BlogPostModel');
module.exports = {
    getAllBlogPosts: function () {
        return new Promise(function(resolve, reject){
            BlogPost.find({}, function (err, user) {
            if (err) {
              reject('Couldnt find user: ',err);
            }
            resolve(user);
          });
        });
      },

      addBlogPost: function () {
        var post = new BlogPost({
            title: "Title",
            body: "Body",
            date: Date.now()
          });
          
          post.save(function (err, results) {
            console.log(results);
          });
      }
}
