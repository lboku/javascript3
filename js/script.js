
//1. ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: არგუმენტად გადაეცით ეს მასივი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9;


function sum (...numbers){
    let sum = 0
    for (let num of numbers){
        sum = sum + num;
    } 
    return sum
}
let result = sum(10, 50, 6, 7, 8, 11, 6, 3, 9)
console.log(result);

// 2. მოცემულია ობიექტი:

//                         let user = {
//                             firstname: 'giorgi',
//                             lastname: 'saakadze',
//                             isloggedin: true
//                         }
// 	ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 
// 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    isloggedin: true
}
function fullName(user){
    if (user.isloggedin ===true){
        return `${user['firstname']} ${user['lastname']}`
    }else{
        return false
    }
   
}
console.log(fullName(user));

// 3. შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების 
// მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:
let numb = [10,15,12,11,26,3]
 function maximim(numb){
    return Math.max(...numb)
 }
console.log(maximim(numb));

//4. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა
//  კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - this number is even‘; თუ კენტია დააბრუნოს - this number is odd‘;

 let number = 0
 function para (number){
    return (number % 2 === 0) ?'this number is even' : 'this number is odd'
 }
console.log(para(number));