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

           Problem 2: Finding even or odd


তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 



এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input & Output:



Input: ‘Phero’

Output: odd



Input: ‘Batch7’

Output: even



Input: ‘chatgpt’

Output: odd





           -------------     */