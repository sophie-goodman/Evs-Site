import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Evan Sagman | About"
};



export default function about() {
    return (
      <main className="bg-[#F4F5E8]">

<header className="flex flex-col md:flex-row justify-between items-center md:items-start w-full px-6 md:px-12 pt-6">
        {/* LEFT SIDE MENU */}
        <nav className="flex content-center justify-between w-full md:flex-col items-center md:items-start md:w-auto md:space-y-2.5 text-[5vw] md:text-[3vw] text-black">
          <Link href="/CV" className="hover:underline">CV</Link>
          <Link href="/" className="hover:underline">HOME</Link>
          <Link href="/portfolio" className="hover:underline">PORTFOLIO</Link>
        </nav>

        {/* RIGHT SIDE NAME */}
        <h1 className="text-[#C61D15] text-[10vw] md:text-[8vh] font-semibold mt-10 md:mt-0">
          EVAN SAGMAN
        </h1>
      </header>

      {/* Mobile: text above image. md+: text left, image right; text vertically centered to image */}
      <section className="mx-auto mb-12 mt-8 flex max-w-5xl flex-col items-center gap-3 px-4 md:mb-16 md:mt-10 md:flex-row md:items-center md:gap-5 md:px-6 lg:px-8">
        <div className="w-full text-center text-sm font-light leading-snug md:min-h-0 md:min-w-0 md:flex-1 md:text-left md:text-[0.9375rem] md:leading-snug">
          <p>
            Evan Sagman (they/them) is a Toronto based interdisciplinary artist and curator.
            Their work focuses on themes relating to the body, love, intimacy, sexuality,
            mortality, decay and duality. Working primarily in metal, wood, and experimental
            mediums, they create bodily forms that serve as portraits of the intangible.
          </p>
          <p className="mt-2 md:mt-2">
            &ldquo;Intimacy is a lens through which to view all things. The creation of the universe
            coincides with the advent of intimacy, as it itself was an intimate act. I utilize
            interdisciplinary art practices to analyze human relations, making tangible the transient
            moments that wash over us. It is in the magic of contradiction that truth emerges. The works
            themselves exist in a state of flux, attaining a fluid completion when they are interacted
            with in physical space&rdquo;
          </p>
        </div>

        <div className="relative z-10 w-full shrink-0 md:max-w-[min(100%,22rem)] lg:max-w-sm">
          <Image
            src="/assets/thumbnail_IMG_3364.jpg"
            alt="Evan Sagman"
            width={600}
            height={500}
            className="h-auto w-full object-cover shadow-lg"
            sizes="(max-width: 768px) 100vw, 22rem"
          />
        </div>
      </section>


      <div className="md:fixed md:bottom-3 md:left-2 text-sm text-left px-4 mt-10 md:mt-0 pb-8 md:pb-0">
        <Link
          href="https://www.instagram.com/truckerskiss/"
          target="_blank"
          rel="noopener noreferrer"
          className="insta mb-2 hover:underline"
        >
          @truckerskiss
        </Link>
        <a
          href="mailto:evanlwsgn@gmail.com"
          className="email block hover:underline"
        >
          evanlwsgn@gmail.com
        </a>
      </div>

    </main>
    );
  }