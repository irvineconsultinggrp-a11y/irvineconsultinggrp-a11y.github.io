import ScrollReveal from './ScrollReveal';
import { featuredClients, memberPlacements } from '../data/proofLogos';

function ProofSections() {
  return (
    <>
      <section className="bg-white py-24 md:py-28 px-6" aria-labelledby="featured-clients-heading">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2
              id="featured-clients-heading"
              className="scroll-mt-28 text-3xl md:text-5xl font-bold text-icgblue text-center"
            >
              Who we&apos;ve worked with
            </h2>
            <p className="text-center text-gray-600 mt-3 mb-12 md:mb-16 font-light text-base md:text-lg">
              Strategy engagements with teams you already know.
            </p>

            <ul className="flex flex-wrap items-center justify-center list-none p-0 m-0">
              {featuredClients.map((client) => (
                <li
                  key={client.name}
                  className="flex w-1/2 sm:w-1/3 items-center justify-center px-5 py-5 md:px-8 md:py-6"
                >
                  <img
                    src={client.src}
                    alt={client.name}
                    loading="lazy"
                    decoding="async"
                    className={`w-auto max-w-[9.5rem] md:max-w-[12rem] object-contain ${
                      client.logoClassName ?? 'h-12 md:h-14'
                    }`}
                  />
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-icgblue py-24 md:py-28 px-6" aria-labelledby="member-placements-heading">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2
              id="member-placements-heading"
              className="scroll-mt-28 text-3xl md:text-5xl font-bold text-white text-center"
            >
              Where our members go
            </h2>
            <p className="text-center text-white/70 mt-3 mb-12 md:mb-16 font-light text-base md:text-lg">
              Full-time and internship placements across consulting, tech, and industry.
            </p>

            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-10 md:gap-x-10 md:gap-y-12 list-none p-0 m-0">
              {memberPlacements.map((company) => (
                <li
                  key={company.name}
                  className="group flex h-16 md:h-20 items-center justify-center px-1"
                >
                  <span
                    className={`inline-grid place-items-center rounded-lg px-3 py-2 transition-colors duration-300 ${
                      company.hoverPlate ? 'placement-logo-plate' : ''
                    }`}
                  >
                    <img
                      src={company.colorSrc}
                      alt={company.name}
                      title={company.name}
                      loading="eager"
                      decoding="async"
                      className="placement-logo h-10 md:h-12 w-auto object-contain"
                    />
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default ProofSections;
