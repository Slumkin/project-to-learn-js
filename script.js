'use strict';


const numberOfFilms = +prompt('How many films did you watch?', "");
const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors:{},
genres: [],
private:false
 };
 const a = prompt('What was the last movie you were watching?', ""),
       b = prompt('How do you rate it', ""),
       c = prompt('What was the last movie you were watching?', ""),
       d = prompt('How do you rate it?', "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

