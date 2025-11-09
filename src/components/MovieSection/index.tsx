import { FaSearch } from 'react-icons/fa';
import styles from './MovieSection.module.css';
import Fieldset from '../Fieldset';
import InputText from '../InputText';
import Button from '../Button';
import MovieList from '../MovieList';
import useFetchMovies from '../../hooks/useFetchMovies';
import useFilterMovies from '../../hooks/userFilterMovies';

const MovieSection = () => {
    const { movies, isLoading, error } = useFetchMovies();
    const { filteredMovies, handleSearch, searchTerm, setSearchTerm } =
        useFilterMovies(movies);

    return (
        <main>
            <section className={styles.container}>
                <Fieldset variant="secondary">
                    <InputText
                        placeholder="Buscar filmes..."
                        value={searchTerm}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setSearchTerm(event.target.value)}
                    />
                    <Button variant="icon" onClick={handleSearch}>
                        <FaSearch />
                    </Button>
                </Fieldset>
                <h1 className={styles.titulo}>Em cartaz</h1>
                {isLoading && <p>Carregando filmes...</p>}
                {error && <p className={styles.error}>{error}</p>}
                <MovieList movies={filteredMovies} />
            </section>
        </main>
    );
};

export default MovieSection;
