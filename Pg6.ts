class Movie {
  title: string;
  director: string;
  year: number;

  constructor(title: string, director: string, year: number) {
    this.title = title;
    this.director = director;
    this.year = year;
  }
}

const fetchMovieDetails = (id: number): Promise<Movie> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const details = {
        title: "3 Idiots",
        director: "Rajkumar Hirani",
        year: 2009
      };
      const movie = new Movie(details.title, details.director, details.year);
      resolve(movie);
    }, 2000);
  });
};

const displayMovie = async (id: number): Promise<void> => {
  const movie = await fetchMovieDetails(id);
  const { title, ...otherDetails } = movie;
  const info = { ...otherDetails };

  console.log(`Title: ${title}`);
  console.log(`Director: ${info.director}`);
  console.log(`Released Year: ${info.year}`);
};

displayMovie(1);
