                // FUNCIONES

                var x = 5;
                // let z = 9;
                var a = 4;
                var b = 6;

                function sum(x) {
                    return x + x;
                    // c = 9;
                }

                var suma = function(x) {
                    return x + x;
                }

                var suma2 = function sumas(doc) {
                    x = doc;
                    // x += x;
                    // console.log(z);
                    x++;
                    // Recursividad
                    return x == 15 ? x : sumas(x);
                }

                console.log(suma2);
                // console.log(c);
                console.log(suma(x));
                console.log(sum(x));

                function multi() {
                    console.log(4 * 5);
                }
                multi();

                (function multi2() {
                    console.log(44 * 55);
                })();

                let multi3 = () => {
                    console.log(444 * 555);
                }
                multi3();

                (function operadores(a, b) {
                    let a = 8;
                    let b = 4;
                    // Suma 
                    console.log(a + b);
                    // Resta
                    console.log(a - b);
                    // Multiplicacion
                    console.log(a * b);
                    // Division
                    console.log(a / b);
                })();

                let operadores2 = (a2, b2) => {
                    let a2 = 6;
                    let b2 = 3;
                    // Suma 
                    console.log(a2 + b2);
                    // Resta
                    console.log(a2 - b2);
                    // Multiplicacion
                    console.log(a2 * b2);
                    // Division
                    console.log(a2 / b2);
                }


                // CALLBACK
                function printName(fn) {
                    fn('Hola')
                }

                function print(name) {
                    console.log(name);
                }
                printName(function(message) {
                    console.log(message);
                });
                printName(print)