let storeName = "Azalia";
// Privet 
const storeDescription = {
    budget: 10000,
    employees: ['Zhemis', 'Asel', 'Tolkyn'],
    products: {
        alpenGold: 370,
        nestle: 400
    },
    open: true
};
// __________________________________________________________


/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


// __________________________________________________________________________________


function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    console.log(arr);
    console.log(result);
}

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) == "number") {
            data[i] *= 2;
        } else if (typeof(data[i]) == "string") {
            data[i] += " - done";
        }

    }
    console.log(data);
}

function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    let j = 0;
    for (let i = data.length - 1; i >= 0; i--) {
        result[j] = data[i];
        j++;
    }
    console.log(result);
}

// _________________________________________________________________
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)


// ________________________________________________________________

// Место для первой задачи
function sayHello(name) {
    return 'Привет, ' + name;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

// Место для третьей задачи
function getMathResult(num, times) {
    let result = `${num}`;
    let c = 0;
    if (typeof(times) == 'string' || times <= 0) return num;
    for (let i = 0; i < times - 1; i++) {
        c += num;
        result += `---${c+num}`;
    }
    console.log(result);
}

// __________________________________________________________

// Место для первой задачи
function calculateVolumeAndArea(a) {
    if (typeof(a) === 'number' && a >= 0 && a % 1 === 0) {
        return `Объем куба: ${a*a*a}, площадь всей поверхности: ${(a*a)*6}`;
    } else return 'При вычислении произошла ошибка';
}

console.log(calculateVolumeAndArea(5.2));

// Место для второй задачи
function getCoupeNumber(place) {
    if (place === 0 || place > 36) {
        return "Таких мест в вагоне не существует";
    } else if (typeof(place) === 'number' && place >= 0 && place % 1 === 0) {
        return Math.ceil(place / 4);
    } else return "Ошибка. Проверьте правильность введенного номера места";
}


console.log(getCoupeNumber(0.22));


// __________________________________________________________

// Место для первой задачи
function getTimeFromMinutes(minute) {
    let hour = '';
    if (typeof(minute) === 'number' && minute >= 0 && minute % 1 === 0) {

        switch (Math.floor(minute / 60)) {
            case 1:
                hour = ' час';
                break;
            case 2:
            case 3:
            case 4:
                hour = ' часа';
                break;
            default:
                hour = ' часов';
                break;
        }
        return 'Это ' + Math.floor(minute / 60) + hour + ' и ' + minute % 60 + ' минут';
    } else return 'Ошибка, проверьте данные';
}

console.log(getTimeFromMinutes(50));

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    if (typeof(a, b, c, d) === 'number')
        return Math.max(a, b, c, d);
    else return 0;
}

// _________________________________________________

// Фибаначчи

function fib(num) {
    if (typeof(num) != 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    } else if (num == 1) {
        return "0";
    } else {
        let prev0 = 0;
        let prev1 = 1;
        let result = prev0 + ' ' + prev1;
        for (let i = 1; i <= num - 2; i++) {
            let nextNum = prev0 + prev1;
            result += ' ' + nextNum;
            prev0 = prev1;
            prev1 = nextNum;
        }
        return result;
    }
}

console.log(fib(3));


// ___________________________________________________

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const { languages } = plan.skills;
        let str = `Мне ${plan.age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += lang.toUpperCase() + ' ';
        });
        return str;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


function showExperience(plan) {
    const { exp } = plan.skills;
    return exp;
}

console.log(showExperience(personalPlanPeter));


function showProgrammingLangs(plan) {
    const { programmingLangs } = plan.skills;
    let result = '';
    for (const key in programmingLangs) {
        result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return result;
}


console.log(showProgrammingLangs(personalPlanPeter));


// _________________________________________________


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';
    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';
    arr.forEach(member => {
        str += `${member} `;
    });
    return str;
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    })
}

standardizeStrings(favoriteCities);

// _________________________________________________

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) === 'string') {
        const arr = str.split('');
        arr.reverse();
        let result = '';
        for (const key in arr) {
            result += arr[key];
        }
        return result;
    } else return "Ошибка!";
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
    arr.forEach(function(curr) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });
    return str;
}

console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'CNY'));


// _________________________________________________
// (*) Продвинутая задача на работу с объектами и массивами

const shoppingMallData = {
    shops: [{
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let { shops, height, moneyPer1m3, budget } = data;
    let square = 0;
    let volume = 0;
    shops.forEach(e => {
        square += e.width * e.length;
    });
    volume = square * height;
    let moneyForHeating = volume * moneyPer1m3;
    if (moneyForHeating > budget) {
        return 'Бюджета недостаточно';
    }
    return moneyForHeating > budget ? 'Бюджета недостаточно' : 'Бюджета достаточно';
}

// ___________________________________________________

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Ersultan', 'Sultan', 'Naruto'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let newArr = [];
    let str = 'Оставшиеся студенты: ';
    let strStud = '';

    for (let i = 0; i < arr.length; i += 3) {
        if (arr.slice(i, i + 3).length != 3) {
            arr.slice(i, i + 3).forEach(e => {
                strStud += `${e}, `;
            });
            break;
        }
        newArr.push(arr.slice(i, i + 3));
    }
    if (strStud.length !== 0) {
        str += strStud.slice(0, -2);
    } else str += '-';

    newArr.push(str);
    console.log(newArr);
}

sortStudentsByGroups(students);
