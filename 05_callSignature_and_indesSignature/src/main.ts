// Call Signature

// interface getLikeNumber {
//   (like: number): number
// }
// interface Post {
//   id: number,
//   title: string,
//   getLikeNumber: getLikeNumber
// }


// const post1: Post = {
//   id: 1,
//   title: "post1",
//   getLikeNumber(like: number) {
//     return like
//   }
// }

// post1.getLikeNumber(1)


// index Signature

interface Post {
  id: number,
  title: string,
  [key:string]: unknown,  // index Signature
}

const post2: Post = {
  id: 2,
  title: "post2",
}
post2["description"] = "description"
post2["pages"] = 100


interface Names {
  [item: number]:string   // index Signature
}

const userNames:Names = ["A", "B", "C"]