//API MOVIEDB.ORG

//this image url will be concatenated with the dynamic url part of the API

const api_key = "5cf4fed081a4f7999bbe9add7c89c7d1";
const url =
	"https://api.themoviedb.org/3/search/movie?api_key=5cf4fed081a4f7999bbe9add7c89c7d1";

const img_url= 'https://image.tmdb.org/t/p/w500'; 


//SELECTORS

const searchInput = document.querySelector("#search_input");
const searchButton = document.querySelector("#search_btn");
const moviesSection = document.querySelector("#movies_section");

//function to display the movie searched.

const createMoviesContainer = (movies) => {
    const movieWrapper = document.createElement("div");
    movieWrapper.setAttribute('class', 'movie_wrapper');

    const movieImgContainer = document.createElement('div');
    movieImgContainer.setAttribute('class', 'movie_img-container');
    movieWrapper.appendChild(movieImgContainer);
    
    /*for each movie will create an image element and set the attribute finded in the api */
   
    const createImg = (movies) =>{
        return movies.map((movie) => {
            if(movie.poster_path){
                let img = document.createElement('img');
                img.setAttribute('id', 'movie_img');
                img.setAttribute('src', img_url +  movie.poster_path);
                img.setAttribute('data-movie-id', movie.id)  ;    
                 movieImgContainer.appendChild(img) 
                return img
            }   
        })
    }
      createImg(movies);
           
    const  movieContent = document.createElement('div');
    movieContent.setAttribute('class', 'movie_content');
    return movieWrapper;
}



/*take the fetched data, use it in a function to create containers
and append it to existent html*/

const searchMoviesData = (data)=> {
    moviesSection.textContent = '';
    let movies = data.results;
            console.log(data);
			const movieCard = createMoviesContainer(movies);
            moviesSection.appendChild(movieCard);
             ;
}

/*
 when you click the search button:
 1- the input value is captured
2- added to a new url query that
3-  becomes the url for the fetching data*/

searchButton.onclick = (event) => {
	event.preventDefault();
	let searchInputValue = searchInput.value;

	let newUrl = url + "&query=" + searchInputValue;
	searchInput.value = "";
	fetch(newUrl)
		.then((res) => res.json())
		.then(searchMoviesData)
		.catch((error) => {
			console.log("error: ", error);
		});
};
