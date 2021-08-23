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

// console.log(TuringCalPoints(ops)) 

//  ************* TURING BASEBALL GAME PROBLEM ENDS *************




// ? Basic Array Operations

// * 1) Find index of specific item in array ( 1st Occurence in array )
// * 2) Find index of specific item in array ( Last Occurence in array )
// * 2) Find index of specific item in array at all occurences ( At multiple indexes in array  )


// // * 2) Find Element in array
// // * 3) Find and Replace an item in Array at specific index
// // * 4) Remove item at specific index in array
// // * 5) Swap item at specific index in array

// * 1) Find index of specific item in array ( 1st Occurence in array )

function indexFirstOccurence(){
    var items = [
        {value: 100},
        {value: 200},
        {value: 300},   // 1st Occurence
        {value: 400},
        {value: 300}   // 2nd Occurence
    ];

    var index = items.findIndex(item => item.value === 300)
    console.log('First Occurence Index of 300 -> ', index)
    
    return index

}
// indexFirstOccurence()


// * 2) Find index of specific item in array ( Last Occurence in array )

function indexLastOccurence(){
    var items = [
        100,
        200,
        300,
        400,
        300
    ];

    var index = items.lastIndexOf(300)
    console.log('Last Occurence Index of 300 -> ', index)

    return index

}
// indexLastOccurence()


// * 3) Find index of specific item in array at all occurences ( At multiple indexes in array  )

function indexMultipleOccurences(){
    const items = [
        {value: 100},
        {value: 200},
        {value: 300},   // 1st Occurence
        {value: 400},
        {value: 300},   // 2nd Occurence
        {value: 700},
        {value: 100},
        {value: 300},
        {value: 900},
        {value: 300}
    ];

    let foundAtIndexes = []
    
    items.map( (item, index) => {
        if(item.value === 300){
            foundAtIndexes.push(index)
        }
    } )
    console.log('300 Found at these indexes -> ', foundAtIndexes) 
    return foundAtIndexes
}

// indexMultipleOccurences() 


// * 4) Find Element in array that meets a condition

function elementInArray(){
    const items = [
        {value: 100},
        {value: 200},
        {value: 300},   // 1st Occurence
        {value: 400},
        {value: 300}   // 2nd Occurence
    ];
    
    const foundElement = items.find( item => item.value === 300 )
    console.log('Item with value 300 is -> ', foundElement);

    return foundElement
}
// elementInArray()



// * 5) Find All Elements in array that meets a condition

function elementsInArray(){
    const items = [
        {value: 100},
        {value: 200},
        {value: 300},   // 1st Occurence
        {value: 400},
        {value: 300}   // 2nd Occurence
    ];
    
    const foundElements = items.filter( item => item.value === 300 )
    console.log('All Items with value 300 is -> ', foundElements);

    return foundElements
}
elementsInArray()