/*

-----alert

window.alert('hej');
alert('.');

-----let

let difference = 4-7;
alert(difference);
console.log(difference)

difference = 'testujemy';
console.log(difference)
alert(difference);

let difference = 37;

-----var

var difference = 4-7;
alert(difference);
console.log(difference)

difference = 'testujemy';
console.log(difference)
alert(difference);

var difference = 37;
console.log(difference)
alert(difference)
 
-----const

const difference = "tekst nowy";
console.log(difference)
alert(difference)

difference = 6-2
console.log(difference)
alert(difference)

-----document write

let difference = 4-7;
document.write('Pierwsze wyświetlenie zmiennej')
document.write(difference)

document.write('<br>Drugie wyświetlenie zmiennej: '+difference)

document.write('<br><p>Trzecie wyświetlenie zmiennej: '+difference+"</p>")
*/

 let difference = 4-7;
// document.getElementById('output').innerHTML = '<h2>testujemy. Wartość zmiennej: </h2>'+difference
 document.getElementById('output').innerHTML = `<h2>testujemy. Wartość zmiennej: ${difference*5} </h2>`

