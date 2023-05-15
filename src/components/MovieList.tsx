import { log } from "console";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { IMovie } from "../models/movie";
import { Grid } from "@mui/material";

const api: string = 'https://www.omdbapi.com/?apikey=efcd3700&s=terminator';

export default function MovieList() {

    const [movies, setMovies] = useState<IMovie[] | undefined>();

    useEffect(() => {
        fetch(api).then(x => x.json()).then(data => {
            console.log(data.Search);

            setMovies(data.Search);
        });
    }, []); // run on component mount

    return (
        <>
            <h2>Movie List</h2>
            <Grid container spacing={2}>
                {movies?.map((m, i) =>
                    <Grid key={i} item xs={12} sm={6} md={3}>
                        <MovieCard {...m} />
                    </Grid>
                )}
            </Grid>
        </>
    );
}
