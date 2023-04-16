import MovieShow from './MovieShow'
function MovieList ({movies, onDelete, onEdit}) {
const moviesContainer = movies.map((movie) =>
{
return <MovieShow key={movie.id} movie={movie} onEdit = {onEdit} onDelete = {onDelete} />
})
return <div className='book-list'>
    {moviesContainer}
</div>
}

export default MovieList