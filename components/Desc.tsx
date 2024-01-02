import Image from "next/image";

export default function Desc() {
  return (
    <header className="bg-onepice bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
        Explore <br /> <span className="sky-gradient">Limitless Animation</span>{" "}
        with Infinite scrolling.
      </h1>
      <div className="lg:flex-1 relative w-full h-[42vh] justify-center">
        <Image src="/Luffy.png" alt="anime" fill className="object-contain" />
      </div>
    </header>
  );
}
