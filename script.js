const student = "Масалов Никита Максимович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

let Real1 = prompt("какой реальный счет 1 команды?")
let Real2 = prompt("какой реальный счет 2 команды?")
let Predpolag1 = prompt("какой предполагаемый счет 1 команды?")
let Predpolag2 = prompt("какой предполагаемый счет 2 команды?")

if (Predpolag1 == Real1 && Predpolag2 == Real2) {
alert ("Счёт был угадан верно!")
} else if( Real1 > Real2 && Predpolag1 > Predpolag2){
alert("Счёт не угадали, но исход угадали")
} else if( Real1 < Real2 && Predpolag1 < Predpolag2 ){
alert("Счёт не угадали, но исход угадали")
} else if( Real1 == Real2 && Predpolag1 == Predpolag2 ){
alert("Счёт не угадали, но исход угадали")
} else {
    alert("Ни счёта, ни исхода не угадали")
}