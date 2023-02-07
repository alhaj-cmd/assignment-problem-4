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

console.log(evenOdd('dadi'));


 /* ----------------

            Assignment Problem -- 2

            -------------     */