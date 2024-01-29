interface SayFunc {
  (word: string): string,
  (word: string[]): string
}


const saySomething: SayFunc = (word) => {
  if (typeof word === "string") {
    console.log(word)
    return word
  } else if (Array.isArray(word)) {
    console.log(word.join(" "))
    return word.join(" ")
  } else {
    throw new Error("Not Available Arguments")
  }
}

saySomething("Hello")
saySomething(["Hello", "World"])