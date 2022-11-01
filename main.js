/**********
 * DATA *
 **********/
//Global Arrays
let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/

//reset-Button
let resetButton = document.querySelector("#reset-button");

 //d6-roll
let imageD6 = document.querySelector("#d6-roll");
let meanD6 = document.querySelector("#d6-rolls-mean");

 //doubleD6-roll
let imageDoubleD6 = document.querySelector("#double-d6-roll-1");
let imageDoubleD62 = document.querySelector("#double-d6-roll-2");
let meanDoubleD6 = document.querySelector("#double-d6-rolls-mean");

//d12-roll
let imageD12 = document.querySelector("#d12-roll");
let meanD12 = document.querySelector("#d12-rolls-mean");

//d20-roll
let imageD20 = document.querySelector("#d20-roll");
let meanD20 = document.querySelector("#d20-rolls-mean");





/*******************
 * EVENT LISTENERS *
 *******************/
resetButton.addEventListener("click", function(){
    console.log("Reset clicked");

    //callBack reset function
    reset();
})

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~D6
imageD6.addEventListener("click", function(){
    console.log("D6 clicked");
    d6RollFunciton();
})

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DoubleD6
imageDoubleD6.addEventListener("click", function(){
    console.log("DoubleD6 clicked");
    doubleD6RollFunciton();
})
imageDoubleD62.addEventListener("click", function(){
    console.log("DoubleD6-2 clicked")
    doubleD6RollFunciton();
})
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~D12
imageD12.addEventListener("click", function(){
    console.log("D12 clicked");
    d12RollFunciton();
})

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~D20
imageD20.addEventListener("click", function(){
    console.log("D20 clicked");
    d20RollFunciton();
})


/******************
 * RESET FUNCTION *
 ******************/
function reset(){
    //Empty global arrays
    sixes = [];
    doubleSixes = [];      
    twelves = [];
    twenties = [];

    //reset images
    imageD6.src = "./images/start/d6.png";
    imageDoubleD6.src = "./images/start/d6.png";
    imageDoubleD62.src = "./images/start/d6.png";
    imageD12.src = "./images/start/d12.jpeg";
    imageD20.src = "./images/start/d20.jpg";

    //change text
    meanD6.innerText = "N/A";
    meanDoubleD6.innerText = "N/A";
    meanD12.innerText = "N/A";
    meanD20.innerText = "N/A";
};
reset();
/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function d6RollFunciton(){
    let result = getRandomNumber(6);
    console.log(result);

    imageD6.src =`./images/d6/${result}.png`;

    /*
    ./images/d6/1.png
    ./images/d6/2.png
    ./images/d6/3.png
    ./images/d6/4.png

    if(result === 1){
        imageD6.src = "./images/d6/1/png"       same as above
    }else if(result === 2){
        imageD6.src = "./imgaes/d6/2/png"
    }
    */

    sixes.push(result);
    
    meanD6.innerText = getMean(sixes);
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DoubleD6
function doubleD6RollFunciton(){
    let result = getRandomNumber(6);
    let result2 = getRandomNumber(6);
    console.log(result);

    imageDoubleD6.src =`./images/d6/${result}.png`;
    imageDoubleD62.src =`./images/d6/${result2}.png`;
    doubleSixes.push(result + result2);
    
    meanDoubleD6.innerText = getMean(doubleSixes);
}


//// D12 function ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function d12RollFunciton(){
    let result = getRandomNumber(12);
    console.log(result);

    imageD12.src =`./images/numbers/${result}.png`;

    twelves.push(result);
    
    meanD12.innerText = getMean(twelves);
}

////// D20 function ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function d20RollFunciton(){
    let result = getRandomNumber(20);
    console.log(result);

    imageD20.src =`./images/numbers/${result}.png`;

    twenties.push(result);
    
    meanD20.innerText = getMean(twenties);
}



/****************
 * MATH SECTION *
 ****************/

function getMean(array){
    let total = 0;

    for(let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total/array.length;
}