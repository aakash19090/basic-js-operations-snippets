//  ************* TURING BASEBALL GAME PROBLEM STARTS *************

var ops = ["5", "-2", "4", "C", "D", "9", "+", "+"]

var pointsArr = []

const TuringCalPoints = (arr) =>{
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

console.log(TuringCalPoints(ops))

//  ************* TURING BASEBALL GAME PROBLEM ENDS *************





// ? Basic Array Operations

// * 1) Find index of specific item in array
// * 2) Find Element in array
// * 3) Find and Replace an item in Array at specific index
// * 4) Remove item at specific index in array
// * 5) Swap item at specific index in array


