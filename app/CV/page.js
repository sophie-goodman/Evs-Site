import Link from "next/link";

export default function CV() {

  return (
    <main className="">
    <header className="flex flex-col md:flex-row justify-between items-center md:items-start w-full px-6 md:px-12 pt-6">
        {/* LEFT SIDE MENU */}
        <nav className="flex content-center justify-between w-full md:flex-col items-center md:items-start md:w-auto md:space-y-2.5 text-[5vw] md:text-[3vw] text-black">
          <Link href="/projects" className="hover:underline">PROJECTS</Link>
          <Link href="/" className="hover:underline">HOME</Link>
          <Link href="/about" className="hover:underline">ABOUT</Link>
        </nav>

        {/* RIGHT SIDE NAME */}
        <h1 className="text-[#C61D15] text-[10vw] md:text-[8vh] font-semibold mt-10 md:mt-0">
          EVAN SAGMAN
        </h1>
      </header>

    <div className="pt-20 flex flex-col  w-full md:items-center align-text-left justify-left min-h-screen">

    <div className="w-full md:w-1/2 text-start">
    <div className="pb-3 p-2 underline">
      EXHIBITIONS
    </div>

    <div className="p-2">
    Sculpture Expo, 2025 
    <p>Trafalgar Memorial Park, 120 Oak Park Blvd, Oakville, ON L6H 0E3</p>
    </div>

    <div className="p-2">
      Eric’s Backyard Film Festival, 2025 
    <p>Trafalgar Memorial Park, 120 Oak Park Blvd, Oakville, ON L6H 0E3</p>
    </div>

    <div className="p-2">
    Art Gallery Thursday, 2025
    <p>Rchive, 780 King St W, Toronto, ON M5V 1N6</p>
    </div>

    <div className="p-2">
      Tempered Bonds: Grain and Grit, 2025
    <p>Great Hall, 100 McCaul St, Toronto, ON M5T 1G1</p>
    </div>

    <div className="p-2">
    Fleshly Desires, 2024
    <p>Ada Slaight Gallery, 100 McCaul St, Toronto, ON M5T 1G1</p>
    </div>

    <div className="p-2">
    Sculpture and Installation Fall Cabaret, 2024
    <p>Exhibition Spaces, 100 McCaul St, Toronto, ON M5T 1G1</p>
    </div>

    <div className="p-2">
    Drawing Exhibition, 2023
    <p>Great Hall, 100 McCaul St, Toronto, ON M5T 1G1</p>
    </div>

    <div className="p-2">
    It’s a Plastic World, Flash Forward Incubator Program and Exhibition, 2020
    <p>Digital Exhibition</p>
    </div>

    <div className="p-2">
    Divine Delinquents, 2019
    <p>19 Sackville St, Toronto, ON M5A 3E1</p>
    </div>

    <div className="pb-3 pt-8 p-2 underline">
      PUBLICATIONS
    </div>

    <div className="p-2">
    OCAD Faculty Of Arts and Sciences January 2025 Newsletter
    </div>

    <div className="pb-3 pt-8 p-2 underline">
      CURATIONS
    </div>

    <div className="p-2 pb-3">
    Calefaction, 2025
    <p>Condemned Gallery (Guerilla-Style Gallery), 255 Bain Ave, Toronto, ON M4K 1G2</p>
    </div>

    </div>

    </div>





      </main>

  );
}
