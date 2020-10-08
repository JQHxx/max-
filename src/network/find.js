import {request, findItemsRequest} from "./request";

export function getFindMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getFindNews() {
  return findItemsRequest({
    url: '/find/news'
  })
}


// 函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
// 函数调用结束 -> 弹出函数栈(释放函数所有的变量)
// function test() {
//   const names = ['why', 'aaa']
// }
//
// test()
//
// test()

let totalNums = []

const nums1 = [20, 11, 222]
const nums2 = [111, 22, 333]

// for (let n of nums1) {
//   totalNums.push(n)
// }

totalNums.push(...nums1)
