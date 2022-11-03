import React from 'react';
import { useQuery , gql, useLazyQuery} from "@apollo/client";
import { useState } from 'react';

const QUERY_ALL_USERS = gql`
    query getUsers {
        users {
            id
            name
            username
            age
            nationality
            
        }
    } 
`;

const QUERY_ALL_MOVIES = gql`
    query getMovies{
        movies {
            id
            name
            yearOfPublication
            isInTheaters
        }
    }
`;

function DisplayData() {
    const [movieSearched, setMovieSearched]= useState("");
    const { data , loading } = useQuery( QUERY_ALL_USERS );
    const { data: moveisdata , loading: moviesloading } = useQuery( QUERY_ALL_MOVIES );
    const [fetchMovie, {data: movieSearchedData, error: movieError}] = useLazyQuery();

    // setMovieSearched();

    if (loading){
        return <h1>data loading...</h1>
    }
    if ( moveisdata ) {
        console.log(moveisdata);
    } 
    return (
        <div>
            { data && 
                data.users.map( ( user) => {
                    return  ( 
                        <div> 
                            <h1>{ user.username }</h1>
                        </div>
                    );
                })
            }
            { moveisdata && 
                moveisdata.movies.map((movie) => {
                    return (
                        <div>
                            <h1>{ movie.name }</h1>
                        </div>
                    );
                })
            }
              <div>
                <input type="text" placeholder='Interstellar ..' onChange={ (e) => { setMovieSearched() } }/>
                <button> fetch data </button>
                <div className='displayed'>

                </div>
            </div>
        </div>        
    );    
}
 
export default DisplayData;