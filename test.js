// class A {
//     constructor(name,email){
//         this.name = name
//         this.email = email
//     }

//     getName(){
//         console.log(this.name)
//     }

//     getEmail(){
//         console.log(this.email)
//     }
// }

// var user1 = new A('Akash', 'aakashsharma19090@gmail.com')


// class B extends A {
//     getDetail(){
//         console.log(`${this.name} ${this.email}`)
//     }
// }

// var user2 = new B('Ajay', 'ajay@gmail.com')


// * DEBOUNCING

// let counter = 0
// const showData = (name) => {
//     console.log("Fetching Data...", counter++);
//     console.log(name)
// }

// const debouncedFunction = (func, delay) => {
//     let timer
//     return (...args) => {
//         clearTimeout(timer)
//         timer = setTimeout(() => { 
//             func.apply(this,args) 
//         }, 500)
//     }
// }


// const getData = debouncedFunction(showData,500)

// window.addEventListener('keyup', () =>  getData("Akash Sharma"))