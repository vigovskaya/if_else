// 1 задача

const number = +prompt('Введите число', 0);

if(number % 2 == 0) {
    alert('Число четное!');
}

else {
    alert('Число нечетное!');
}




// 2 задача
const number1 = +prompt('Введите первое число', 0);
const number2 = +prompt('Введите второе число', 0);
const calc = prompt('Выберите операцию: +, -, /, *, %, **');
let result;
switch(number1, number2, calc){
    case '+' :
        alert(result = number1 + number2);
        break;
    
    case '-': 
        alert(result = number1 - number2);
        break;

    case '/':
        if (number2 !== 0) {
            alert(result = number1 / number2);
        }

        else {
            alert('Делить на ноль нельзя!');
        }
        break;

    case '*':
        alert(result = number1 * number2);
        break;

    case '%':
        if (number2 !==0) {
            alert(result = number1 % number2);
        }

        else {
            alert('Нельзя делить на ноль при взятии остатка!')
        }

    case '**':
        alert(result = number1 ** number2);
        break;
    
    default:
        alert('Некорректное значение');
}

// 3 задача 

let password = prompt('Введите пароль');

if (password.length > 8) {

    alert('Пароль успешно установлен');
}

else {
    
    alert('Пароль меньше 8 символов!');
}


// 4 задача

const age = +prompt('Введите возраст');

age > 12 ? alert('Доступ разрешен') : alert('Доступ запрещен');


// 5 задача

let hour = +prompt('Введите ваше время', 0);

if(hour>5 && hour<12) {
    alert('У вас утро.');
}

else if(hour>11 && hour<18) {
    alert('У вас день.');

}

else if(hour>17 && hour<24) {
    alert('У вас вечер.');
}

else if(hour==0 && hour<6) {
    alert('У вас ночь');
}

else {
    alert ('Ошибка');
}

// 6 задача 

let numbers = +prompt('Введите ваше число', 0);

let first_number = parseInt(numbers / 10);

let last_number = numbers % 10;

if (numbers > 9 && numbers < 100 ) {

    if (first_number == last_number) {
        alert('Это палиндромное число');
    }

    else {
        alert('Это не палиндромное число');
    }

}

else {
    alert('Число недвузначное!')
}


// 7 задача 

const month = +prompt('Введите номер месяца');

switch (month) {
    case 1: 
    case 2: 
    case 12:
        alert('Зима');
            break;

    case 3: 
    case 4: 
    case 5:
        alert('Весна');
            break;
    
    case 6: 
    case 7:
    case 8:
        alert('Лето');
            break; 
    
    case 9: 
    case 10:
    case 11:
        alert('Осень');
            break;
    default: 
        alert('Неверное значение.')
}

// 8 задача

const agePerson = +prompt('Введите ваш возраст:', 0);

const heightPerson = +prompt('Введите ваш рост:', 0);

if (agePerson > 18 && heightPerson > 160) {
    alert('Вы можете участвовать в соревновании');
}

else if (agePerson < 18) {
    alert('Вы слишком молоды.')
}

else if (heightPerson < 160) {
    alert('Вы не проходите по росту.')
}

else {
    alert('Ошибка.')
}