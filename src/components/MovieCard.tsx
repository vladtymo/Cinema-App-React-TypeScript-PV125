import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Description } from '@mui/icons-material';
import { IMovie } from '../models/movie';

export default function MovieCard({ Title, Year, Poster }: IMovie) {
    return (
        <Card sx={{ height: '100%' }}>
            <CardMedia
                sx={{ height: 340 }}
                image={Poster}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Year: {Year}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}