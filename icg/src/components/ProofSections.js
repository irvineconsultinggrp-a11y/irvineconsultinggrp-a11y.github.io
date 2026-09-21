import ScrollReveal from './ScrollReveal';
import { memberPlacements } from '../data/proofLogos';

function ProofSections() {
  return (
    <>
<section className="bg-white py-24 md:py-28 px-6" aria-labelledby="member-placements-heading">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2
              id="member-placements-heading"
              className="scroll-mt-28 text-3xl md:text-5xl font-bold text-icgblue text-center"
            >
              Where We Go
            </h2>
            <p className="text-center text-gray-600 mt-3 mb-12 md:mb-16 font-light text-base md:text-lg">
              Full-Time and Internship Placements
            </p>

            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-10 md:gap-x-10 md:gap-y-12 list-none p-0 m-0">
              {memberPlacements.map((company) => {
                const largeLogo = [
                  'bank-of-america.svg',
                  'exp-realty.webp',
                  'deutsche-bank.svg',
                  'banc-of-california.webp',
                  'oliver-wyman.webp'
                ].includes(company.colorSrc.split('/').pop());

                return (
                  <li
                    key={company.name}
                    className="group flex items-center justify-center"
                  >
                    <span
                      className="inline-grid place-items-center rounded-lg px-3 py-2 transition-colors duration-300"
                    >
                      <img
                        src={company.colorSrc}
                        alt={company.name}
                        title={company.name}
                        loading="eager"
                        decoding="async"
                        className={`object-contain ${largeLogo ? 'w-44 h-26' : 'w-32 h-20'}`}
                      />
                    </span>
                  </li>
                );
              })}
            </ul>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default ProofSections;
