 /* ----------------

            Assignment Problem -- 4
            তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 

এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।

            -------------     */
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
          
          };
          console.log(findingBadData([2, -5, -7, -13]));