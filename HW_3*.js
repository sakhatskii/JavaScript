// 3**: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number


function age(age_1, age_2, age_3) {

    age_1 = Number(age_1)
    age_2 = Number(age_2)
    age_3 = Number(age_3)

    if (!isNaN(age_1) && !isNaN(age_2) && !isNaN(age_3)) {

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

    else { console.log('not a number') }
}
age(15, 20, 30)
age('20', '20', '30')
age(5, 5, 5)
age('qwwer')
age('20', 4, 5)

    // let agePromt = prompt('Enter age')
    // age(agePromt)
