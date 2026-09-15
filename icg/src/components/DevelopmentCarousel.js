import { useState, useCallback, useEffect, useMemo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const SLIDES = [
  {
    number: "1",
    title_one: "Built For",
    title_two: "Real Impact",
    subtitle: "ICG doesn’t wait for opportunity, we create it.",
    description:
      "From day one, you'll be on the front lines of innovation, solving real-world challenges with passionate teammates. This hands-on experience ensures you're client-ready from the start.",
    imageUrl: "/Talking.webp",
    alt: "ICG members collaborating in discussion",
  },
  {
    id: 2,
    number: "2",
    title_one: "Develop Strong",
    title_two: "Consulting Skillsets",
    subtitle: "Professional development is built into everything we do.",
    description:
      "We invest in your growth through structured mentorship and continuous training. By the end, you'll have a toolkit full of practical skills to tackle complex consulting challenges.",
    imageUrl: "/2.webp",
    alt: "ICG professional development session",
  },
  {
    id: 3,
    number: "3",
    title_one: "Work With",
    title_two: "Real Companies",
    subtitle: "Our culture embraces the grind, late nights, and big wins.",
    description:
      "You'll grow by being in the thick of it, applying your knowledge in fast-paced, high-impact situations. Success here comes from resilience, curiosity, and the willingness to dive head first.",
    imageUrl: "/3.webp",
    alt: "ICG team working with a client",
  },
  {
    id: 5,
    number: "4",
    title_one: "Meet Future",
    title_two: "MBB Consultants",
    subtitle: "You’ll join a tight-knit, ambitious community that pushes you to be your best.",
    description:
      "Collaboration and support are built into our culture, making every challenge a shared experience. At ICG, your network becomes one of your most valuable assets, both professionally and personally.",
    imageUrl: "/4.webp",
    alt: "ICG community gathering",
  },
]

export default function DevelopmentCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loadedSlides, setLoadedSlides] = useState(() => new Set([0]))

  useEffect(() => {
    setLoadedSlides((prev) => {
      const next = new Set(prev)
      next.add(currentSlide)
      const adjacent = (currentSlide + 1) % SLIDES.length
      next.add(adjacent)
      return next
    })
  }, [currentSlide])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))
  }, [])

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index)
  }, [])

  const active = useMemo(() => SLIDES[currentSlide], [currentSlide])

  return (
    <section className="py-16 container mx-auto px-6 bg-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:items-stretch">
        <div className="relative w-full aspect-[8/5] overflow-hidden rounded-lg shadow-xl shrink-0 bg-gray-100">
          {SLIDES.map((slide, index) =>
            loadedSlides.has(index) ? (
              <img
                key={slide.imageUrl}
                src={slide.imageUrl}
                alt={slide.alt}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "low"}
                className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-200 ease-out ${
                  index === currentSlide
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                } ${index === 0 && currentSlide === 0 ? "brightness-[0.96] contrast-[1.03] saturate-[1.04]" : ""}`}
              />
            ) : null
          )}
        </div>

        <div className="flex flex-col items-center md:items-start md:justify-center text-center md:text-left">
          <div className="w-full">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-icgblue leading-tight transition-opacity duration-200">
              {active.title_one}
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#035e97] leading-tight transition-opacity duration-200">
              {active.title_two}
            </h2>

            <div className="w-16 h-1 bg-icgblue mt-4 mb-6 mx-auto md:mx-0"></div>

            <div className='text-icgblue space-y-4 max-w-prose'>
              <h3 className="text-lg md:text-2xl font-semibold leading-snug">
                {active.subtitle}
              </h3>
              <p className="text-base md:text-xl font-light leading-relaxed text-gray-700">
                {active.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-12 gap-6">
        <button
          type="button"
          onClick={prevSlide}
          className="p-3 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex space-x-3">
          {SLIDES.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-transform duration-150 ${currentSlide === index ? "bg-icgblue scale-125" : "bg-gray-300"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          className="p-3 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}
