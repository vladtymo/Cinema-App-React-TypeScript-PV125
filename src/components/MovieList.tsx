import { log } from "console";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { IMovie } from "../models/movie";
import { Box, Grid, Skeleton } from "@mui/material";

const api: string = 'https://rinve-cinema.azurewebsites.net/api/movies';
const palceholderItems = 4;

export default function MovieList() {

    const [movies, setMovies] = useState<IMovie[] | undefined>();

    let placeholders = [];

    for (let i = 0; i < palceholderItems; i++) {
        placeholders.push(
            <Grid key={i} item xs={12} sm={6} md={3}>
                <Box>
                    <Skeleton variant="rectangular" height={350} />

                    <Box sx={{ pt: 0.5 }}>
                        <Skeleton height={45} width="80%" />
                        <Skeleton height={25} width="40%" />
                        <Skeleton height={40} width="60%" />
                    </Box>
                </Box>
            </Grid>
        );
    }

    useEffect(() => {
        fetch(api).then(x => x.json()).then(data => {
            console.log(data);

            setMovies(data);
        });
    }, []); // run on component mount

    return (
        <>
            <h2>Movie List</h2>
            <Grid container spacing={2}>
                {movies ? (
                    movies?.map((m, i) =>
                        <Grid key={i} item xs={12} sm={6} md={3}>
                            <MovieCard {...m} />
                        </Grid>))
                    : (placeholders)}
            </Grid>
        </>
    );
}
