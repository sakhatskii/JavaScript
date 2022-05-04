// 2*: Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. 
// И если он не Number - кидалась ошибка.

// Решение №1 

function age(age_1, age_2, age_3) {

    if (age_1 != Number(age_1)) {
        console.log(age_1 + ' - this is not a number')
    }
    if (age_2 != Number(age_2)) {
        console.log(age_2 + ' - this is not a number')
    }
    if (age_3 != Number(age_3)) {
        console.log(age_3 + ' - this is not a number')
    }

    else if (age_1 < age_2) {
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
age('d', 5, 5)

// Решение №2 

function age(age_1, age_2, age_3) {

    if (age_1 != Number(age_1) || age_2 != Number(age_2) || age_3 != Number(age_3)) {
        console.log('One of ages is not a number')
    }

    else if (age_1 < age_2) {
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

age(12, 24, 32)
age('s', 2, 3)

// Решение №3

function age(age_1, age_2, age_3) {

    if (typeof age_1 == 'number' && typeof age_2 == 'number' && typeof age_3 == 'number') {

        if (age_1 < age_2) {
            console.log('You dont have access cause your age is ' + age_1 + ' .Its less then')
        }
        else if (age_1 >= age_2 && age_1 < age_3) {
            console.log('Welcome!')
        }
        else if (age_1 > age_3) {
            console.log('Keep calm and look Culture channel')
        }
        else { console.log('Tchnical work') }
    }

    else { console.log('not a number') }
}

age(1, 2, 3)
age(5, 5, 5)
age()
age('qwwer')
age('qw', 4, 5)