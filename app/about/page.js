import Image from "next/image";
import Link from "next/link";



export default function about() {
    return (
      <main className="bg-[#F4F5E8]">

<header className="flex flex-col md:flex-row justify-between items-center md:items-start w-full px-6 md:px-12 pt-6">
        {/* LEFT SIDE MENU */}
        <nav className="flex content-center justify-between w-full md:flex-col items-center md:items-start md:w-auto md:space-y-2.5 text-[5vw] md:text-[3vw] text-black">
          <Link href="/CV" className="hover:underline">CV</Link>
          <Link href="/" className="hover:underline">HOME</Link>
          <Link href="/projects" className="hover:underline">PROJECTS</Link>
        </nav>

        {/* RIGHT SIDE NAME */}
        <h1 className="text-[#C61D15] text-[10vw] md:text-[8vh] font-semibold mt-10 md:mt-0">
          EVAN SAGMAN
        </h1>
      </header>

      {/* MAIN CONTENT SECTION */}
      <section className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-20 px-6 md:px-20 mt-16 md:mt-24 relative">
        {/* LEFT IMAGE */}
        <div className="relative z-[10] md:-rotate-2 md:-translate-y-10">
          <Image
            src="/assets/thumbnail_IMG_3364.jpg"
            alt="Left Image"
            width={600}
            height={500}
            className="object-cover shadow-lg"
          />
        </div>

        {/* TEXT BLOCK */}
        <div className="text-center md:text-left text-lg md:text-2xl font-light space-y-2 leading-snug">
          <div>QUEER</div>
          <div>TORONTO BASED</div>
          <div>MULTIMEDIA</div>
          <div className="text-[#C61D15] font-medium">ARTIST</div>
          <div className="pt-4">
            CREATING <span className="text-[#C61D15] font-medium">ART</span> THAT CENTERS AROUND <br />
            THEMES OF INTIMACY, SEXUALITY, AND MORTALITY
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative z-[20] md:rotate-3 md:-translate-y-24 md:-ml-16">
          <Image
            src="/assets/thumbnail_IMG_3365.jpg"
            alt="Right Image"
            width={400}
            height={300}
            className="object-cover shadow-lg"
          />
        </div>
      </section>

      {/* ARTIST STATEMENT */}
      <section className="max-w-4xl mx-auto text-center md:text-left px-6 md:px-0 mt-16 mb-20 text-base md:text-lg leading-relaxed font-light">
        <p>
          Evan Sagman (they/them) is a Toronto based interdisciplinary artist and curator.
          Their work focuses on themes relating to the body, love, intimacy, sexuality,
          mortality, decay and duality. Working primarily in metal, wood, and experimental
          mediums, they create bodily forms that serve as portraits of the intangible.
        </p>
        <p className="mt-4">
          Fascinated by the way intimacy manifests in everyday life, and how it shapes our
          mode of being, creating powerful moments that distort time and space, their
          practice embodies these social and emotional processes. Evan curates for and
          exhibits in local galleries, also initiating guerrilla-style exhibitions,
          continually expanding both their creative and curatorial practices.
        </p>
      </section>


      <div className="md:fixed md:bottom-1 md:left-2 text-sm text-left px-4 mt-10 md:mt-0">
        <div className="insta">@truckerskiss</div>
        <div className="email">evanlwsgn@gmail.com</div>
      </div>

    </main>
    );
  }