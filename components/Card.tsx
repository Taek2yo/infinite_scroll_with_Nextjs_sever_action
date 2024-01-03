import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

export interface MovieProp {
  adult: boolean;
  poster_path: string;
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
}

interface OwnProp {
  movie: MovieProp;
  index: number;
}

const variants = {
  hidden : { opacity: 0},
  visible : { opacity : 1},
}

export default function Card({ movie, index }: OwnProp) {
  let movieRate = Math.floor((movie.vote_average / 10) * 100);
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  
  return (
    <MotionDiv 
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay : index * 0.25,
        ease : 'easeInOut',
        duration : 0.5,
      }}
      viewport={{ amount : 0}}
      className="max-w-sm rounded relative w-full pt-4">
      <div className="relative w-full h-[37vh]">
        <Image
          src={baseUrl + movie.poster_path}
          alt={movie.title}
          fill
          className="rounded-xl"
          sizes="(max-width: 600px) 100vw, 600px"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {movie.title}
          </h2>
        </div>
        <div className="flex gap-3 items-center">
          <p className="text-base font-bold">개봉일 {movie.release_date}</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <p className="text-base font-bold text-[#FFAD49]">선호도 {movieRate}%</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
