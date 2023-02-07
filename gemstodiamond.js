
 /* ----------------

            Assignment Problem --  5

            -------------     */
            /*--------- Text Description: 
            ------*/

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

console.log(gemsToDiamond(100, 5, 1));