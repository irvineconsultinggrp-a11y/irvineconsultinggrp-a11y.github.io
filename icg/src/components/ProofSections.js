import { Reveal, Stagger, StaggerItem } from './Motion';
import { memberPlacements } from '../data/proofLogos';

const LARGE_LOGOS = [
  'bank-of-america.svg',
  'exp-realty.webp',
  'deutsche-bank.svg',
  'banc-of-california.webp',
  'oliver-wyman.webp',
];

function ProofSections() {
  return (
    <>
      <section className="bg-white py-24 md:py-28 px-6" aria-labelledby="member-placements-heading">
        <div className="container mx-auto max-w-6xl">
          <Reveal
            as="h2"
            preset="mask"
            id="member-placements-heading"
            className="scroll-mt-28 text-3xl md:text-5xl font-bold text-icgblue text-center"
          >
            Where We Go
          </Reveal>
          <Reveal
            as="p"
            y={12}
            delay={0.12}
            className="text-center text-gray-600 mt-3 mb-12 md:mb-16 font-light text-base md:text-lg"
          >
            Full-Time and Internship Placements
          </Reveal>

          {/* Tight step — 35 marks, so the cascade has to read as one wave
              rather than a queue. */}
          <Stagger
            as="ul"
            step={0.03}
            amount={0.05}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-10 md:gap-x-10 md:gap-y-12 list-none p-0 m-0"
          >
            {memberPlacements.map((company) => {
              const largeLogo = LARGE_LOGOS.includes(company.colorSrc.split('/').pop());

              return (
                <StaggerItem
                  as="li"
                  key={company.name}
                  y={14}
                  duration={0.5}
                  className="group flex items-center justify-center"
                >
                  <span className="inline-grid place-items-center rounded-lg px-3 py-2">
                    <img
                      src={company.colorSrc}
                      alt={company.name}
                      title={company.name}
                      loading="eager"
                      decoding="async"
                      className={`placement-logo object-contain ${largeLogo ? 'w-44 h-26' : 'w-32 h-20'}`}
                    />
                  </span>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>
    </>
  );
}

export default ProofSections;
