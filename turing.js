//  ************* TURING BASEBALL GAME PROBLEM STARTS *************

var ops = ["5", "-2", "4", "C", "D", "9", "+", "+"]

var pointsArr = []

var TuringCalPoints = (arr) =>{
    arr.map( (item,index) => {
        if(item === 'C'){
            pointsArr.pop()
        }
        else if(item === 'D'){
            var lastScore =  pointsArr[pointsArr.length - 1];
            var updatedScore = 2 * Number(lastScore) ;
            pointsArr.push(updatedScore.toString())
        }
        else if(item === '+'){
            var lastScore =  Number(pointsArr[pointsArr.length - 1]);
            var secondLastScore =  Number(pointsArr[pointsArr.length - 2]);
            var sum = lastScore + secondLastScore
            pointsArr.push(sum.toString());

        }
        else{
            pointsArr.push(item);
        }
    })

    var totalPoints = pointsArr.reduce((a,b) => Number(a) + Number(b));
    console.log(pointsArr);

    return totalPoints
}

// console.log(TuringCalPoints(ops)) 

//  ************* TURING BASEBALL GAME PROBLEM ENDS *************



//  ************* TURING CODING CHALLENGE PROBLEM 1 STARTS *************

let input = [1,2,3,4]

function productArr(nums){
    let result = []
    let all_nums

    for( let i = 0; i < nums.length; i++ ){
        let index = i
        all_nums = nums.filter( (num, index) => index !== i )
        let sum = all_nums.reduce( (a,b) => a*b )
        result.push(sum)
    }
    console.log(result);
    return result
}

// productArr(input)

//  ************* TURING CODING CHALLENGE PROBLEM 1 ENDS *************



//  ************* TURING CODING CHALLENGE PROBLEM 2 STARTS *************

let intArr = [2,2,3,3,4]
let resultArr = []
function LUCKY_INT(arr){
    for(let i = 0; i < arr.length; i++){
        let index = i
        let currItem = arr[i]
        const filteredArr =  arr.filter( item => item === currItem )
        
        resultArr.push(filteredArr)
        
    }

    const lengthArr = resultArr.map( item => item.length)
    const highestIndex = lengthArr.indexOf(Math.max(...lengthArr));

    const luckInt = resultArr[highestIndex][0];

    const isLucky = intArr.every( item => item <= luckInt )

    // return luckInt

    // // if(isLucky){
    // //     return luckInt
    // // }else{
    // //     return -1
    // // }


}
// console.log(LUCKY_INT(intArr)) 

//  ************* TURING CODING CHALLENGE PROBLEM 2 ENDS *************

let n = 9
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function sockMerchant(n, ar) {
    // Write your code here
    let pairsCount = 0
    let checkedColors = []
    for( let i = 0; i < ar.length ; i++ ){
        let index = i
        let item = ar[i]
        

        if(!checkedColors.includes(item)){
            const filterArr = ar.filter( arItem => arItem === item )
            if(filterArr.length > 1){
                if(filterArr.length % 2 === 0){
                    let pairFound = filterArr.length/2
                    pairsCount += pairFound
    
                }else{
                    let pairFound = (filterArr.length -1)/2
                    pairsCount += pairFound
                }
            }
            checkedColors.push(item)
        }
    }
    console.log(pairsCount);
    return pairsCount
}
// sockMerchant(n,ar)
