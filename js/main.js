


$(document).ready(()=>

{$('#searchform').on('submit',(e)=>{
    searchtext=$('#searchtext').val();
    getMovies(searchtext);
    e.preventDefault();
})}
);


function getMovies(searchtext)
{
    axios.get('http://www.omdbapi.com?s='+searchtext+'&apikey=477e9253').then(
        (response)=>{
        console.log(response);
        output='';
        movies=response.data.Search;
        $.each(movies,(index,movie) => {
        
            output+=`
            <div class="col-md-3">
                <div class="well text-center">
                    <img src="${movie.Poster}">
                    <h5>${movie.Title}</h5>
                    <a onclick="movieselected('${movie.imdbID}') class="btn btn-primary" href="#" >Movie Details</a>
                </div>
            </div>
             `;
        
    });
    $('#movies').html(output);
    
        // .catch((err)=>{console.log(err)});
});
}