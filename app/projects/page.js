
import Link from "next/link";
import axios from 'axios';


export default function projects() {
    return (
      
      <main className="bg-[#F4F5E8]">
      
      <div className="absolute right-0 top-[3px] font-[HYGothic-Extra] text-[7vh]">
        EVAN SAGMAN
      </div>


      <div className="absolute left-[3vh] flex flex-col justify-around items-start h-[25vh]">
        <div>
          <Link href="/shop"
            className="text-black text-[3vw] font-[HYGothic-Extra] no-underline hover:underline">
            SHOP
          </Link>
        </div>
        <div>
          <Link href="/"
            className="text-black text-[3vw] font-[HYGothic-Extra] no-underline hover:underline">
            HOME
          </Link>
        </div>
        <div>
          <Link href="/projects"
            className="text-black text-[3vw] font-[HYGothic-Extra] no-underline hover:underline">
            PROJECTS
          </Link>
        </div>
      </div>

      <div className="absolute right-4 top-[30%] font-[HYGothic-Extra] text-[5vh]">
        SCULPTURE AND INSTALLATION
      </div>

      <div className="flex justify-center items-center h-screen">
      <hr className="absolute bg-[#C61D15] w-[97vw] h-[1.5] my-4 top-[36%] border-none"></hr>
      </div>




      </main>
    );
  }