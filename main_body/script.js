const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(API_URL);

// my data for searching movies
const myMovies = [
  {
    title: "Naruto",
    img: "https://image.tmdb.org/t/p/w1280/mpFZiRihCsPDdZ1Ef69WIengKh2.jpg",

    overview:
      "Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.",
    
    vote_average: 8.3,
  },
  {
    title: "One Piece",
    img: "./../src/one_piece_p1.jpg",

    overview:
      "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gol D Roger. The famous mystery treasure named 'One Piece'.",

    vote_average: 8.7,
  },
  {
    title: "Bleach",
    img: "./naruto_p2.jpg",
    overview:
      "High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers from Rukia Kuchiki and sets out to save the world from 'Hollows'.",

    vote_average: 8.1,
  },

  {
    title: "Attack on Titan",
    img: "./attack_on_titan_p1.jpg",

    overview:
      "After his hometown is destroyed and his mother is killed, young Eren Yeager vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
  },
  {
    title: "One Piece",
    img: "./../src/one_piece_p1.jpg",

    overview:
      "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gol D Roger. The famous mystery treasure named 'One Piece'.",

    vote_average: 8.7,
  },
  {
    title: "Bleach",
    img: "./naruto_p2.jpg",
    overview:
      "High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers from Rukia Kuchiki and sets out to save the world from 'Hollows'.",

    vote_average: 8.1,
  },

  {
    title: "Attack on Titan",
    img: "./attack_on_titan_p1.jpg",

    overview:
      "After his hometown is destroyed and his mother is killed, young Eren Yeager vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
  },
  {
    title: "One Piece",
    img: "./../src/one_piece_p1.jpg",

    overview:
      "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gol D Roger. The famous mystery treasure named 'One Piece'.",

    vote_average: 8.7,
  },
  {
    title: "Bleach",
    img: "./naruto_p2.jpg",
    overview:
      "High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers from Rukia Kuchiki and sets out to save the world from 'Hollows'.",

    vote_average: 8.1,
  },

  {
    title: "Attack on Titan",
    img: "./attack_on_titan_p1.jpg",

    overview:
      "After his hometown is destroyed and his mother is killed, young Eren Yeager vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
  },


];

// function for showing my movies
function showMyMoviess(aa) {

  main.innerHTML = "";
  const mostPopularMovies = document.createElement("div");
  const recommendedMovies = document.createElement("div");
  recommendedMovies.innerHTML = "<h2>Recommended for you</h2>";
  const horizontalList = document.createElement("div");

  mostPopularMovies.classList.add("most-popular");
  recommendedMovies.classList.add("recommended");
  horizontalList.classList.add("horizontal-list");

  mostPopularMovies.appendChild(horizontalList);
  
  main.appendChild(mostPopularMovies);
  main.appendChild(recommendedMovies);
  
  aa.forEach((movie, index) => {
    
    console.log(movie.img);


    const { title, img, vote_average, overview } = movie;
    const movieElement = document.createElement("div");

    if (index < 5) {
      movieElement.classList.add("movie-l");
      movieElement.innerHTML = ` 
            <img src="${img}" alt="${title}">
            <div class="movie-info">
                 <h3>${title}</h3>
             </div>
             <div class="overview ${index >= 5 ? "hidden" : "visible"}">
                 <p>${overview}</p>
                 <div class="buttons">
                     <button class="watch-now">Watch now</button>
                     <button class="watch-later">+</button>
                 </div>
             </div>
        `;
    } else {
      movieElement.classList.add("movie-s");
      movieElement.innerHTML = ` 
            <img src="${img}" alt="${title}">
            <div class="movie-info">
                 <h3>${title}</h3>
                 <span class="vote">★ ${vote_average}</span>
             </div>
             <div class="overview ${index >= 5 ? "hidden" : "visible"}">
             <h3>${title}</h3> 
                 <p>${overview}</p>
                 <div class="buttons">
                     <button class="watch-now">Watch now</button>
                     <button class="watch-later">+</button>
                 </div>
             </div>
        `;
    }

    if (index < 5) {
      horizontalList.appendChild(movieElement);
    } else {
      recommendedMovies.appendChild(movieElement);
    }
  });

}




async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  if (search.value && search.value !== "") {
    searchMovies(data.results);
  } else {
    showRecommended(data.results);
    // showMyMoviess(myMovies);
    // searchMovies(data.results);
  }

  // console.log(data.results);
}
// console.log(movies);
function showRecommended(movies) {
  main.innerHTML = "";
  const mostPopularMovies = document.createElement("div");
  const recommendedMovies = document.createElement("div");
  recommendedMovies.innerHTML = "<h2>Recommended for you</h2>";
  const horizontalList = document.createElement("div");

  mostPopularMovies.classList.add("most-popular");
  recommendedMovies.classList.add("recommended");
  horizontalList.classList.add("horizontal-list");

  mostPopularMovies.appendChild(horizontalList);
  
  main.appendChild(mostPopularMovies);
  main.appendChild(recommendedMovies);
  
  movies.forEach((movie, index) => {
    
    // console.log(movie);


    const { title, backdrop_path, vote_average, overview } = movie;
    const movieElement = document.createElement("div");

    if (index < 5) {
      movieElement.classList.add("movie-l");
      movieElement.innerHTML = ` 
            <img src="./naruto_p2.jpg" alt="${title}">
            <div class="movie-info">
                 <h3>${title}</h3>
             </div>
             <div class="overview ${index >= 5 ? "hidden" : "visible"}">
                 <p>${overview}</p>
                 <div class="buttons">
                     <button class="watch-now">Watch now</button>
                     <button class="watch-later">+</button>
                 </div>
             </div>
        `;
    } else {
      movieElement.classList.add("movie-s");
      movieElement.innerHTML = ` 
            <img src="./../src/one_piece_p1.jpg" alt="${title}">
            <div class="movie-info">
                 <h3>${title}</h3>
                 <span class="vote">★ ${vote_average}</span>
             </div>
             <div class="overview ${index >= 5 ? "hidden" : "visible"}">
             <h3>${title}</h3> 
                 <p>${overview}</p>
                 <div class="buttons">
                     <button class="watch-now">Watch now</button>
                     <button class="watch-later">+</button>
                 </div>
             </div>
        `;
    }

    if (index < 5) {
      horizontalList.appendChild(movieElement);
    } else {
      recommendedMovies.appendChild(movieElement);
    }
  });
}

function searchMovies(movies) {
  main.innerHTML = "";
  const searchedMovies = document.createElement("div");
  searchedMovies.classList.add("searched");
  main.appendChild(searchedMovies);

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieElement = document.createElement("div");
    movieElement.classList.add("movie-s");
    console.log(IMG_PATH + poster_path);
    movieElement.innerHTML = ` 
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            
            <div class="movie-info">
                 <h3>${title}</h3>
                 <span class="vote">★ ${vote_average}</span>
             </div>
             <div class="overview hidden">
             <h3>${title}</h3> 
                 <p>${overview}</p>
                 <div class="buttons">
                     <button class="watch-now">Watch now</button>
                     <button class="watch-later">+</button>
                 </div>
             </div>
        `;
      
    searchedMovies.appendChild(movieElement);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
  } else {
    window.location.reload();
  }
});
