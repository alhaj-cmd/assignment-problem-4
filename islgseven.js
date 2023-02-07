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

console.log(isLGSeven(10));