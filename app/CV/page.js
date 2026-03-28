import Link from "next/link";

export const metadata = {
  title: "Evan Sagman | CV"
};

/** Title and location in one line of text, comma-separated */
function CvEntry({ title, detail }) {
  return (
    <div className="p-2 text-left">
      {detail != null ? `${title}, ${detail}` : title}
    </div>
  );
}

export default function CV() {
  return (
    <main className="bg-[#F4F5E8] min-h-screen">
      <header className="flex flex-col md:flex-row justify-between items-center md:items-start w-full px-6 md:px-12 pt-6">
        <nav className="flex content-center justify-between w-full md:flex-col items-center md:items-start md:w-auto md:space-y-2.5 text-[5vw] md:text-[3vw] text-black">
          <Link href="/portfolio" className="hover:underline">PORTFOLIO</Link>
          <Link href="/" className="hover:underline">HOME</Link>
          <Link href="/about" className="hover:underline">ABOUT</Link>
        </nav>

        <h1 className="text-[#C61D15] text-[10vw] md:text-[8vh] font-semibold mt-10 md:mt-0">
          EVAN SAGMAN
        </h1>
      </header>

      <div className="pt-12 md:pt-20 flex flex-col w-full md:items-center px-4 md:px-8 lg:px-12 pb-16">
        <div className="w-full max-w-6xl text-left text-sm md:text-base font-light">

          <div className="pb-3 p-2 underline font-normal">Education</div>

          <div className="p-2">
            2023–2027 Sculpture and Installation Arts, Bachelor of Fine Art, OCADU: Faculty of Fine Art
          </div>
          <div className="p-2">
            2021–2023 New Media Arts, Bachelor of Fine Art, Toronto Metropolitan University: Creative School (transferred to OCADU)
          </div>

          <div className="pb-3 pt-8 p-2 underline font-normal">Exhibitions</div>

          <CvEntry title="2026 Upcoming Exhibition" detail="Beaver Hall Gallery, 29 McCaul St, Toronto" />
          <CvEntry
            title="2026 Intangible Experiences | An Abstract Art Group Show in Honour of Gwen Tooth"
            detail="Propeller Gallery, 30 Abell St, Toronto"
          />
          <CvEntry
            title="2026 a call for the incomplete, curated by Ren Critton-Papp"
            detail="The Arquives, 34 Isabella St, Toronto"
          />
          <CvEntry title="2026 Eureka! A Mixed Media Group Show" detail="Propeller Gallery, 30 Abell St, Toronto" />
          <CvEntry title="2025 241: A Diptych Show" detail="Gallery 1065, 1065 Bloor St W, Toronto" />
          <CvEntry title="2025 INTM Fall Cabaret" detail="OCADU Exhibition Spaces, 100 McCaul St, Toronto" />
          <CvEntry
            title="2025 Queer Creative Processes and Ecologies, curated by Ren Critton-Papp"
            detail="Graduate Gallery, 205 Richmond St W, Toronto"
          />
          <CvEntry title="2025 Sculpture Expo 2025" detail="Gallery 1313, 1313 Queen St W, Toronto" />
          <CvEntry title="2025 Eric’s Backyard Film Festival" detail="Trafalgar Memorial Park, 120 Oak Park Blvd, Oakville" />
          <CvEntry title="2025 Art Gallery Thursday" detail="Rchive, 780 King St W, Toronto" />
          <CvEntry title="2025 Tempered Bonds: Grain and Grit" detail="Great Hall, 100 McCaul St, Toronto" />
          <CvEntry title="2024 Sculpture and Installation Fall Cabaret" detail="OCADU Exhibition Spaces, 100 McCaul St, Toronto" />
          <CvEntry title="2024 Fleshly Desires" detail="Ada Slaight Gallery, 100 McCaul St, Toronto" />
          <CvEntry title="2023 Drawing Exhibition" detail="Great Hall, 100 McCaul St, Toronto" />
          <CvEntry
            title="2020 It’s a Plastic World, Flash Forward Incubator Program and Exhibition"
            detail="Digital Exhibition"
          />
          <CvEntry title="2019 Divine Delinquents" detail="Inglenook Gallery, 19 Sackville St, Toronto" />

          <div className="pb-3 pt-8 p-2 underline font-normal">Curatorial Projects</div>

          <CvEntry title="2026 wood you marry me (upcoming)" detail="Ada Slaight Gallery, 100 McCaul St, Toronto" />
          <CvEntry title="2026 Vicissitudes (upcoming)" detail="Beaver Hall Gallery, 29 McCaul St, Toronto" />
          <CvEntry
            title="2025 Calefaction"
            detail="Condemned Gallery (Guerilla-Style Gallery), 255 Bain Ave, Toronto"
          />

          <div className="pb-3 pt-8 p-2 underline font-normal">Publications</div>

          <div className="p-2">
            2025 OCAD Faculty Of Arts and Sciences January 2025 Newsletter
          </div>

          <div className="pb-3 pt-8 p-2 underline font-normal">Professional Experience</div>

          <CvEntry title="2026 Jan – April, Gallery Assistant Internship Placement" detail="Propeller Gallery, Toronto" />
          <CvEntry
            title="2025 Oct – 2026 March, From Our Point of View: Encounters with Artists — Researcher and Presenter under Max Dean"
            detail="OCADU, Toronto"
          />

          <div className="pb-3 pt-8 p-2 underline font-normal">Other Experience</div>

          <CvEntry title="2025–2026 Co-President, Sculpture and Installation Club" detail="OCADU, Toronto" />
          <CvEntry title="2026 Art Handling Course" detail="Hunt Gallery, Toronto" />

        </div>
      </div>
    </main>
  );
}
