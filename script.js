const numberOfFilms = +prompt('Склько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// for (let i = 0; i < 2; i++){
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if(a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log("Great job, Dwarf");
//     }
//     else{
//         console.log("Fuck");
//         i--;
//     }
// }

// Мой метод
// if (numberOfFilms < 10){
//     alert("Вы посмотрели слишком мало фильмов");
// } else if(numberOfFilms >= 10 && numberOfFilms < 30){
//     alert("Вы классический зритель");
// } else if(numberOfFilms >= 30){
//     alert("Ogo");
// }

//Метод Вани
// if (personalMovieDB.count < 10){
//     alert("Malo");
// } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//     alert("Norm");
// } else if(personalMovieDB.count >= 30){
//     alert("Zadrot");
// }

console.log(personalMovieDB);