"use strict";
class Post {
    constructor(id = 0, title = "") {
        this.id = id;
        this.title = title;
    }
    getPost() {
        return `postId : ${this.id}, posTitle : ${this.title}`;
    }
}
const post = new Post(1, "title 1");
console.log(post.id);
// console.log(post.title) -> 'title' 속성은 private이며 'Post' 클래스 내에서만 액세스할 수 있습니다.ts(2341)
