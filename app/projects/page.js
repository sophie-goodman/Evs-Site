"use client";
import Link from "next/link";
import Image from "next/image";


export default function Projects() {
  return (
    <main className="bg-[#F4F5E8] min-h-screen flex flex-col">
      {/* HEADER SECTION */}
      <header className="flex flex-col md:flex-row justify-between items-center md:items-start w-full px-6 md:px-12 pt-6">
        {/* LEFT SIDE MENU */}
        <nav className="flex content-center justify-between w-full md:flex-col items-center md:items-start md:w-auto md:space-y-2.5 text-[5vw] md:text-[3vw] text-black">
          <Link href="/CV" className="hover:underline">CV</Link>
          <Link href="/" className="hover:underline">HOME</Link>
          <Link href="/about" className="hover:underline">ABOUT</Link>
        </nav>

        {/* RIGHT SIDE NAME */}
        <h1 className="text-[#C61D15] text-[10vw] md:text-[8vh] font-semibold mt-10 md:mt-0">
          EVAN SAGMAN
        </h1>
      </header>

      {/* TITLE + DVIDER*/}
      <section className="flex flex-col w-full px-6 md:px-12 mt-10">
        <div className="flex justify-end w-full">
        <h2 className="text-[6vw] md:text-[2vw] font-light text-black text-right">
          SCULPTURE AND INSTALLATION
        </h2>
        </div>
        <div className="flex justify-center w-full mt-3">
        <hr className="bg-[#C61D15] w-[90%] md:w-[97%] h-[2px] mt-3 border-none" />
      </div>
      </section>

      {/* ARTWORK GRID */}
      <section className="w-full flex justify-center mt-10 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl px-6 font-thin text-sm">
          
          {/* Artwork 1 */}
          <div className=" flex flex-col h-full tracking-wide">
            <div className="font-medium">Evan Sagman</div>
            <div>New Walls Bleed, 2025</div>
            <div>Upcycled Wood</div>
            <div className="group relative mt-auto">
            <Image
              src="/assets/img_0282.jpeg"
              alt="New Walls Bleed"
              width={400}
              height={600}
              className="w-full h-auto object-cover mt-auto transition duration-500 ease-in-out group-hover:blur-sm"
            />

            <div className="absolute inset-0 bg-opacity-90 bg-white/30 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out flex items-center justify-center text-center text-black px-4 text-sm">

              <p>the brand-new walls bleed just like the old ones 
                they mutter loudly, indecipherable  
                utterances scrawled out in my brain 
                cryptic mindset runs late into the night 
                sweetly oscillating 
                a taste of fair madness 
                off with a curtsy and a wink</p>
            </div>
          </div>
          </div>

          {/* Artwork 2 */}
          <div className="flex flex-col h-full tracking-wide">
            <div className="font-medium">Evan Sagman</div>
            <div>Conceived and Unraveled, 2025</div>
            <div>Plywood, wooden dowels, wood glue, LED spotlight</div>
            
            <div className="group relative mt-auto mt-auto transition duration-500 ease-in-out group-hover:blur-sm">
            <Image
            src="/assets/CUMAIN1.png"
              alt="Conceived and Unraveled"
              width={400}
              height={600}
              className="w-full h-auto object-cover mt-auto mt-auto transition duration-500 ease-in-out group-hover:blur-sm"
            />

            <div className="absolute inset-0 bg-opacity-90 bg-white/30 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out flex items-center justify-center text-center text-black px-4 text-sm">

            <p>Exploring portraiture of the intangible through minimalist form, questions arise. Is it 
              possible to find a balance between one’s interior world and the chaos that surrounds 
              them? </p>
              </div>
              </div>
          </div>

          {/* Artwork 3 */}
          <div className="flex flex-col h-full tracking-wide">
            <div className="font-medium">Evan Sagman</div>
            <div>the world we live in, 2025</div>
            <div>Plywood, acrylic tubing, wood glue, LED lighting</div>
            
            <div className="group relative mt-auto">
            <Image
              src="/assets/theworldwelivein.jpeg"
              alt="the world we live in"
              width={400}
              height={600}
              className="w-full h-auto object-cover mt-auto mt-auto transition duration-500 ease-in-out group-hover:blur-sm"
            />
            <div className="absolute inset-0 bg-opacity-90 bg-white/30 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out flex items-center justify-center text-center text-black px-4 text-sm">

          <p>“a pain in the back left of my neck has been there for days. i run on the elliptical and in my 
            mind's eye i see the beginning and end of the universe. i see it in my boyfriend’s eyes too. i 
            watch the candlelight dance in his irises. While i run, i think of god and beer. sweat drips 
            from my forehead down my nose onto the sleek metal of the machine which moves with 
            me. Adonai or Allah, mayhap Buddha or Vishnu. most likely some amalgamation of all the 
            above. it feels nice. eyes watch from either side of the room. i see them in careful 
            geometry, positions and poses beyond.”  </p>
          </div>
          </div>
          </div>

          {/* Artwork 4 */}
          <div className="flex flex-col h-full tracking-wide">
            <div className="font-medium">Evan Sagman</div>
            <div>Femme and Phallus (Form Study), 2024</div>
            <div>Cedar, Aromatic Cedar, Walnut, Pine, Basswood, Cherry</div>
            <div className="group relative mt-auto">
            <Image
              src="/assets/FPMAIN.jpeg"
              alt="Femme and Phallus"
              width={400}
              height={600}
              className="w-full h-auto object-cover mt-auto mt-auto transition duration-500 ease-in-out group-hover:blur-sm"
            />

            <div className="absolute inset-0 bg-opacity-90 bg-white/30 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out flex items-center justify-center text-center text-black px-4 text-sm">
              <p>Hand carved wooden feminine form and phallic forms.  </p>
            </div>
            </div>
            </div>

          {/* Artwork 5 */}
          <div className="flex flex-col h-full tracking-wide">
            <div className="font-medium">Evan Sagman</div>
            <div>Turbulence and Traction, 2024</div>
            <div>Up-cycled wood, glue, nails</div>
            <div className="group relative mt-auto">
            <Image
              src="/assets/TTMAIN.jpeg"
              alt="Turbulence and Traction"
              width={400}
              height={600}
              className="w-full h-auto object-cover mt-auto mt-auto transition duration-500 ease-in-out group-hover:blur-sm"
            />
            <div className="absolute inset-0 bg-opacity-90 bg-white/30 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out flex items-center justify-center text-center text-black px-4 text-sm">

            <p>Morality becomes blurred in times of survival. We do what we can to protect what’s 
              important to us. </p>
            </div>
          </div>
          </div>


          {/* Artwork 6 */}
          <div className="flex flex-col h-full tracking-wide">
            <div className="font-medium">Evan Sagman</div>
            <div>Strain, Equilibrium, 2024</div>
            <div>Upcycled Plywood, Nails, Spray Paint</div>
            
            <div className="group relative mt-auto">
            <Image
              src="/assets/img_6939.jpeg"
              alt="Strain, Equilibrium"
              width={400}
              height={600}
              className="w-full h-auto object-cover mt-auto mt-auto transition duration-500 ease-in-out group-hover:blur-sm"
            />
            <div className="absolute inset-0 bg-opacity-20 bg-white/40 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out flex items-center justify-center text-center text-black px-4 text-sm">

            <p>Two forms rest against each other in careful balance. Hostile and passionate, one requires 
            the other to stand but they are not truly able to connect. Unmet desire wears on the mind, 
            and the consequences of desires met can be fierce and destructive. Tension between the 
              two forms is tangible as connection is both created and repelled by their harshness. </p>
          </div>
          </div>
          </div>

        </div>
      </section>
    </main>
  );
}