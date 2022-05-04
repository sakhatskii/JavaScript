console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(true && true)
console.log(true && false)
console.log(false && true)

// || - or (сложение) 1+0=1
// && - and (умножение) 1*0=
// && первым выпонялется(умножение), || - вторым (сложение)
// 20 = 10 + 5 * 2

let item_1 = 5
let item_2 = 100
let item_3 = 50

if (item_1 > 4 || item_2 < 120 && item_3 !== 50) {
    console.log('Go eat')
}
else {
    console.log('Be hungry')
}

//------------------

let item_1 = 20
let item_2 = 20
while (item_1 < 25 && item_2 < 50) {
    console.log(item_1, ' = go eat')
    console.log(item_2, ' = go sleep')
    item_1++
    item_2++
}

// while(true) {цикл выполняется пока цикл true}
// item_1++ это приращение к переменной +1

//------------------------

let temperature = 0

while (temperature < 40) {
    if (temperature < 10) {
        console.log("temperature = ", temperature, "holodno")
    } else if (temperature >= 10 && temperature < 30) {
        console.log("temperature = ", temperature, "Horosho")
    } else {
        console.log("temperature = ", temperature, "Kapec")
    }
    temperature += 4
}

//-----------------------

for (temperature = 0; temperature < 40; temperature++) {

    if (temperature < 10) {
        console.log("temperature = ", temperature, "holodno")
    } else if (temperature >= 10 && temperature < 30) {
        console.log("temperature = ", temperature, "Horosho")
    } else {
        console.log("temperature = ", temperature, "Kapec")
    }
}