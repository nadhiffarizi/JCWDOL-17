// No. 1
// let str:string = "";
// let input:number = 4;
// let counter:number =1;
// for (let i=1; i<= input; i++){
//     str = ""
//     for (let j=1; j<= i; j++){
//         str += counter + " ";
//         counter++;
//     }
//     console.log(str.trim());
    
// }

// No. 2
// let input:number = 15;
// let temp:(string |number)[] = []
// for (let i=1; i<= input; i++){
//     if(i % 3 === 0 && i%5 ===0){
//         // console.log("FizzBuzz");
//         temp.push("FizzBuzz")
//     } else if(i % 3 ===0){
//         // console.log("Fizz")
//         temp.push("Fizz")
//     } else if(i %5 ===0){
//         // console.log("Buzz")
//         temp.push("Buzz")
//     } else{
//         // console.log(i)
//         temp.push(i)
//     }
// }

// console.log(temp.join(" "))

// No.3 
// function BMI(weight:number, height:number){
//     let bmi:number = weight/Math.pow(height, 2);

//     if (bmi < 18.5) return "Less Weight"
//     else if (bmi>= 18.5 && bmi<24.9) return "ideal"
//     else if (bmi>= 24.9 && bmi<29.9) return "overweight"
//     else if (bmi>= 29.9 && bmi<39.9) return "very overwight"
//     else return "obese" // more than 39.9

// }

// console.log(BMI(70, 170))

// NO. 4
// function evenNums(arr:number[]){
//     let temp:number[] = [];

//     for (let item of arr){
//         if (item % 2 === 0){
//             temp.push(item);
//         }
//     }

//     return temp
// }

// console.log(evenNums([1, 2, 3, 4, 5, 6, 7]))

// No. 5
// let str:string = "Hello World"
// let temp:string[] =[]
// let words:string[] = []

// for(let i=0; i<str.length; i++){
//     if(str[i] !== ' '){
//         temp.push(str[i])
//     } else{
//         words.push(temp.join(""))
//         temp = []
//     }
// }
// words.push(temp.join(""))

// console.log(words)