import Card, { MovieProp } from "@/components/Card";
import { fecthMovie } from "./action";

export default async function Home() {
  const data = await fecthMovie(1);
  
  return (
    <main className="p-5">
      <h2 className="text-3xl text-white font-bold">Movies</h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.results.map((item: MovieProp, index : number) => {
          return <Card key={item.id} movie={item} index={index} />;
        })}
      </div>
    </main>
  );
}
