import Image from "next/image";

export default function Hero() {
  return (
    <header className="bg-topgun bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
        Explore <br />{" "}
        <span className="sky-gradient">
          Limitless
          <br /> Movies
        </span>{" "}
        with Infinite scrolling.
      </h1>
      <div className="lg:flex-1 relative w-full h-[42vh] justify-center">
        <Image
          src="/marvel.png"
          alt="anime"
          fill
          priority
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </header>
  );
}
