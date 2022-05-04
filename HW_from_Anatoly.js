// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

for (i = 0; i <= 10; i++) {
    console.log(2 ** i)
}
// решение 2

for (i = 0; i <= 10; i++) {
    console.log(Math.pow(2, i))
}
// решение 3

let i = 1
while (i <= 10) {
    console.log(2 ** i)
    i++
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const degree = function math(i) {
    console.log(2 ** i)
}
degree(10)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее

let word = ':)'
let empty = ''
for (i = 1; i <= 4; i++) {
    empty += word
    console.log(empty)
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, number)

function print(stroka, number) {
    let result = ''
    for (i = 1; i <= number; i++) {
        result += stroka
        console.log(result)
    }
}
print(':)', 5)

// решение 2

function print(stroka, number) {
    for (i = 1; i<= number; i++){
        console.log(stroka.repeat(i))
    }
}
print(':)',5)



