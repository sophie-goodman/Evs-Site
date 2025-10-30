import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#F4F5E8] min-h-screen flex flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-between items-center md:items-start w-full md:w-1/2 p-6 md:p-12">
        {/* MENU BAR */}
        <nav className="flex justify-around md:space-x-12 w-full text-[6vw] md:text-[3vw] text-black">
          <Link href="/CV" className="hover:underline">CV</Link>
          <Link href="/about" className="hover:underline">ABOUT</Link>
          <Link href="/projects" className="hover:underline">PROJECTS</Link>
        </nav>

        {/* NAME & CATEGORIES */}
        <div className="flex flex-col items-center text-center mt-16 md:mt-32">
          <div classname='flex flex-col items-center text-center mt-16 md:mt-32'>
          <h1 className="text-[#C61D15] text-[10vw] md:text-[5vw] font-semibold mb-4">
            EVAN SAGMAN
          </h1>
          <div className="text-[4vw] md:text-[1.2vw] leading-relaxed tracking-wide">
            <div>INSTALLATION</div>
            <div>PHOTOGRAPHY</div>
            <div>SCULPTURE</div>
            <div>PAINTING</div>
            <div>DRAWING</div>
          </div>
        </div>
        </div>

        {/* CONTACT INFO (desktop bottom) */}
        <div className="hidden md:block md:mt-25 md:ml-[-1rem] text-sm text-gray-700">
          <div>@truckerskiss</div>
          <div>evanlwsgn@gmail.com</div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="relative w-full md:w-1/2 h-[40vh] md:h-screen">
        <Image
          src="/thumbnail_IMG_5533.jpg"
          alt="Art Thumbnail"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* CONTACT INFO (mobile bottom) */}
      <div className="block md:hidden text-center mt-6 mb-4 text-sm text-gray-700">
        <div>@truckerskiss</div>
        <div>evanlwsgn@gmail.com</div>
      </div>
    </main>
  );
}