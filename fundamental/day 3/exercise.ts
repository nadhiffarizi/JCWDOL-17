// /** @format */

// // Write a code to display the multiplication table of a given integer.
// // Example : Number → 9
// // Output :
// // 9 x 1
// // 9 x 2
// // …
// // 9 x 10

// let counter: number = 10;
// for (let i = 1; i <= counter; i++) {
//   let number: number = 9;
//   console.log(number, "x", i);
// }

// // Write a code to check whether a string is a palindrome or not.
// // Example : ‘madam’ → palindrome
// // string merupakan kumpulan dari karakter
// let str: string = "cat";
// let reverse: string = "";
// //cat = 3-1 = 2

// // c = 0
// // a = 1
// // t = 2

// //i = 0
// //reverse = tac

// for (let i = str.length - 1; i >= 0; i--) {
//   reverse += str.charAt(i);
// }
// console.log(str, "->", str == reverse ? "palindrome" : "not palindrome");

// // Write a code to convert centimeter to kilometer.
// // Example : 100000 cm → “1 km”
// let distance: number = 100000; //in cm
// console.log(distance, "cm ->", distance / 100000, "km");

// // Write a code to format number as currency (IDR)
// // Example : 1000 → “Rp. 1.000,00”
// let money: number = 1000;
// console.log(
//   new Intl.NumberFormat("id-ID", { currency: "IDR", style: "currency" }).format(
//     money
//   )
// );

// console.log(`Rp ${money.toLocaleString("id-ID")},00`);

// // Write a code to remove the first occurrence of a given “search string” from a string
// // Example : string = “Hello world”, search string = “ell” → “Ho world”
// str = "Hello world";
// console.log(str.replace("ell", ""));

// // Write a code to capitalize the first letter of each word in a string
// // Example : “hello world” → “Hello World”
// str = "hello world";
// let capitalize: string = "";
// for (let i = 0; i < str.length; i++) {
//   if (i == 0 || str.charAt(i - 1) == " ")
//     capitalize += str.charAt(i).toUpperCase(); //H  W
//   else capitalize += str.charAt(i).toLowerCase(); //ello orld
// }

// //capitalize = H
// console.log(capitalize);
// // i=5 adalah " "
// //i = 6. maka "w"
// // 6-1 =5. karakter 5 itu adalah " " maka true

// // Write a code to swap the case of each character from string
// // Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
// str = "The QuiCk BrOwN Fox";
// let swap: string = "";
// for (let i = 0; i < str.length; i++) {
//   if (str.charAt(i).toUpperCase() == str.charAt(i))
//     swap += str.charAt(i).toLowerCase();
//   else swap += str.charAt(i).toUpperCase();
// }
// console.log(swap);

// // Write a code to find the largest of two given integers
// // Example : num1 = 42, num2 = 27 → 42
// let num1: number = 42;
// let num2: number = 27;
// console.log(num1 > num2 ? num1 : num2); //ternary

// // Write a conditional statement to sort three numbers
// // Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
// let num3: number = 18;
// let result: string = `num1 = ${num1}, num2 = ${num2}, num3 = ${num3} →`;
// if (num1 > num2) [num1, num2] = [num2, num1]; //reassign
// if (num1 > num3) [num1, num3] = [num3, num1];
// if (num2 > num3) [num2, num3] = [num3, num2];

// console.log(result, num1, num2, num3);

// // Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
// // Example : “hello” → 1
// str = "hello";
// if (typeof str == "string") console.log(1);
// else if (typeof str == "number") console.log(2);
// else console.log(3);

// // Write a code to change every letter a into * from a string of input
// // Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
// str = "An apple a day keeps the doctor away";
// console.log(str.replace(/a/gi, "*"));
// //g = global
// //i = in case sensitive
// console.log(str.toLowerCase().replaceAll("a", "*"));

// let a = "ayam";
// let b = "kucing";
// [a, b] = [b, a];
// console.log(a, b);

// My code----------------------------------------------------------------------

// NO. 1 print multiplication
// let $input:number = 9;

// for (let i=1; i<= $input+1; i++){
//   console.log(`${$input} x ${i}`);
  
// }


// NO. 2 palindrom
// let $str:string = "madam"
// let $check = false

// for (let i=0; i< Math.floor($str.length/2); i++){
//   if ($str.charAt(i) === $str.charAt($str.length-i-1)){
//     $check = true
//   }
//   else{
//     $check = false
//     break
//   }
// }

// if ($check) console.log(`${$str} is pallindrom`);
// else console.log(`${$str} not a pallindrom`);


// NO 3 cm to km
// let $num:number = 125000
// let $numStr:string = ($num / 100000).toPrecision(3)
// console.log($numStr + " km");

// NO 4 number to rupiah string
// let $num:number = 112456
// let $numStr:string = $num.toFixed()
// let $counter =0;
// let $temp:string = ""

// for (let i=$numStr.length-1; i>=0; i--){
//   if ($counter === 3){
//     $temp = "." + $temp
//     $counter =0;
//   }

//   $temp = $numStr.charAt(i) + $temp
//   $counter ++
// }

// console.log(`${'Rp.'}${$temp},00`);

// NO 5 remove first occurence
// let $str:string = "Hello World"
// let $search:string = "ell"

// console.log($str.replace($search, ""));

// NO 6 capitalize
// let $str:string = "hello world"
// let $temp:string = ""
// for (let i of $str){
//   if ($str.indexOf(i) === 0 || $str.charAt($str.indexOf(i)-1) === " "){
//     $temp += i.toUpperCase()
//   }
//   else{
//     $temp += i
//   }
// }
// console.log($temp);


// NO 7 Capital to lowwer, lower to capital
// let $str: string = 'The QuiCk BrOwN Fox'
// let $temp:string = ""
// for (let i of $str){
//   if (i.toUpperCase() === i){
//     $temp += i.toLowerCase()
//   }
//   else{
//     $temp += i.toUpperCase()
//   }
// }

// console.log($temp);

// NO 8 largest 2 numbers
// let $num1:number = 42
// let $num2:number = 27

// if($num1 > $num2) console.log($num1);
// else if ($num1 < $num2) console.log($num2);
// else console.log("equals");

// NO 9 sort only 3 numbers
// let $num1:number = 26
// let $num2:number = 27
// let $num3:number = 15

// if ($num1 > $num2){
//   if ($num3 > $num1){ // paling gede
//     console.log($num2, $num1, $num3);
    
//   } else if ($num3 < $num1 && $num3 > $num2){ // tengah-tengah
//     console.log($num2, $num3, $num1);
    
//   } else {
//     console.log($num3, $num2, $num1); // paling kecil
    
//   }

// } else if($num1 < $num2 ){
//   if ($num3 > $num2){   // paling gede
//     console.log($num1, $num2, $num3);
    
//   } else if ($num3 < $num2 && $num3 > $num1){ // tengah-tengah
//     console.log($num1, $num3, $num2);
    
//   } else {
//     console.log($num3, $num1, $num2); // paling kecil
    
//   }

// } else{
//   if($num3> $num2) console.log($num1, $num2, $num3); // num3 paling besaer
//   else console.log($num3, $num1, $num2); // num3 paling kecil
// }

// NO 10 print code datatype
// let $x = 2

// if((typeof $x) === 'string') console.log(1);
// else if ((typeof $x) === 'number') console.log(2);
// else console.log(3);

// NO 11 change letter a to '*'
// let $str:string = 'An apple a day keeps the doctor away'
// let $strLowCaps:string = $str.toLowerCase()

// let $temp:string = ""

// for (let i of $strLowCaps){
//   if (i === 'a'){
//     $temp += "*"
//   } else{
//     $temp+= i
//   }
// }

// console.log($temp);