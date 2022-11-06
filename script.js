let NumberOfFilms;

function start () {
    NumberOfFilms  = prompt('Скoлько фильмов вы уже посмотрели?' , '');

    while (NumberOfFilms == '' || NumberOfFilms == null || isNaN(NumberOfFilms)) {
        NumberOfFilms  = prompt('Скoлько фильмов вы уже посмотрели?' , '');
    }
}

start ();

let personalMovieDB = {
    count: NumberOfFilms,
    movies:  { },
    actors: {}, 
    genres: [],
    privat: false
};


function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {

        const a = prompt('Один из последних просмотренных фильмов?' , ''),
          b = prompt('На сколько вы его оцените?' , ''); 
    
            if (a!=null && b!=null && a.length < 50 && a!= '' && b!= '') {
                
                personalMovieDB.movies[a] = b ;
                console.log ('done');}
    
                else {console.log ('error'); i--;}  
}}

rememberMyFilms ();


function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
    
        console.log('Some films');
    
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 )
    {console.log('You like watching films');
    
    } else if (personalMovieDB.count >= 30)
    {console.log('You are monsters')}
    else {console.log("Ошибка")} 
}

detectPersonalLevel();

function showMyDB(hidden) {
    if ( !hidden) {
console.log(personalMovieDB);
    }
}

 showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
   personalMovieDB.genres[i - 1] = prompt (`Ваш любимый жанр под номером ${i}?`);
}}

writeYourGenres();

console.log("pososi");

convert = function  convert                                         