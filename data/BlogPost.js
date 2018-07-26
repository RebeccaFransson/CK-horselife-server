function BlogPost(title, body, date) {
    this.title = title
    this.body = body
    this.date = new Date().now()
}
module.exports = BlogPost;