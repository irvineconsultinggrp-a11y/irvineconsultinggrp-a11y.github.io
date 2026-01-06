import {
  Search,
  BarChart2,
  Target,
  Heart,
  ChevronLeft,
  ChevronRight,
  Mail,
  ChartNoAxesCombined,
  Merge,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import TimelineComponent from "../components/TimelineComponent";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [state, handleSubmit] = useForm("xgvalkqb");

  const testimonials = [
    {
      id: 1,
      quote:
        "We really enjoyed working with the UCI team. We were impressed with the team's professionalism and willingness to jump directly into understanding a highly technical product. The team was able to help us independently verify key market indicators, market size, and technical trends. Overall, we couldn't have been more pleased with our experience working with this group of students and look forward to seeing them grow in to future leaders in their respective fields.",
      author: "CEO of Artificial by Design"
    },
    {
      id:2,
      quote:
      "In H1 2025 Artificial by Design partnered with UCI’s ICG program on a deep-dive into the future of AI infrastructure where advanced models, evolving chip architectures and real-time compute demands converge… The ICG team explored these domains with technical rigor… developing insights around model portability, edge to cloud tradeoffs and AI-native data centers. We are grateful for the partnership with UCI and proud to support the next generation of thinkers… As we build toward a more interoperable, efficient AI future, collaborations like this are key. Wishing this amazing team the very best in their futures and career advancement.",
      author:"Former CTO of Dell Technologies"
    },
    {
      id:3,
      quote:
      "It was a real pleasure working with the Irvine Consulting student team. They tackled a complex and demanding assignment and helped shape AdGreetz’s expansion strategy with remarkable professionalism, clarity, and dedication. The team delivered a high-quality and well-thought-out suite of materials. Their ability to distill complex financials and strategic options into clear insights was impressive, and their final presentation was polished, thoughtful, and actionable. I’d gladly recommend working with them to any founder or executive seeking smart, reliable, and insightful support.",
      author:"CEO of Adgreetz"
    },
    {
      id:4,
      quote:
      "Everyone on the team was very sharp and engaged. They executed as a team very well, were always prepared and when feedback was provided, they acted upon it timely. I would highly recommend working with them and wouldn't hesistate to do so again!",
      author:"CEO of ToughCutie"
    }
  ];

  const timelineData = [
    {
      leftText: "Pre-Project",
      heading: "Initial Consultation",
      content:
        "We begin with an initial consultation to learn more about your organization, including your mission, operations, and goals. We’ll discuss any challenges you’re facing and how we can assist. Upon mutual agreement, we’ll proceed with the project.",
    },
    {
      leftText: "Week 1",
      heading: "Project Team Introduction",
      content:
        "Meet the team you'll collaborate with over the next 8-10 weeks. During this kickoff call, the team will introduce themselves, discuss your pain points, clarify objectives, and draft a tailored project roadmap.",
    },
    {
      leftText: "Week 2-4",
      heading: "Research & Analysis",
      content:
        "The team dives into research, ideation, and data analysis to develop customized recommendations. Progress updates will be shared during weekly check-ins to ensure alignment.",
    },
    {
      leftText: "Week 5",
      heading: "Mid-Project Review",
      content:
        "We’ll conduct a formal mid-project check-in, providing a presentation or written deliverable to confirm we’re on the right path and make adjustments if necessary.",
    },
    {
      leftText: "Week 6-10",
      heading: "Final Presentation",
      content:
        "After thorough review by the Strategy Vice President and project mentor(s), the team will present their findings and actionable recommendations in a detailed final presentation.",
    },
    {
      leftText: "Post-Project",
      heading: "Client Feedback",
      content:
        "We conclude by gathering feedback on the team’s performance, onboarding process, communication, and the quality of our deliverables to continually improve our approach.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative bg-icgblue min-h-screen text-white flex flex-col items-center justify-center py-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/icg_work_with_us.webp')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-8xl font-extrabold mb-4">
            Work With Us
          </h1>
          <p className="text-lg sm:text-2xl mx-auto my-6 font-light max-w-3xl text-center">
            At Irvine Consulting Group, we don't just consult – we deliver impact.
          </p>
          <div className="w-48 md:w-80 h-0.5 bg-white/50 mx-auto"></div>
        </div>
      </div>

        {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-xl md:text-2xl font-bold text-[#005d97]">
          Our Services.
        </h2>
        <p className="text-icgblue font-bold mt-4 mb-12 max-w-6xl text-4xl md:text-6xl">
          Capabilities and Specialties
        </p>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Search className="w-12 h-12 text-blue-500" />}
            title="Market Research"
            description="Comprehensive and critical analysis to uncover industry trends, customer behavior, and competitive dynamics shaping strategic decisions."
          />
          <ServiceCard
            icon={<BarChart2 className="w-12 h-12 text-teal-500" />}
            title="Product Development"
            description="Identification of new product opportunities and development of value-driven pricing strategies informed by market and client-specific data."
          />
          <ServiceCard
            icon={<Target className="w-12 h-12 text-orange-500" />}
            title="Go-To-Market Strategy"
            description="Design and implementation of targeted strategies to successfully launch products or services into specific markets with measurable outcomes."
          />
          <ServiceCard
            icon={<ChartNoAxesCombined className="w-12 h-12 text-green-500" />}
            title="Growth Strategy"
            description="Evaluation and optimization of opportunities for market expansion, operational efficiency, and revenue acceleration."
          />
          <ServiceCard
            icon={<Heart className="w-12 h-12 text-red-500" />}
            title="Branding Strategy"
            description="Development of innovative branding approaches to establish compelling brand identity and strengthen market presence."
          />
          <ServiceCard
            icon={<Merge className="w-12 h-12 text-purple-500" />}
            title="Merger and Acquisition Advisory"
            description="Strategic guidance throughout the M&A process, including opportunity assessment, market research, due diligence, and post-merger integration planning."
          />
        </div>
      </div>

      {/* Clients Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-xl md:text-2xl font-bold text-[#005d97]">
          Our Clients.
        </h2>
        <p className="text-icgblue font-bold mt-4 mb-12 max-w-6xl text-4xl md:text-6xl">
          Partners Across Industries
        </p>
        {/* Logo Carousel - Fixed wrapping for mobile */}
        <div className="logo-carousel-wrapper py-8 overflow-hidden">
          <div className="logo-carousel">
            <div className="logo-carousel-track flex items-center">
              {/* Your Logos */}
              <img src="/clientlogo/7 Leaves logo.avif" alt="7 Leaves" className="h-10 md:h-16 mx-4 md:mx-8 shrink-0" />
              <img src="/clientlogo/ABD logo.png" alt="ABD" className="h-10 md:h-16 mx-4 md:mx-8 shrink-0" />
              <img src="/clientlogo/adgreetz logo.png" alt="AdGreetz" className="h-10 md:h-16 mx-4 md:mx-8 shrink-0" />
              <img src="/clientlogo/Aura logo.jpg" alt="Aura" className="h-10 md:h-16 mx-4 md:mx-8 shrink-0" />
              <img src="/clientlogo/BeReal-Logo-Black.png" alt="BeReal" className="h-10 md:h-16 mx-4 md:mx-8 shrink-0" />
              <img src="/clientlogo/knowt logoo.png" alt="Knowt" className="h-10 md:h-16 mx-4 md:mx-8 shrink-0" />
              <img src="/clientlogo/Kura sushi logo.png" alt="Kura Sushi" className="h-10 md:h-16 mx-4 md:mx-8 shrink-0" />
              <img src="/clientlogo/TC logo.png" alt="ToughCutie" className="h-10 md:h-16 mx-4 md:mx-8 shrink-0" />
              <img src="/clientlogo/datedrop.jpg" alt="Date Drop" className="h-10 md:h-16 mx-4 md:mx-8 shrink-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative bg-icgblue text-white py-12 md:py-20 mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/icg_test_img.jpg')",
            backgroundPosition: "bottom",
          }}
        />
        <div className="relative z-10 container mx-auto px-4">
          {/* FIX: Changed h-64/80 to min-h-fit to allow vertical expansion on mobile */}
          <div className="flex items-center justify-center min-h-[300px] md:min-h-[400px] relative">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 md:left-10 text-white p-2 focus:outline-none z-20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 md:w-8 h-6 md:h-8" />
            </button>
            
            <div className="text-center max-w-md md:max-w-3xl mx-auto px-8 py-6">
              <div className="text-4xl md:text-6xl font-serif mb-2">"</div>
              <p className="text-base md:text-xl mb-4 leading-relaxed">
                {testimonials[currentTestimonial].quote}
              </p>
              <p className="text-sm font-bold uppercase tracking-wider opacity-80">
                {testimonials[currentTestimonial].author}
              </p>
            </div>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 md:right-10 text-white p-2 focus:outline-none z-20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 md:w-8 h-6 md:h-8" />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentTestimonial === index ? "bg-white w-6" : "bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
        <div className="relative bg-white py-20 px-4 md:mx-20">
          <h1 className="text-xl md:text-2xl pt-10 text-[#005d97] font-bold">
            Project Overview.
          </h1>
          <p className="text-icgblue font-bold text-4xl md:text-6xl mb-10 mt-4">
            What to Expect
          </p>

          <div className="max-w-[1200px] mx-auto overflow-x-auto">
            <TimelineComponent timelineData={timelineData} maxWidth={1100} />
          </div>
        </div>
        

      {/* Contact Us Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-2 text-2xl md:text-4xl font-light">
            Let's Connect
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-icgblue">
            Contact Us.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border rounded-lg overflow-hidden bg-white">
          <div className="p-8 flex flex-col space-y-8 md:space-y-20">
            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="w-20 h-20 md:w-32 md:h-32 shrink-0 rounded-full overflow-hidden border">
                <img src="/khang.png" alt="Khang Nguyen" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-semibold text-blue-900">Khang Nguyen</h3>
                <div className="flex items-center space-x-2 mt-1 text-sm md:text-xl text-gray-600 hover:text-blue-600">
                  <Mail className="w-4 h-4" /> <a href="mailto:khantn11@uci.edu">Email</a>
                </div>
                <div className="flex items-center space-x-2 mt-1 text-sm md:text-xl text-gray-600 hover:text-blue-600">
                  <Linkedin className="w-4 h-4" /> <a href="https://www.linkedin.com/in/khangtoannguyen/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>
  
            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="w-20 h-20 md:w-32 md:h-32 shrink-0 rounded-full overflow-hidden border">
                <img src="/michelle.png" alt="Michelle Choy" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-semibold text-blue-900">Michelle Choy</h3>
                <div className="flex items-center space-x-2 mt-1 text-sm md:text-xl text-gray-600 hover:text-blue-600">
                  <Mail className="w-4 h-4" /> <a href="mailto:choyma@uci.edu">Email</a>
                </div>
                <div className="flex items-center space-x-2 mt-1 text-sm md:text-xl text-gray-600 hover:text-blue-600">
                  <Linkedin className="w-4 h-4" /> <a href="https://www.linkedin.com/in/michelle-choy0/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
  
          <div className="bg-gray-50 p-8">
            {state.succeeded ? (
              <div className="text-center text-xl font-semibold text-gray-800 py-20">
                We will contact you soon!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email Address <span className="text-red-500">*</span>
                  </label>
                  <input id="email" type="email" name="email" className="w-full p-3 border border-gray-300 rounded-md bg-white" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows={5} className="w-full p-3 border border-gray-300 rounded-md bg-white" required></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button type="submit" disabled={state.submitting} className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors font-bold">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
  
function ServiceCard({ icon, title, description }) {
  return (
    <div className="border rounded-lg p-6 md:p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow bg-white">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}