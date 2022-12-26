let curr = prompt ('Какую валюты вы хотите обменять?', '');
let convert = prompt ('На какую валюту вы хотите поменять,', '');
let amount = +prompt ('Сколько вы хотите обменять?', '');

if (curr = 'Euro') { let currs = 1 ;
} else if (curr = 'Dollar') { let currs = 1 ;
} else if (curr ='Rub') { let currs = 1 ;
} else if (curr = 'Pln') { let currs = 1 ;};

if (convert = 'Euro') { let converts = 3 ;
} else if (convert = 'Dollar') { let converts = 6 ;
} else if (convert = 'Rub') { let converts = 11 ;
} else if (convert = 'Pln') { let converts = 5 ;};

let cur = currs;
let con = converts;

console.log(convert);

function conv (currs, converts) {
    console.log(currs * converts) }

conv(currs, converts);





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
    
const first ={a : 
        {a1 : 1,
         a2 : {
            a22 : 22,
            a23 : 23
},  
    a3 : 3},   
    b : 10,  
    c : 11,  
    d : 12,};

function copy(mainfirst) {
    let second = {}; 
    let key;
    let i;
    for (key in mainfirst) {
        second[key] = mainfirst[key];
        for (i in mainfirst[key]) {
            second[key][i] = mainfirst[key][i];
        }}    
        return second; }

    const three = copy(first);
    three.d = 1;
    three.a.a3 = 1;

console.log(first);
console.log(three);
// копирование  

 const number = (Object.assign(three));
 number.c = 1;

 console.log(number);
//  более короткое копирование

const oldSpreatMassive = [322, 511, 1 ,2 , "12", "13", "14"],
      oldSpreatObject = {
        a : true, 
        b : 12,
        c : 1,
        d : {
            d1 : 12,
            d2 : 13,
        }
      };

const newSpreatMassive = [...oldSpreatMassive, 3, 4];
// spreat для массива
const newSpreatObject = {
    ...oldSpreatObject,
    e : 12,
    f :12
}
// spreat для обьекта

newSpreatObject.d.d1 = 11;

console.log(newSpreatMassive);
console.log(newSpreatObject);
console.log(oldSpreatObject);
// не копирует обьект в обьекте

function createCounter() {
    let counter = 0;

    const myFunction = function() {
        counter = counter + 1;
        return counter;
    }
return myFunction;
}

const increment = createCounter();
const c1 = increment();
console.log(increment , c1); 

document.querySelectorAll


let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],

        some: {
            students: [{
                name: `test`,
                progress: 41.6
        }]
        }
    }
};

function getProgressByIter (data) {
    let total = 0,
        students = 0;
        
        for ( let course of Object.values(data)) {
            if (Array.isArray(course)) {
                students += course.length;
                
                for ( let i = 0; i < course.length; i++) {
                    total += course[i].progress
        }  
    }
          else{ 
                for( let subCourse of Object.values(course)) {
                    students += subCourse.length
                    
                    for ( let i = 0; i < subCourse.length; i++) {
                        total += subCourse[i].progress
                    }
                }
          }
        }
    return total / students; 
}
// выведение среднего прогресса с помощью итерации

// console.log(getProgressByIter(students));

function getStudentByRecursion (data1) {
    if (Array.isArray(data1)) {
        let total = 0 ;         
            
        for ( let i = 0; i < data1.length; i++) {
                total += data1[i].progress;
    }  
    return [total , data1.length];
        }  else{ 
        let total = [0, 0];

        for ( let subData of Object.values(data1)){
            const subDataArr = getStudentBy(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }

}

const result = getStudentByRecursion(students);
// выведение среднего прогресса с помощью рекурсии
console.log(result[0]/result[1]);



function animation () {
    let pos = 0;
    const id = setInterval(frame, 10);
  
    function frame() {
      if (pos === 100) {
        clearInterval(id);
      } else {
        pos++;
        animationBtn.style.top = pos + 'px';
      }
    };}
  
    animationBtn.addEventListener('click', animation)
      
// простая анимация с перемещением при нажатии вниз