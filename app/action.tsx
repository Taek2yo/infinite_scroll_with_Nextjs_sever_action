"use server";
import Card ,{ MovieProp } from "@/components/Card";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
  },
};

export const fecthMovie = async (page: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=${page}&sort_by=popularity.desc`,
    options
  );

  const data = await response.json();
 
  return data.results.map((item: MovieProp, index : number) => {
    return <Card key={`${item.id}-${index}`} movie={item} index={index} />;
  })
};
