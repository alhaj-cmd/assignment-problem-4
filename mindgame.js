function mindGame(numbers) {
    if (typeof numbers !== 'number' || numbers <=0 ) {
        return 'please !! Input should be a number';
    }
    const math = ((((numbers * 3) + 10) / 2) - 5);
    return math;
}
console.log(mindGame(5));


  /* ----------------

            Assignment Problem --1

            -------------     */