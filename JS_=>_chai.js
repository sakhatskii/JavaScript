function yolochka1(item_1, item_2) {
    let mass = 'Hello!!'
    console.log(mass, item_1, item_2)

}
yolochka1(1, 2)

//-----------

function f1() { console.log('hello') }
let f2 = () => console.log('hello_hello')
f1()
f2()

// -------------

function f1() { console.log('hello') }
let f2 = (t1, t2) => console.log('sum =', t1 + t2)
f1()
f2(2, 3)

// ---------------

let t1 = 30
let t2 = 20

let f33 = (t1 < t2) ?
    (tt1, tt2) => console.log('order =', tt1 + tt2) :
    (tt1, tt2) => console.log('order =', tt1 - tt2);
f33(3, 4)

//---------------

function banana() { };

banana.prototype.fast = function () {
    console.log('FAST !!')
}
banana.prototype.green = function (sun, co2) {
    console.log('Green ==', sun, ' + ', co2)
}
banana.prototype.shishki = function () {
    console.log('shishki == Yolki')
}

let forest = new banana()

forest.fast()
forest.green(4500, 50)
forest.shishki()