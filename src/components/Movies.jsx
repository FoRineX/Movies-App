import { Movie } from "./Movie"

function Movies (props) {
    const {movies = []} = props;

    return <div className="movies">
        {movies.length ? movies.map(movie => (
            <Movie key={movie.imdbID} {...movie}/>
        )) : <h4 className="nothingFound">Nothing found<img alt="#" src="https://img.icons8.com/ios/50/null/sad.png"/></h4> 
    }
    </div>
}

export { Movies }