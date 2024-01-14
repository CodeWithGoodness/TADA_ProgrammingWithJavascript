// // Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, 
// //addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
// const personAccount = {
//     firstname: prompt("Enter your first name: "),
//     lastName: prompt("Enter your last name: "),
//     incomes: [3000, 1000, 700, 400],
//     expense: [100, 800, 500],
//     totalIncome: function (incomes){
//         let totalAmount = 0
//         for(amount in incomes){
//             totalAmount += incomes[amount]
//         }
//         return totalAmount
//     },
//     totalExpense: function(expense){
//         let totalAmount = 0
//         for(amount in expense){
//             totalAmount += expense[amount]
//         }
//         return totalAmount
//     },
//     accountInfo: function(){
//         let info = `Fullame: ${this.firstname, this.lastName}\n Balance: ${this.totalIncome - this.totalExpense}`
//     },
//     addIncome: function () {
//         numOfAdditions = Number(prompt("How many incomes do you want to add to the list: "))
//         for (let i= 0; i < numOfAdditions; i++){
//             this.incomes.push(Number(prompt("Add an income to the list: ")))
//         }
//         return `new incomes successfully added`
//     },
//     addExpense: function () {
//         numOfAdditions = Number(prompt("How many expenses do you want to add to the list: "))
//         for (let i= 0; i < numOfAdditions; i++){
//             this.incomes.push(Number(prompt("Add an expense to the list: ")))
//         }
//         return `new expenses successfully added`
//     },
//     accountBalace: function(){
//         return `${this.totalIncome - this.totalExpense}`
//     }
// }
// console.log(personAccount.addExpense())


// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
    const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
// Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists,
// inform the user that he has already an account.
function signUp (users){
  let  id = prompt("create an id: "), username = prompt("Username: "),email = prompt("Email: "), password = prompt("Password: "),statement =""
  const newUser = {}, now = new Date()
    for(person in users){
        if((users[person]._id.includes(id)) && users[person]._id.includes(username)){
           statement = `You already have an account`
        }
        else{
            newUser._id =id,
            newUser.username = username,
            newUser.email = email,
            newUser.password = password,
            newUser.createdAt = `${now.getDay+1}/${now.getMonth + 1}/ ${now.getFullYear}/${now.getHours}/${now.getMinutes}`
            isLoggedIn = false
            }
        }
    }
    return statement
console.log(signUp(users))
// b. Create a function called signIn which allows user to sign in to the application

// The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

//         createdAt:'08/01/2020 10:00 AM',
//         isLoggedIn: false