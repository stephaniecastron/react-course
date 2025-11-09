import axios from 'axios';
import type { Movie } from '../models/Movie';

const BASE_URL = 'http://localhost:3100';

export const getMovies = async (): Promise<Movie[]> => {
    const response = await axios.get<Movie[]>(BASE_URL + '/movies');
    return response.data;
};
