import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FAQItem from '../components/FaqItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Home() {
  const fade_in_text = 'Where Talent Meets Opportunity'.split(' ');
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselData = [
    {
      title: "",
      description: "Dedicated to delivering actionable, strategic insights that move our partners forward.",
      testimonial: {
        quote: "The ICG team explored these domains with technical rigor by developing insights around model portability, edge to cloud tradeoffs and the architecture of AI-native data centers.",
        author: "Alex Veytsman",
        role: "CEO, Artificial By Design"
      },
      image: "/abd.jpeg"
    },
    {
      title: "",
      description: "Transforming complex business challenges into actionable insights through comprehensive data analysis and strategic thinking.",
      testimonial: {
        quote: "ICG's approach to problem-solving was refreshing. They delivered insights that helped us reshape our market strategy.",
        author: "Brittany Coleman",
        role: "Founder and CEO, ToughCutie"
      },
      image: "/ToughCutie.webp"
    },
    // Add more slides as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const faqs = [
    {
      question: "When is the next recruitment cycle for ICG?",
      answer:
        "For recruitment information, check out the Join Us page. All information will be updated on a quarterly basis.",
    },
    {
      question: "How long does a typical consulting project take?",
      answer:
        "The duration of our consulting projects varies depending on the scope and complexity of the engagement, we typically aim to complete them in 10 weeks. However, depending on the scope and demand of the project, this can fluctuate to ensure quality.",
    },
    {
      question: "What makes your consulting approach different?",
      answer:
        "Our approach is distinguished by three key factors: First, we focus on practical, implementable solutions rather than theoretical frameworks. Second, we emphasize knowledge transfer to ensure your team can sustain the improvements after our engagement ends. Third, we measure our success by the tangible results and return on investment (ROI) we deliver to your business.",
    },
    {
      question: "How do you measure the success of your consulting engagements?",
      answer:
        "We define and track key performance indicators (KPIs) that align with your business objectives. These might include financial metrics like revenue growth or cost savings, operational metrics like efficiency improvements, or strategic metrics like market share gains. We establish these metrics at the beginning of our engagement and regularly report our progress throughout the project.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* First Section */}
      <div
        className="sticky top-0 min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/skyline-downtown-new-york-new-york-usa.jpg')`,
        }}
      >
        <div className="bg-icgblue bg-opacity-70 h-screen flex items-center justify-start px-4 md:px-10">
          {/* Banner header */}
          <div className="text-white ml-4 md:ml-20 -mt-16">
            <h1 className="text-5xl sm:text-6xl lg:text-9xl font-extrabold leading-tight">
              Irvine
              <br />
              Consulting
              <br />
              Group
            </h1>
            {/* FIX: Changed space-x to flex-wrap and gap to allow "Opportunity" to wrap on phones */}
            <div className="flex flex-wrap justify-start items-center gap-2 mt-4 max-w-[90vw] md:max-w-none">
              {fade_in_text.map((el, i) => (
                <motion.span
                  className="text-base sm:text-2xl font-bold inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </div>
            {/* FIX: flex-wrap ensures buttons don't overlap on small screens */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="border border-white border-2 w-fit px-4 py-2 text-base sm:text-2xl font-bold hover:bg-icgblue hover:text-white">
                <Link to="contact">Contact Us</Link>
              </button>
              <button className="border border-white border-2 w-fit px-4 py-2 text-base sm:text-2xl font-bold hover:bg-icgblue hover:text-white">
                <a href="https://apply.irvineconsultinggroup.com" target="_blank" rel="noreferrer">Apply Now</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="relative bg-white h-fit font-bold text-icgblue flex flex-col items-center justify-center py-10">
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-2/3 gap-8 pt-16 pb-10 mx-auto">
          <img
            src="/team3.png"
            alt="ICG Logo"
            className="w-80 md:w-[500px] h-auto shadow-lg transform transition-transform duration-300 hover:scale-105 rounded-md"
          />
          <div className="w-11/12 md:w-full px-4">
            <h1 className="text-4xl md:text-7xl pb-10 font-bold">Welcome to <span className="text-[#035e97]">ICG!</span></h1>
            <p className="text-base md:text-xl font-light text-left">
            Irvine Consulting Group (ICG) is a collaborative, preeminent strategy consulting organization at UC Irvine, dedicated to shaping future leaders in consulting through experiential learning and development opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* New Gray Section */}
      <div className="relative bg-gray-100 w-full py-12">
        <div className="container mx-auto px-4 md:px-0 md:ml-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-icgblue mb-10">Our <span className="text-[#035e97]">Work.</span></h1>
          <div className="overflow-hidden md:ml-10">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselData.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 md:ml-5 px-4 md:px-0">
                <div className="flex flex-col md:flex-row gap-10 max-w-7xl justify-between">
                  {/* Left: Text and Button */}
                  <div className="w-full md:w-[25%] lg:w-[20%] mb-8 md:mb-0">
                    <p className="text-gray-700 mb-4 text-lg md:text-xl font-light">{slide.description}</p>
                    <div className="flex flex-col items-start">
                      <Link
                        to="/contact"
                        className="inline-block bg-icgblue text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-800 transition-colors"
                      >
                        Work With Us
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6 w-full md:w-[70%] lg:w-[75%]">
                    {/* Image */}
                    <div className="w-full md:w-3/5">
                      <img
                        src={slide.image}
                        alt="Client Work"
                        className="w-full h-80 md:h-[28rem] object-cover rounded-xl shadow-lg"
                      />
                    </div>
                    {/* Testimonial Card */}
                    <div className="w-full md:w-2/5 bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between">
                      <div className="flex items-start">
                        <span className="text-5xl md:text-6xl text-icgblue font-extrabold leading-none mr-2">"</span>
                        <div>
                          <p className="text-sm md:text-lg font-medium text-gray-700">
                            {slide.testimonial.quote}
                          </p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <span className="block font-bold text-icgblue">{slide.testimonial.author}</span>
                        <span className="block text-gray-500 text-sm">{slide.testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
          {/* Navigation Arrows */}
          <div className="container mx-auto px-4 md:px-10 mt-8 md:ml-10">
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-icgblue text-white hover:bg-blue-800 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-icgblue text-white hover:bg-blue-800 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Section */}
      <div
        className="relative w-full min-h-[500px] bg-fixed bg-cover bg-center py-10"
        style={{
          backgroundImage: `url('/driven.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-icgblue bg-opacity-70"></div>

        <div className="relative flex flex-col md:flex-row pt-20 justify-center h-full text-white text-center container px-4 md:ml-auto">
          <div className="text-left w-full md:w-1/2 mb-8 md:mb-0 ">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8">The Numbers.</h1>
          </div>
          <div className="w-full md:w-1/2 flex flex-row gap-4">
            <div className="flex flex-col gap-8">
              <h1 className="font-bold text-4xl md:text-7xl">8+</h1>
              <h1 className="font-bold text-4xl md:text-7xl">21+</h1>
              <h1 className="font-bold text-4xl md:text-7xl mb-10">200+</h1>
            </div>
            <div className="flex flex-col gap-6 pl-4 md:pl-10">
              <div className="text-left">
                <h1 className="font-bold text-xl md:text-5xl">Clients served</h1>
                <p className="text-base md:text-3xl font-light">Across tech, consumer goods.</p>
              </div>
              <div className="text-left">
                <h1 className="font-bold text-xl md:text-5xl">Consultants</h1>
                <p className="text-base md:text-3xl font-light">Across various fields.</p>
              </div>
              <div className="text-left">
                <h1 className="font-bold text-xl md:text-5xl">Attendees</h1>
                <p className="text-base md:text-3xl font-light">In consulting workshops.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Mission Section */}
      <div className="relative w-full bg-white py-16">
        <div className="container px-4 md:ml-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
          <div className="w-full md:w-2/5 flex flex-col justify-between text-center md:text-right">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-icgblue text-left mb-6">
              Our <span className="text-[#035e97]">People.</span>
            </h2>
            <p className="text-left text-lg md:text-xl text-gray-700">
              Founded on the vision of making consulting accessible to all, ICG provides hands-on client engagements and skill training.
            </p>
            <Link to="/students" className="w-32 text-center inline-block bg-icgblue text-white font-semibold px-6 py-3 mt-6 rounded-full hover:bg-blue-800 transition-colors">
              Join Us
            </Link>
          </div>
          <div className="w-full md:w-3/5">
            <img
              src="/mohan_khang.png"
              alt="Teamwork"
              className="w-full h-auto shadow-lg rounded-md"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative bg-white py-16 text-icgblue px-4">
        <div className="container md:ml-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-icgblue mb-10">Common <span className="text-[#035e97]">Questions</span>, Quick <span className="text-[#035e97]">Answers.</span></h1>
          <div className="md:w-[90%]">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} isLast={index === faqs.length - 1} />
            ))}
          </div>
        </div>
      </div>

      {/* Final Section */}
      <div className="relative bg-white py-16 px-4">
        <div className='container md:ml-auto'>
          <h2 className="text-3xl sm:text-5xl md:text-6xl text-left text-icgblue font-bold mb-8">
            Enough about us. <br /> <span className="font-light">What can we do for you?</span>
          </h2>
          <div className="flex flex-col text-left space-y-4 text-base sm:text-2xl text-icgblue">
            <Link to="/students" className="underline hover:text-blue-900">I am a student.</Link>
            <Link to="/contact" className="underline hover:text-blue-900">I am a business.</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;