var name = "dmitry"; // Создание переменной с строковым значением
name = "Ivan";
//console.log(name); // Ivan
//console.log("THis is message from console"); // Ivan

var someArray = ["Hello", "this", "is ", "array"]; // Массив с строковыми значениями

var firstElement = someArray[0]; // "hello"
console.log(firstElement);

var secondElement = someArray[1]; // "this"
console.log(secondElement);

var Person = {
  name: "Dmitry",
  age: 32
};

var User = {
  name: "Nissan",
  number: 328
};

console.log(Person.age); // 32
console.log(Person.name); // Dmitry

// Типы данных в JS
var string = "THis is string"; // string
var array = ["people", "are", "awesome"];
var falsyValue = false; // true BOOLEAN
var User = { name: "Igor", age: 534, hobbies: ["Drinking", "Fuck boys"] }; //
var age = 200; //

// Ветвление ( условные операторы))
// Позволяет выполнить различные действия в зависимости от условий.

// - Оператор if-else   if and else statement

// - Оператор switch-case
// - Условная тернарная операция

if (false) {
  console.log("THis is inside in block of IF stetement");
} else if (false) {
  console.log("This inside else if block");
} else {
  console.log("this");
}

// Оператор сравнения возвращает всегда либо false либо true
// ===

var isItDmitry = "Igor" === "Dmitry"; // ?
console.log(isItDmitry);

if (isItDmitry) {
  //false
  console.log("THis is really pogo dmitry");
} else {
  console.log("Probably this is fucking drunk Igor");
}

var manName = "Igor";

if (manName === "Dmitry") {
  console.log("Hi Dmitry");
} else if (manName === "Igor") {
  console.log("DO you wanna drink?");
} else {
  console.log("Who the fuck are you?");
}

var YoungGirl = 14;
var canDrink = 18;

if (canDrink === YoungGirl) {
  console.log("You can drink");
} else {
  console.log("You cannot buy this drink🍺");
}

var concatination = "Dmitry " + "loves " + "Robert";
var fullName = "Dmitry" + "Arsenev";

// Цикл - это многократное повторения одного участка кода.
// For,while, do . .. while

var banana = `🍌 `;
var bananas = "This is banana box🥡: ";
// var count = 0;

// while (true) {
//   bananas = bananas + banana;

//   if (count === 10) {
//     console.log(bananas);
//     return false;
//   }
//   //count = count + 1;
//   count++; // increment
// }

// //

// Отличие while от for
// Цикл for обеспечивает краткий способ написания структуры цикла.
// В отличие от цикла while, оператор for потребляет инициализацию,
//  условие и увеличение / уменьшение в одной строке,
//   что обеспечивает более короткую и ясную форму

// --------------------------------------------------------
var countOfBananas = 10;
var apple = "🍎 ";
for (var count = 0; count <= countOfBananas; count++) {
  bananas = bananas + banana + apple;
  if (count === countOfBananas) {
    console.log(bananas);
  }
}

// -------------------------------Задания на проверку знаний 🍳-------------------------------------------

// Создать переменную со строковым значением
var myname = "DmitryArsenyev"; // 👌

// Создать переменную со булевым значением
var Igorisafuckingfaggot = true; // 👌

// Создать переменную с номером
var DaltonSmith = 2;
var MichaelMena = 3;
var HenryCabelus = 4;
var Meatboy = 1;

// Создать переменную с объектом

var myleftbiceps = {
  Size: 100,
  Color: "White",
  Power: "Insane"
};

// Создать переменную со массивом с значением "Frogger" , переменная myname, 34
var Myfriends = []; // 👌
Myfriends[0] = "Ivan"; //
Myfriends[1] = "My right hand"; //

console.log(Myfriends);

// Создать условие при котором переменная myname будем проверятся на Igor

if (myname === "Igor") {
  console.log("name is Igor");
} else {
  console.log("Ваше имя не Игорь, а " + myname);
}

// и если значение ложно то вывести данную строку с переменной "Ваше имя не Игорь, а ______"

// Создать цикл for
// Где в консоль выведется 5 🍕
