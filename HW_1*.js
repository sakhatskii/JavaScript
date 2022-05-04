// 1*: Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) Ваши преобразования}
// Вывести в консоль результат работы функции с возрастами 17, 18, 61


function age(age_1, age_2, age_3) {

    if (age_1 < age_2) {
        console.log('You dont have access cause your age is ' + age_1 + ' .Its less then')
    }
    else if (age_1 >= age_2 && age_1 < age_3) {
        console.log('Welcome!')
    }
    else if (age_1 > age_3) {
        console.log('Keep calm and look Culture channel')
    }
    else { console.log('Technical work') }
}
age(17, 18, 61)
