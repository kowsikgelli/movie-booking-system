import  React , {Component} from 'react';
import Movie from "./Movie";
import Title from './Title';
import { MovieConsumer } from '../context';
export default class MovieList extends Component{
    state={
        products:[]
    }
    render(){
        return(
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                    <Title name="new" title="movies"/>
                        <div className="row">
                          <MovieConsumer>
                            {(value)=>{
                                return value.movies.map(movie=>{
                                    return <Movie key={movie.id} movie = {movie} />
                                })
                            }}
                          </MovieConsumer>  

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}