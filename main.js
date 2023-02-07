

/*--- Text Description : The function name is mindGame it's called arithmetice the positive number and return the value ----*/

function mindGame(numbers) {
    if (typeof numbers !== 'number' || numbers <=0 ) {
        return 'please !! Input should be a number';
    }
    const math = ((((numbers * 3) + 10) / 2) - 5);
    return math;
}

/* ---- Text Description : The function name is evenOdd, input the text string and return the value is even or odd number ---- */

function evenOdd(stringType) {
    if (typeof stringType !== "string") {
        return "Please !! Enter String";
    }
    if (stringType.length % 2 === 0) {
        return "even";
    }
    else {
        return "odd"
    }
}

/* --- Text Description : The function name is isLGSeven, calculates the difference between it and 7, and returns either the difference or twice the input value, depending on the conditions. --- */

function isLGSeven(number){
    if(typeof number !=="number"){
        return "Please Enter Number";
    }
    const result = number;
    if(7 > result) {
        return number-7;
    }
    else{
        return result*2;
    }
}




/* ---- Text Description : This function name findingBadData & counts the number of negative elements, and returns the result, along with an error message if the input is not an array. ---- */

function findingBadData(array1) {

    if (!Array.isArray(array1)) {
        return "please enter an array";
    }

    let badDataCount = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] < 0) {
            badDataCount++;
        }
    }

    return badDataCount;

}



/*--- Text Description : The function name gemsToDiamond. There are Three Friends called  gems count the diamond Number and returns the result, with an error message if the inputs are not numbers.----*/

function gemsToDiamond(friendOne, friendTwo, friendThree) {
    if(typeof friendOne != 'number' || typeof friendTwo != 'number' || typeof friendThree != 'number'){
        return 'Please !! Provide all valid numbers';
    } 
    const friendOneGems = 21;
    const friendTwoGems = 32;
    const friendThreeGems = 43;

    const friendsOneDiamond = friendOne * friendOneGems;
    const friendsTowDiamond = friendTwo * friendTwoGems;
    const friendsThreeDiamond = friendThree * friendThreeGems;

    const totalDiamond = friendsOneDiamond + friendsTowDiamond + friendsThreeDiamond;
    
    if (totalDiamond > 1000 * 2) {

        return totalDiamond - 2000;
    }
    else {
        return totalDiamond;
    }

}
