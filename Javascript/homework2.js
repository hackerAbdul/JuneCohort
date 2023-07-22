var listOfItems = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
listOfItems.pop()
listOfItems.push("apple")


// console.log(listOfItems[0])
// console.log(listOfItems[listOfItems.length-1])
// console.log(listOfItems[14])
// console.log(listOfItems[7])

listOfItems[7] = "pear"
listOfItems[14] = "orange"
listOfItems[0] = "apple"

// listOfItems.splice(0,2)
// listOfItems.pop()
// listOfItems.pop()

listOfItems.shift()
listOfItems.shift()

listOfItems.unshift("milk")

console.log(listOfItems)

console.log(`item 1 = ${listOfItems[0]} other items are ${listOfItems[listOfItems.length-1]} & ${listOfItems[6]} `)