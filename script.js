// Gets the input from the user with .querySelector()
function addMovie() {
  var whichMovie = document.querySelector('#filme');
  // Gets just the value from the user
  var favoriteMovie = whichMovie.value;
  // Call another function
  validInput(favoriteMovie);
  // Keeps showing the placeholder name
  whichMovie.value = "";
}

// Print each movie on screen using .innerHTML
// The innerHTML sets or returns the HTML content of an element
function printMovieOnScreen(movie) {
  var listOfMovies = document.querySelector('#listaFilmes');
  var movieElement = movie;
  listOfMovies.innerHTML = listOfMovies.innerHTML + movieElement;
}

// Validation of the input using .endsWith() method
// This method determines whether a string ends with the characters of a specified string.
function validInput(favoriteMovie) {
  if (favoriteMovie.endsWith('</iframe>')) {
    printMovieOnScreen(favoriteMovie); 
  } else {
    alert("Invalid image");
  }
}