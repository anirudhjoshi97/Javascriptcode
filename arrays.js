// const myArr = [1,2,3,4,5]
// myArr.push(7)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)
const my_arr = [6,7,8,9]
const sec_arr = [1,2,3,4,5]

total_arr = [...sec_arr, ...my_arr]
// console.log(total_arr)

const new_arr = [1,2,3,[1,2],9,8,7,[6,5,[4,3,2]]]

const news_arr = new_arr.flat(Infinity)

// console.log(news_arr)

const first_name = "anirudh"

const conv_arr = Array.from(first_name)

// console.log(Array.from(first_name));
console.log(typeof conv_arr)
console.log(conv_arr)