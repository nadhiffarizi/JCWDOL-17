// No 1
// let input:number[] =[12, 5, 23, 18, 4, 45, 32]

// function calculate(arr:number[]){

//     // calculate lowest and highest
//     let sorted:number[] = arr.sort((a, b)=> a-b)

//     //average
//     let total:number=0
//     for (let item of arr){
//         total += item
//     }
//     let avg:number =  total/(arr.length)
//     let avgStr:string = avg.toPrecision(6)
//     return {'lowest': sorted[arr.length-1], "highest": sorted[0], "average": avgStr}
// }

// console.log(calculate(input))

// No.2 
// let ar:string[] = ["apple", "banna", "cherry", "date"]

// function myConcate(ar:string[]){

//     let temp:string = ar[ar.length-1]
//     ar.pop()
//     let tempString:string = ar.join(", ")
//     return tempString + ", and " + temp;
// }

// console.log(myConcate(ar))

// No 3
// let arr:number[] =[12, 5, 23, 18, 4, 45, 32]
// function mySecondSmallest(arr:number[]){
//     let sorted:number[] = arr.sort((a, b)=> a-b)
//     sorted.pop()

//     return sorted[sorted.length-1]
// }

// console.log(mySecondSmallest(arr));

// No 4
// let arr1:number[] =[1, 2, 3]
// let arr2:number[] =[3, 2, 1]
// function arrAdd(arr1:number[], arr2:number[]){
//     if(arr1.length !== arr2.length){return null}

//     let temp:number[] =[]

//     for (let i=0; i< arr1.length; i++){
//         temp.push(arr1[i] + arr2[i])
//     }

//     return temp
// }

// console.log(arrAdd(arr1, arr2))

// No 5
// let arr:any[] = [1, 2, 3, 4, 5]
// function addElement(arr:number[], input:number){
//     if (!arr.includes(input)){
//         arr.push(input)
//     }

//     return arr
// }

// console.log(addElement(arr, 13))



// -----------------------------
// No 1 bagian 2
// let arr:any[] = ["3", 1, "string", null, false, undefined, 2]

// function addAllNum(arr:any[]){

//     let temp:number=0
//     for (let item of arr){
//         if (typeof(item)=== "number"){
//             temp+=item;
//         }
//     }

//     return temp
// }
// // addAllNum(arr)
// console.log(addAllNum(arr))

// No 2 bagian 2
// function createArray(limit:number, ...args:number[]){
//     let arr:number[]=[];

//     for (let i=0; i< limit; i++){
//         arr.push(args[i])
//     }

//     return arr
// }

// console.log(createArray(5, 5, 10, 24, 3, 6, 7, 8))

// NO 3 bagian 2
// function combine(arr1:number[], arr2:number[]){
//     for (let i=0; i< arr2.length; i++){
//         arr1.push(arr2[i]);
//     }

//     return arr1
// }

// console.log(combine([1, 2, 3],[4, 5, 6]))

// No 4
// function deleteDuplicate(arr:number[]){
//     let temp:number[] = []

//     for (let i=0; i< arr.length; i++){
//         if(!temp.includes(arr[i])){
//             temp.push(arr[i])
//         }
//     }

//     return temp
    
// }

// console.log(deleteDuplicate([1, 2, 2, 3, 3, 4]))

// No 5
// function checkingArr(arr1:number[], arr2:number[]){

//     let temp:number[] = []

//     for (let i=0; i< arr1.length; i++){
//         if (!arr2.includes(arr1[i])){
//             temp.push(arr1[i])
//         }
//     }

//     for (let i=0; i< arr2.length; i++){
//         if (!arr1.includes(arr2[i])){
//             temp.push(arr2[i])
//         }
//     }
//     return temp
// }

// console.log(checkingArr([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))

// NO 1 bagian 3
// function primitiveData(arr:any[]){
//     let dataTypes:any[] = ["string", "number", "bigint", "boolean", "undefined", "symbol", "null"]
//     let temp:any[] = []

//     for (let item of arr){
//         if(dataTypes.includes(item.typeof(item))){
//             temp.push(item)
//         }
//     }
//     return temp
// }

// console.log(primitiveData([1, {}, []]))

// NO 2 bagian 3
// function duplicateValues(arr:number[]){
//     let temp:number[] = []
//     let temp2:number[] =[]

//     //
//     for (let i=0; i< arr.length; i++){
//         if(!temp.includes(arr[i])){
//             temp.push(arr[i])
            
//         } else{
//             temp2.push(arr[i])
//         }
//     }
//     temp2.push(temp2[0])

//     // sum all
//     let sum:number=0;
//     for (let item of temp2) sum+=item

//     return sum

// }

// console.log(duplicateValues([10, 20, 40, 10, 50, 30, 10, 60, 10]))

// NO 3 bagian 3

// function suit(input:string){
//     let numOption:number = Math.random() * 2
//     numOption = Math.round(numOption)
    
//     let code:string;
//     switch (numOption) {
//         case 0:
//             code = "rock"
//             break;
        
//         case 1:
//             code = "paper"
//             break;
    
//         case 2:
//             code = "scissor"
//             break;
//         default:
//             code = "rock"
//     }

//     switch(input){
//         case "rock":
//             if(code === "rock"){
//                 return "Draw"
//             } else if(code === "paper"){
//                 return "Lose"
//             } else {
//                 return "Win"
//             }
//             break

//         case "paper":
//             if(code === "rock"){
//                 return "Win"
//             } else if(code === "paper"){
//                 return "Draw"
//             } else {
//                 return "Lose"
//             }
//             break

//         case "scissor":
//             if(code === "rock"){
//                 return "Lose"
//             } else if(code === "paper"){
//                 return "Win"
//             } else {
//                 return "Draw"
//             }
//             break

//         default:
//             return "nor valid"
//             break
//     }
// }

// console.log(suit("test"))