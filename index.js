// Vypište do stránky všechna čísla.
// Vypište do stránky druhé mocniny všech čísel.
// Vypište do stránky pouze záporná čísla.
// Vypište do stránky absolutní hodnotu všech čísel.
// Vypište do stránky pouze sudá čísla.
// Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
// Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
// Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
// Spočítejte, kolik je v seznamu záporných čísel.
// Spočítejte součet všech čísel v poli.
// Spočítejte průměr všech čísel v poli.
// Spočítejte součet všech kladných čísel v poli.

const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];
//   numbers.forEach((number) => {
//     document.body.innerHTML += `<p>${number}</p>`;
//   });

//   numbers.forEach((number) => {
//     document.body.innerHTML += `<p>${number * number}</p>`;
//   });
  
// numbers.forEach((number) => {
//     if (number < 0)
//         document.body.innerHTML += `<p>${number}</p>`;
//       });

// numbers.forEach((number) => {
//         document.body.innerHTML += `<p>${Math.abs(number)}</p>`;
//       });

// numbers.forEach((number) => {
//     if (number % 2 === 0) 
//         document.body.innerHTML += `<p>${number}</p>`;
//       });

// numbers.forEach((number) => {
//         if (Math.abs(number) % 3 === 0) 
//             document.body.innerHTML += `<p>${number}</p>`;
//           });


// numbers.forEach((number) => {
//  document.body.innerHTML += `<p>${Math.abs(number - 5)}</p>`;
//  });

// numbers.forEach((number) => {
//     document.body.innerHTML += `<p>${(number - 5) * (number)}</p>`;
// });

// const negativeCount = numbers.filter(num => num < 0).length;
//     document.body.innerHTML += `<p>${negativeCount}</p>`;

// const allValues = numbers.length;
//     document.body.innerHTML += `<p>${allValues}</p>`;

// const count = numbers.reduce((acc, num) => acc + num, 0);
// const average = count / numbers.length;
//     document.body.innerHTML += `<p>${average}</p>`;

const positiveValues = numbers
    .filter(num => num > 0)
    .reduce((acc, num) => acc + num, 0);
        document.body.innerHTML += `<p>${positiveValues}</p>`;



    







