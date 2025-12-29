import {
    ChevronLeft,
    ChevronRight,
    Mail,
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
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-icgblue h-screen text-white flex flex-col items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('/icg_work_with_us.webp')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-4">
              Work With Us
            </h1>
            <p className="text-lg sm:text-2xl mx-auto my-6 font-light max-w-3xl text-center md:whitespace-nowrap">
              At Irvine Consulting Group, we don't just consult – we deliver impact.
            </p>
            <div className="w-48 md:w-80 h-0.5 bg-white/50 mx-auto"></div>
          </div>
        </div>
  
        {/* Clients Section */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-xl md:text-2xl font-bold text-[#005d97]">
            Our Clients.
          </h2>
          <p className="text-icgblue font-bold mt-4 mb-12 max-w-6xl text-5xl md:text-6xl">
            Partners Across Industries
          </p>
          {/* Logo Carousel */}
          <div className="logo-carousel-wrapper py-8">
            <div className="logo-carousel">
              <div className="logo-carousel-track">
              {/* First set of logos */}
              <img src="/clientlogo/7 Leaves logo.avif" alt="7 Leaves" />
              <img src="/clientlogo/ABD logo.png" alt="ABD" />
              <img src="/clientlogo/adgreetz logo.png" alt="AdGreetz" />
              <img src="/clientlogo/Aura logo.jpg" alt="Aura" />
              <img src="/clientlogo/BeReal-Logo-Black.png" alt="BeReal" />
              <img src="/clientlogo/knowt logoo.png" alt="Knowt" />
              <img src="/clientlogo/Kura sushi logo.png" alt="Kura Sushi" />
              <img src="/clientlogo/TC logo.png" alt="ToughCutie" />
              {/* Duplicate set for seamless loop */}
              <img src="/clientlogo/7 Leaves logo.avif" alt="7 Leaves" />
              <img src="/clientlogo/ABD logo.png" alt="ABD" />
              <img src="/clientlogo/adgreetz logo.png" alt="AdGreetz" />
              <img src="/clientlogo/Aura logo.jpg" alt="Aura" />
              <img src="/clientlogo/BeReal-Logo-Black.png" alt="BeReal" />
              <img src="/clientlogo/knowt logoo.png" alt="Knowt" />
              <img src="/clientlogo/Kura sushi logo.png" alt="Kura Sushi" />
              <img src="/clientlogo/TC logo.png" alt="ToughCutie" />
              </div>
            </div>
          </div>
        </div>
  
        {/* Testimonials Section */}
        <div className="relative bg-icgblue text-white py-8 md:py-12 mt-16">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('/icg_test_img.jpg')",
              backgroundPosition: "bottom",
            }}
          />
          <div className="relative z-10 container mx-auto px-4">
            <div className="flex items-center justify-center h-64 md:h-80 relative">
              <button
                onClick={prevTestimonial}
                className="absolute left-4 md:left-10 text-white p-2 focus:outline-none"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 md:w-8 h-6 md:h-8" />
              </button>
              <div className="text-center max-w-md md:max-w-3xl mx-auto px-4 py-4">
                <div className="text-4xl md:text-6xl font-serif mb-2">"</div>
                <p className="text-lg md:text-xl mb-4">
                  {testimonials[currentTestimonial].quote}
                </p>
                <p className="text-sm">
                  {testimonials[currentTestimonial].author}
                </p>
              </div>
              <button
                onClick={nextTestimonial}
                className="absolute right-4 md:right-10 text-white p-2 focus:outline-none"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 md:w-8 h-6 md:h-8" />
              </button>
            </div>
            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentTestimonial === index ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
  
        {/* Timeline Section */}
          <div className="relative bg-white py-20 mx-4 md:mx-20">
            <h1 className="text-xl md:text-2xl pt-10 text-[#005d97] font-bold">
              Project Overview.
            </h1>
            <p className="text-icgblue font-bold text-5xl md:text-6xl mb-10 mt-4">
              What to Expect
            </p>

            {/* keep it simple: no flex centering here */}
            <div className="max-w-[1200px] flex items-center justify-center mx-auto">
              <TimelineComponent timelineData={timelineData} maxWidth={1100} />
            </div>
          </div>
  
        {/* Contact Us Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-2 text-3xl md:text-4xl font-light">
              Let's Connect
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-icgblue">
              Contact Us.
            </h2>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border rounded-lg overflow-hidden">
            {/* Team Contact Info */}
            <div className="p-8 flex flex-col space-y-8 md:space-y-20">
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                  <img
                    src="/khang.png"
                    alt="Khang Nguyen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-blue-900">
                    Khang Nguyen
                  </h3>
                  <div className="flex items-center space-x-1 md:space-x-2 mt-1 text-sm md:text-xl">
                    <Mail className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
                    <a
                      href="mailto:khantn11@uci.edu"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      Email
                    </a>
                  </div>
                  <div className="flex items-center space-x-1 md:space-x-2 mt-1 text-sm md:text-xl">
                    <Linkedin className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
                    <a
                      href="https://www.linkedin.com/in/khangtoannguyen/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
    
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                  <img
                    src="/michelle.png"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-blue-900">
                    Michelle Choy
                  </h3>
                  <div className="flex items-center space-x-1 md:space-x-2 mt-1 text-sm md:text-xl">
                    <Mail className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
                    <a
                      href="mailto:choyma@uci.edu"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      Email
                    </a>
                  </div>
                  <div className="flex items-center space-x-1 md:space-x-2 mt-1 text-sm md:text-xl">
                    <Linkedin className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
                    <a
                      href="https://www.linkedin.com/in/michelle-choy0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Contact Form */}
            <div className="bg-white p-8">
              {state.succeeded ? (
                <div className="text-center text-xl font-semibold text-gray-800">
                  We will contact you soon!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />
                  </div>
    
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    ></textarea>
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
                  </div>
    
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
                  >
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