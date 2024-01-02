import Image from "next/image";

export interface MovieProp {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_title: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

interface OwnProp {
  movie: MovieProp;
  index: number;
}



export default function Card({ movie }: OwnProp) {
  let movieRate = Math.floor(movie.vote_average / 10 * 100)
  return <div>{movie.title}</div>;
}
