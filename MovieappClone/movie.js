const APIURL =    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
//Most popular movies

const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



const mainMoviebox=document.getElementById('main-box');



const getMovies=async(api)=>
{
const response=await fetch(api);
const data=await response.json();
showMovie(data.results);
}

getMovies(APIURL);


const showMovie=(data)=>{
    mainMoviebox.innerHTML='';  //empty the movie box
  data.forEach((item)=>{
    const box=document.createElement('div');
    box.classList.add('movie');
    box.innerHTML=`
    <img src="${IMGPATH+item.poster_path}">
            <div class="movie-title">
                <h3>${item.original_title}</h3>
                <span class="${getColor(item.vote_average)}">${item.vote_average}</span>
            </div> 
            <div class="overview">
                <h4>Overview</h4>
                <p>
                 ${item.overview} </p>
            </div>
    
    `;
    mainMoviebox.appendChild(box);
  })
}


document.getElementById('searchh').addEventListener('keyup',function(event){
 if(event.target.value!="")   
 {
    getMovies(SEARCHAPI + event.target.value)  //search movie
 }
 else
 {
   getMovies(APIURL);
 }
}

)

function  getColor(vote)
{
    if(vote>=8)
    {
        return 'green';
    }
    else if(vote>=5)
    {
        return 'orenge';
    }
    else 
    {
        return 'red';
    }
}
