



// function leftRotation(arr,rotation){

//     let finalArray = [...arr];

//     for(let i=0;i<rotation;i++){
//         let value_to_rotate = finalArray.shift();   //use pop and unshift for right rotation.
//         finalArray.push(value_to_rotate)
//     }

//     return finalArray
// }


// let arr = [2,3,4,5];
// let rotation = 1

// console.log(leftRotation(arr,rotation));









// function myFunction(a){
//     let [num1,num2,num3] = a
//     console.log('num1 ', num1);
// }

// myFunction([2,3,4])


// // function rotLeft(a, d) {
// //     while (d) {
// //        a.push(a.shift());
// //        d--;
// //     }
// //  return a;
// //  }


function reverseArray(a) {
    let reversedArray = []
    for(let i=a.length-1; i>=0;i--){
        reversedArray.push(a[i])
    }
    
    return reversedArray;

}


console.log(reverseArray([1,2,3,4]))
