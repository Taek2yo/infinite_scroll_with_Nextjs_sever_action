import Card, { MovieProp } from "@/components/Card";
import { data } from "./_data";

export default async function Home() {
  return (
    <main className="p-5">
      <h2 className="text-3xl text-white font-bold">Movies</h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: MovieProp, index) => (
          <Card key={item.id} movie={item} index={index} />
        ))}
      </div>
    </main>
  );
}
