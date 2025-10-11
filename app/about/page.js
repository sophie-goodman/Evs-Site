import Image from "next/image";
import Link from "next/link";



export default function about() {
    return (
      <main className="bg-[#F4F5E8]">

      {/* Name Section */}
      <div className="absolute right-0 top-[3px] text-[7vh]">
        EVAN SAGMAN
      </div>

      {/* Menu Section */}
      <div className="absolute left-[3vh] flex flex-col justify-around items-start h-[25vh]">
        <div>
          <Link href="/shop"
            className="text-black text-[3vw] no-underline hover:underline">
            CV
          </Link>
        </div>
        <div>
          <Link href="/"
            className="text-black text-[3vw] no-underline hover:underline">
            HOME
          </Link>
        </div>
        <div>
          <Link href="/projects"
            className="text-black text-[3vw] no-underline hover:underline">
            PROJECTS
          </Link>
        </div>
      </div>

      {/* Center Content */}
      <div className="relative left-[10%] w-[70vh]">
        {/* Left Image */}
        <div className="absolute z-[1] top-[35vh] left-[20vh] w-[70vh]">
          <Image
            src="/assets/thumbnail_IMG_3364.jpg"
            alt="Left Image"
            width={700}
            height={500}
          />
        </div>

        {/* Left Text */}
        <div className="absolute left-[47vh] top-[20vh]">
          <div>QUEER</div>
          <div>TORONTO BASED</div>
          <div>MULTIMEDIA</div>
          <div className="text-[#C61D15]">ARTIST</div>
        </div>

        {/* Right Text */}
        <div className="absolute top-[56vh] left-[94vh]">
          CREATING
          <div className="text-[#C61D15]">ART</div>
          THAT CENTERS AROUND <div>THEMES OF GENDER,</div> SEXUALITY, AND UNITY
        </div>

        {/* Right Image */}
        <div className="absolute z-[2] left-[80vh] top-[18vh] w-[40vh]">
          <Image
            src="/assets/thumbnail_IMG_3365.jpg"
            alt="Right Image"
            width={700}
            height={500}
          />
        </div>
      </div>
    </main>
    );
  }