// {
//     // 1 - masala
//     // try {
//     //     function onlyNumbers(array) {
//     //         return array.filter(i => i > 0)
//     //     }
//     //     console.log( onlyNumbers([-5, 6, 3, -3, false]) );
//     // } catch (error) {
//     //     console.log("xato bor");
//     // }
// }

// {
//     // 2 - masala
//     // try {
//     //     function tenth(number) {
//     //         return Math.floor(number / 10) % 10
//     //     }
//     //     console.log( tenth(123));
//     //     console.log( tenth(45678));
//     // } catch (error) {
//     //     console.log("xato bor");
//     // }
// }

// {
//     // 3 - masala
//     // try {
//     //     function binary(num) {
//     //        switch (num) {
//     //         case 1:
//     //             return true
//     //         case 0:
//     //             return false
//     //         default:
//     //             return null
//     //        } 
//     //     }
//     //     console.log( binary(1));
//     //     console.log( binary(0));
//     //     console.log( binary(7));
//     // } catch (error) {
//     //     console.log("xato bor");
//     // }
// }

// {
//     // 4 - masala
//     // try {
//     //     function card(num, boolean) {
//     //         if (boolean === false) {
//     //             return num
//     //                 .slice(15)
//     //                 .replace(25, "**** **** **** **")
//     //         } else {
//     //             return num
//     //         }
//     //     }
//     //     console.log( card("8600 1234 5671 2589", false) )
//     //     console.log( card("8600 1234 5671 2589", true) );
//     // } 
//     // catch (error) {
//     //     console.log("xato bor");
//     // }
// }

// { 
//     // 5 - masala
//     // try {
//     //     function checkPassword(password) {
//     //         if (password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password)) {
//     //             return true
//     //         }else{
//     //             return false
//     //         }
//     //     }
//     //     console.log( checkPassword("12345678") );
//     //     console.log( checkPassword("12345hello") );
//     // } catch (error) {
//     //    console.log("xato bor"); 
//     // }
// }

// {
//     // 6 - masala
//     // try {
//     //     function camelCase(str) {
//     //         return str.toLowerCase()
//     //                   .split(`-`)
//     //                   .map((text, index) => {
//     //                     if (index === 0) {
//     //                         return text;
//     //                     }
//     //                     return text.charAt(0). toUpperCase() + text.slice(1);
//     //                   })
//     //                   .join(``);
//     //     }
//     //     console.log(camelCase("kabab-case"));
//     //     console.log(camelCase("lorem-ipsum-dolor"));
//     // } catch (error) {
//     //     console.log("xato bor");
//     // }
// }

{
    try {
        function bigAndSmall(num) {
            const numbers = num.trim()
                               .split(` `)
                               .map(Number)
            
            const min = Math.min(...numbers);
            const max = Math.max(...numbers);

            return {min, max}
        }
        console.log( bigAndSmall("1 2 3 4 5 "));
        console.log( bigAndSmall("5 25 33 44"));
    } catch (error) {
        console.log("xatolik boe");
    }
}