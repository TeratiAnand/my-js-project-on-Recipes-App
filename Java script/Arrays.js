// let arr1=[ "anandismart","vinod","Abhinay"]
// console.log(arr1)
// console.log(arr1.toString())


// let arr2=[ "anandismart","vinod","Abhinay"]
// let arr3=[ "anandismart","vinod","Abhinay"]
// console.log(arr2)
// console.log(arr2.concat(arr3))


// let arr5=[ "anandismart","vinod","Abhinay"]
// let arr6=[ "anandismart","vinod","Abhinay"]
// console.log(arr2)
// console.log(arr2.join(arr3))



// let arr10=[ "anandismart","vinod","Abhinay"]
// console.log(arr10.slice(1))
// console.log(arr10.slice(2,4))

// let arr11=[ "anandismart","vinod","Abhinay"]

// let arr12=("anandismart","vinod","Abhinay")

// console.log(Array.isArray(arr12))
// console.log(Array.isArray(arr11))

// for Each loop.......
// let arr1=["anand","vaishu","vinod"]
// arr1.forEach((elements,index,arry)=>{
//     console.log( elements)
//     // console.log(arry)

//     })



// map method


// let arr1=["anand","vaishu","vinod"]
// arr1.map((elements,index,arry)=>{
//     console.log( elements)
//     // console.log(arry)

//     })


// let arr=[1,2,3,4,5,6,7,8,9,10]
// let output=arr3.mapL((ele,index,arr)=>{
// return(ele*4)
// })
// console.log(output)



// let arr=[1,2,3,4,5,6,7,8,9,10]
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
//     console.log(sum)
// }

// to do reduce method()
let arr=[1,2,3,4,5,6,7,8,9,10]
let sum=0;
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
    console.log(sum)
}

let output=arr.reduce((sum,elements,index,array) =>{
    return sum+=elemants
},0)
console.log(output)


