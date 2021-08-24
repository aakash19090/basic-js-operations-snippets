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
// elementsInArray()



// * 6) Replacing an item in Array at specific index

function replaceAtIndex(){
    const items = [
        {value: 100},
        {value: 200},
        {value: 300},   // 1st Occurence
        {value: 400},
        {value: 500}   // 2nd Occurence
    ];
    // ? First Find Index of Element in Array

    const elemIndex = items.findIndex( item => item.value === 300)
    items[elemIndex] = {value: 900}
    console.log('300 replaced by 900 at Index 2 ->', items);
}
// replaceAtIndex()


// * 7) Remove item in Array at first Index

function removeAtFirstIndex(){
    const items = [
        {value: 100},
        {value: 200},
        {value: 300},   // 1st Occurence
        {value: 400},
        {value: 500}   // 2nd Occurence
    ];

    items.shift()
    console.log('Removing 100 at first index', items)
    return items
}
// removeAtFirstIndex()


// * 8) Remove item in Array at Last Index

function removeAtLastIndex(){
    const items = [
        {value: 100},
        {value: 200},
        {value: 300},   // 1st Occurence
        {value: 400},
        {value: 500}   // 2nd Occurence
    ];

    items.pop()
    console.log('Removing 500 at last index', items)
    return items
}
// removeAtLastIndex()


// * 9) Remove item in Array at specific Index

function removeAtIndex(){
    const items = [
        {value: 100},
        {value: 200},
        {value: 300},   // 1st Occurence
        {value: 400},
        {value: 500}   // 2nd Occurence
    ];
    // ? First Find Index of Element in Array

    const elemIndex = items.findIndex( item => item.value === 300)
    const removedItems = items.splice(elemIndex, 1) // ? To remove multiple count, pass the count number as 2nd argument
    console.log('New array after removing 300 at index 2 is ->', items)

    // Another method
    const newItems = items.filter(item=> item.value !== 300)
    console.log('Another method using Filter() for New array after removing 300 at index 2 is ->',newItems)
}
// removeAtIndex()