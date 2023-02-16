// //binary search --------------------------------------------------------------------

// const array = [1,2,3,4,5,6,7,8,9,10];

// function binarySearch(arr, number){
//     if(arr[Math.trunc((arr.length)/2)]==number){
//         return (arr[Math.trunc((arr.length)/2)]);
//     }
//     else if(arr[Math.trunc((arr.length)/2)] > number){
//         let newArr = arr.slice(0, Math.trunc((arr.length)/2))
//         return binarySearch(newArr, number)
//     } 
//     else if(arr[Math.trunc((arr.length)/2)] < number){        
//         let newArr = arr.slice(Math.trunc((arr.length)/2))
//         return binarySearch(newArr,number);
//     }
// }

// console.log(binarySearch(array, 8));

// object function --------------------------------------------------------------------

// const obj = {
//     a: 2,
//     prop: 8,
//     z: {
//         y: 5,
//         a: 'string',
//         foo:{
//             a:'+1',
//             bar: 'str'
//         }
//     }
// }
// function search(obj, prop){
//     const arr = [];
//     (function searchRecursive(obj, prop){
//     const entries = Object.entries(obj)

//     for (const item of entries) {

//         if(item[0]==prop) {arr.push(item[1])}


//         if(typeof item[1] == "object"){
//             searchRecursive(item[1], prop)
//         }
//     }
// })(obj, prop)
// return arr;
// }

// console.log(search(obj, 'a'));

//Sum ----------------------------------------------------------------------------------

// const arr = [3,30,4,7,9,34,2,6,35,2,12,22,32,4,4,31];

// function sum(array){
//     let max = 0;
//     for(let i = 0; i< array.length; i++){
//         if(array[i]+array[i+1]>max) max = array[i]+array[i+1];
//     }
//     console.log(max);
// }

// sum(arr);

//Concatenation ---------------------------------------------------------------------------

// function concate(...args){
//     const divider = args.splice(0,1);
//     return args.join(divider);
// }

// console.log(concate('*','1','b','1c'));

//Massive to object ------------------------------------------------------------------------

// const arr41 = [{name: 'width', value: 10}, {name: 'height', value: 20}];

// function massiveToObject(array){
//     const newObject = {};
//     array.forEach(element => {
//         Object.defineProperty(newObject, element.name, {value: element.value, enumerable:true});         
//     });  
//     console.log(newObject);
// }

// massiveToObject(arr41);

//Bubble Sort ------------------------------------------------------------------------------

// const arr = [6,3,67,78,4,2,6,56,2,67,54];

// function bubbleSort(array){
//     for(let i = 0; i< array.length; i++){
//         (function count(){
//         let temp = 0;
//         for(let i =0; i< array.length; i++){
//             if(array[i]>array[i+1]){
//                 temp = array[i+1];
//                 array[i+1] = array[i];
//                 array[i] = temp;
//             }
//         }
//     })()
//     }
//     console.log(array);
// }
// bubbleSort(arr)