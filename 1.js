let curr = +prompt ('Какую валюты вы хотите обменять?', '');
let convert = +prompt ('На какую валюту вы хотите поменять,', '');
let amount = +prompt ('Сколько вы хотите обменять?', '');


if (curr = 'Euro') { let curr = 1 ;
} else if (curr = 'Dollar') { let curr = 1 ;
} else if (curr ='Rub') { let curr = 1 ;
} else if (curr = 'Pln') { let curr = 1 ;}

if (convert = 'Euro') { let convert = 3 ;
} else if (convert = 'Dollar') { let convert = 6 ;
} else if (convert = 'Rub') { let convert = 11 ;
} else if (convert = 'Pln') { let convert = 5 ;}

console.log(convert);

function conv (amount, convert) {
    console.log(amount * convert) }

conv(amount, convert);





const options = {
    name: "Genres",
    color: {
        obj: 22,
        backgroundColor: "Color",
        },
    qwark: 121,
    count: [1000, 200, 100, 12, 11, 10, 8, 1],
    elements: {
        size: 22,
        private: true,
    } ,
}

options.count.forEach(function (i, b, count){
console.log(`${b}: ${i} in massive ${count}`)
});


// i-item b-index count-massive


for (key of options.count){
    console.log(key)
}
console.log(`in massive ${options.count} count elements ${options.count.length}`);


// через for of можно применять breake and continue 
// перебор жлементов в массиве 


for (let key in options) { 
    if (typeof(options[key]) === 'object') {
    for (let value in options[key]) {
        console.log(`Svoistvo ${value} have ${options[key][value]}`);}
    } else (
    console.log(`svoistvo ${key} haven ${options[key]}`)) }


// перебор элементов в обьекте 

    console.log (Object.keys(options))

// Название ключей (свойств)
// .length по номерам
    
