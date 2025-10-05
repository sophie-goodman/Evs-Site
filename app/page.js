import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="bg-[#F4F5E8] flex flex-col gap-8 row-start-2 items-center sm:items-start">
      
      <div className="bg-[#F4F5E8] cursor-custom">
      
      <div className="flex justify-around w-[50vw] mt-5">
        <div>
          <Link href="/shop" className="text-black text-[3vw] font-[HYGothic-Extra] no-underline hover:underline">
            CV
          </Link>
        </div>
        <div>
          <Link href="/about" className="text-black text-[3vw] font-[HYGothic-Extra] no-underline hover:underline">
            ABOUT
          </Link>
        </div>
        <div>
          <Link href="/projects" className="text-black text-[3vw] font-[HYGothic-Extra] no-underline hover:underline">
            PROJECTS
          </Link>
        </div>
      </div>
      </div>

      <div className="relative top-[200px] max-w-[60vw] flex flex-col items-center">
        <div className="text-[#C61D15] text-[6vw] font-[HYGothic-Extra]">EVAN SAGMAN</div>

        <div className="flex flex-col items-center font-[HYGothic-Extra] text-[2vh]">
          <div>INSTALLATION</div>
          <div>SCULPTURE</div>
          <div>PAINTING</div>
          <div>DRAWING</div>
          <div>JEWELRY</div>
        </div>
      </div>

    
      <div className="absolute top-0 right-0 w-[50vw] h-screen">
        <Image 
        src="/thumbnail_IMG_5533.jpg" 
        alt="Art Thumbnail" 
        fill
        className="fill object-cover w-[100%]" />
      </div>

    
      <div className="fixed bottom-1 text-sm font-[HYGothic-Extra] left-1">
        <div className="phone">416-881-2344</div>
        <div className="insta">@TruckersKiss</div>
        <div className="email">ESAGMAN@INFO.COM</div>
      </div>


      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      
      </footer>
    </div>
  );
}
