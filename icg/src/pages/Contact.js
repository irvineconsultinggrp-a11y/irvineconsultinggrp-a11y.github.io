import { useState } from "react";
import {
  Search,
  BarChart2,
  Target,
  Heart,
  ChartNoAxesCombined,
  Merge,
  Mail,
  Linkedin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const services = [
  {
    icon: <Search className="w-10 h-10 text-blue-500" />,
    title: "Market Research",
    description:
      "Comprehensive and critical analysis to uncover industry trends, customer behavior, and competitive dynamics shaping strategic decisions.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-teal-500" />,
    title: "Product Development",
    description:
      "Identification of new product opportunities and development of value-driven pricing strategies informed by market and client-specific data.",
  },
  {
    icon: <Target className="w-10 h-10 text-orange-500" />,
    title: "Go-To-Market Strategy",
    description:
      "Design and implementation of targeted strategies to successfully launch products or services into specific markets with measurable outcomes.",
  },
  {
    icon: <ChartNoAxesCombined className="w-10 h-10 text-green-500" />,
    title: "Growth Strategy",
    description:
      "Evaluation and optimization of opportunities for market expansion, operational efficiency, and revenue acceleration.",
  },
  {
    icon: <Heart className="w-10 h-10 text-red-500" />,
    title: "Branding Strategy",
    description:
      "Development of innovative branding approaches to establish compelling brand identity and strengthen market presence.",
  },
  {
    icon: <Merge className="w-10 h-10 text-purple-500" />,
    title: "Merger and Acquisition Advisory",
    description:
      "Strategic guidance throughout the M&A process, including opportunity assessment, market research, due diligence, and post-merger integration planning.",
  },
];

const clients = [
  {
    src: "/clientlogo/bereal.png",
    alt: "BeReal",
    projectDescription:
      "We supported BeReal with market and user-behavior research to inform product positioning and growth priorities for their social platform.",
  },
  {
    src: "/clientlogo/sandisk.png",
    alt: "SanDisk",
    projectDescription:
      "Our team analyzed storage and memory market dynamics and helped frame strategic options around product lines and competitive differentiation.",
  },
  {
    src: "/clientlogo/aura.png",
    alt: "AURA",
    projectDescription:
      "We partnered with AURA on go-to-market and customer insights work to sharpen messaging and clarify expansion opportunities.",
  },
  {
    src: "/clientlogo/toughcutie.png",
    alt: "ToughCutie",
    projectDescription:
      "ICG delivered branding and growth strategy recommendations to help ToughCutie strengthen its narrative and scale in a crowded retail landscape.",
  },
  {
    src: "/clientlogo/kura-sushi.png",
    alt: "Kura Sushi",
    projectDescription:
      "We conducted market research and operational benchmarking to support Kura Sushi’s strategic planning and customer experience initiatives.",
  },
  {
    src: "/clientlogo/adgreetz.png",
    alt: "AdGreetz",
    projectDescription:
      "Our engagement focused on expansion strategy and partnership opportunities, helping AdGreetz prioritize markets and next-step growth levers.",
  },
  {
    src: "/clientlogo/knowt.png",
    alt: "Knowt",
    projectDescription:
      "We worked with Knowt on product and user research to refine positioning for their education platform and inform the product roadmap.",
  },
  {
    src: "/clientlogo/7leaves.png",
    alt: "7 Leaves Cafe",
    projectDescription:
      "ICG supported 7 Leaves with market analysis and growth strategy to evaluate new locations and strengthen brand presence in key regions.",
  },
  {
    src: "/clientlogo/datedrop.png",
    alt: "Date Drop",
    projectDescription:
      "We helped Date Drop clarify target segments and messaging through research and a structured go-to-market narrative for their consumer offering.",
  },
];

function ClientCarouselCard({
  client,
  position,
  isFlipped,
  onFlip,
  onSideClick,
}) {
  const variants = {
    center: { x: 0, scale: 1, opacity: 1, zIndex: 10, filter: "blur(0px)" },
    left: {
      x: "-72%",
      scale: 0.82,
      opacity: 0.45,
      zIndex: 5,
      filter: "blur(2px)",
    },
    right: {
      x: "72%",
      scale: 0.82,
      opacity: 0.45,
      zIndex: 5,
      filter: "blur(2px)",
    },
    hidden: { x: 0, scale: 0.65, opacity: 0, zIndex: 0, filter: "blur(4px)" },
  };

  const isSide = position === "left" || position === "right";
  const isCenter = position === "center";

  const handleCardClick = () => {
    if (isSide) onSideClick();
    else if (isCenter) onFlip();
  };

  return (
    <motion.div
      className={`absolute w-full max-w-md px-3 md:px-4 ${
        isCenter || isSide ? "cursor-pointer" : ""
      }`}
      animate={position}
      variants={variants}
      initial={false}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      style={{
        pointerEvents: position === "hidden" ? "none" : "auto",
      }}
      onClick={isCenter || isSide ? handleCardClick : undefined}
      role={isCenter ? "button" : undefined}
      tabIndex={isCenter ? 0 : undefined}
      onKeyDown={
        isCenter
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onFlip();
              }
            }
          : undefined
      }
      aria-label={
        isCenter
          ? isFlipped
            ? `Show logo for ${client.alt}`
            : `Show project details for ${client.alt}`
          : undefined
      }
    >
      <div
        className="relative w-full min-h-[260px] md:min-h-[316px]"
        style={{ perspective: "1100px" }}
      >
        <div
          className="relative w-full min-h-[260px] md:min-h-[316px] transition-shadow duration-300 ease-out hover:shadow-xl"
          style={{
            transformStyle: "preserve-3d",
            transform:
              isFlipped && isCenter ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
        {/* Front — logo tile */}
        <div
          className="absolute inset-0 rounded-2xl border border-gray-200/80 bg-skyblue/40 flex flex-col items-center justify-center px-4 py-0.5 md:px-6 md:py-1 shadow-md transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <img
            src={client.src}
            alt={client.alt}
            className={`max-h-[252px] md:max-h-[308px] w-auto max-w-full object-contain ${client.logoClassName ?? ""}`}
          />
        </div>

        {/* Back — company + project copy */}
        <div
          className="absolute inset-0 rounded-2xl border border-gray-200 bg-white p-5 py-4 md:p-6 md:py-5 shadow-md flex flex-col items-center justify-center text-center overflow-y-auto"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 w-full">
            {client.alt}
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed w-full max-w-sm">
            {client.projectDescription}
          </p>
        </div>
        </div>
      </div>
    </motion.div>
  );
}

const timelineData = [
  {
    label: "Pre-Project",
    heading: "Initial Consultation",
    content:
      "We begin with an initial consultation to learn more about your organization, including your mission, operations, and goals. We'll discuss any challenges you're facing and how we can assist. Upon mutual agreement, we'll proceed with the project.",
  },
  {
    label: "Week 1",
    heading: "Project Team Introduction",
    content:
      "Meet the team you'll collaborate with over the next 8-10 weeks. During this kickoff call, the team will introduce themselves, discuss your pain points, clarify objectives, and draft a tailored project roadmap.",
  },
  {
    label: "Week 2-4",
    heading: "Research & Analysis",
    content:
      "The team dives into research, ideation, and data analysis to develop customized recommendations. Progress updates will be shared during weekly check-ins to ensure alignment.",
  },
  {
    label: "Week 5",
    heading: "Mid-Project Review",
    content:
      "We'll conduct a formal mid-project check-in, providing a presentation or written deliverable to confirm we're on the right path and make adjustments necessary.",
  },
  {
    label: "Week 6-10",
    heading: "Final Presentation",
    content:
      "After thorough review by the Strategy Vice President and project manager(s), the team will present their finding and actionable recommendations in a detailed final presentation.",
  },
  {
    label: "Post-Project",
    heading: "Client Feedback",
    content:
      "We conclude by gathering feedback on the team's performance, onboarding process, communication, and the quality of our deliverables to continually improve our approach.",
  },
];

export default function Contact() {
  const [state, handleSubmit] = useForm("xgvalkqb");
  const [currentClient, setCurrentClient] = useState(0);
  const [clientFlipped, setClientFlipped] = useState(false);

  const totalClients = clients.length;

  const getClientPosition = (index) => {
    const diff = (index - currentClient + totalClients) % totalClients;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === totalClients - 1) return "left";
    return "hidden";
  };

  const goToClient = (i) => {
    setClientFlipped(false);
    setCurrentClient(i);
  };

  const nextClient = () => {
    setClientFlipped(false);
    setCurrentClient((p) => (p + 1) % totalClients);
  };

  const prevClient = () => {
    setClientFlipped(false);
    setCurrentClient((p) => (p - 1 + totalClients) % totalClients);
  };

  return (
    <div className="overflow-x-hidden">
      {/* ===== Hero ===== */}
      <div
        className="relative min-h-[80vh] md:min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/icg-work-with-us.webp')` }}
      >
        <div className="absolute inset-0 bg-icgblue/70" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl text-white font-extrabold leading-[0.85] tracking-tighter">
            Trusted by Fortune 500 companies
          </h1>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[0.85] tracking-tighter bg-clip-text text-transparent mt-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #a8d8ff, #ffffff, #a8d8ff)",
            }}
          >
            from concept to completion
          </h1>
        </div>
      </div>

      {/* ===== Floating Content Panel ===== */}
      <div className="relative z-10 -mt-10 md:-mt-16 bg-white rounded-t-[28px] md:rounded-t-[40px] px-4 md:px-8 pt-12 md:pt-20 pb-16">
        {/* ===== Our Services ===== */}
        <section className="max-w-6xl mx-auto mb-24 md:mb-32">
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold text-icgblue text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Our Services.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                className="border border-gray-200 rounded-xl p-8 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <div className="mb-4">{svc.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {svc.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {svc.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== Our Clients ===== */}
        <section className="max-w-6xl mx-auto mb-24 md:mb-32">
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold text-icgblue text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Our Clients.
          </motion.h2>

          <div
            className="relative flex items-center justify-center max-w-4xl mx-auto"
            style={{ minHeight: "300px" }}
          >
            <AnimatePresence mode="popLayout">
              {clients.map((client, i) => (
                <ClientCarouselCard
                  key={client.alt}
                  client={client}
                  position={getClientPosition(i)}
                  isFlipped={clientFlipped && currentClient === i}
                  onFlip={() => setClientFlipped((f) => !f)}
                  onSideClick={() => goToClient(i)}
                />
              ))}
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              type="button"
              onClick={prevClient}
              className="text-gray-400 hover:text-icgblue transition-colors text-2xl px-2"
              aria-label="Previous client"
            >
              &larr;
            </button>
            <div className="flex gap-2 flex-wrap justify-center max-w-md">
              {clients.map((c, i) => (
                <button
                  key={c.alt}
                  type="button"
                  onClick={() => goToClient(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentClient === i ? "bg-icgblue w-7" : "bg-gray-300"
                  }`}
                  aria-label={`Show ${c.alt}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={nextClient}
              className="text-gray-400 hover:text-icgblue transition-colors text-2xl px-2"
              aria-label="Next client"
            >
              &rarr;
            </button>
          </div>
        </section>

        {/* ===== Project Timeline ===== */}
        <section className="max-w-3xl mx-auto mb-24 md:mb-32">
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold text-icgblue text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Project Timeline.
          </motion.h2>

          <div className="relative ml-3 md:ml-5">
            {timelineData.map((item, i) => (
              <div key={i} className="relative flex items-stretch">
                {/* Left: dot + connector */}
                <div className="flex flex-col items-center shrink-0 w-6">
                  <div
                    className={`w-px flex-1 ${
                      i === 0 ? "bg-transparent" : "bg-gray-300"
                    }`}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-icgblue shrink-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.15,
                      type: "spring",
                      stiffness: 300,
                    }}
                  />
                  <motion.div
                    className={`w-px flex-1 origin-top ${
                      i === timelineData.length - 1
                        ? "bg-transparent"
                        : "bg-gray-300"
                    }`}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
                  />
                </div>

                {/* Card */}
                <motion.div
                  className="flex-1 ml-6 md:ml-10 mb-8"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-lg md:text-xl font-bold text-icgblue">
                      {item.heading}
                    </h3>
                    <p className="text-sm font-medium text-[#005d97] italic mb-2">
                      {item.label}
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Contact Us ===== */}
        <section className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-icgblue mb-3">
              Contact Us.
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
              If you have a project you would like to discuss, fill out the form
              and we'll get back to you shortly
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* People */}
            <div className="p-8 flex flex-col justify-center space-y-8 md:space-y-12">
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="w-20 h-20 md:w-28 md:h-28 shrink-0 rounded-full overflow-hidden border">
                  <img
                    src="/headshots/Khang Nguyen.png"
                    alt="Khang Nguyen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-icgblue">
                    Khang Nguyen
                  </h3>
                  <a
                    href="mailto:khantn11@uci.edu"
                    className="flex items-center gap-2 mt-1 text-sm text-gray-600 hover:text-icgblue transition-colors"
                  >
                    <Mail className="w-4 h-4" /> Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/khangtoannguyen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mt-1 text-sm text-gray-600 hover:text-icgblue transition-colors"
                  >
                    <Linkedin className="w-4 h-4" /> Linkedin
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="w-20 h-20 md:w-28 md:h-28 shrink-0 rounded-full overflow-hidden border">
                  <img
                    src="/headshots/Michelle.png"
                    alt="Michelle Choy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-icgblue">
                    Michelle Choy
                  </h3>
                  <a
                    href="mailto:choyma@uci.edu"
                    className="flex items-center gap-2 mt-1 text-sm text-gray-600 hover:text-icgblue transition-colors"
                  >
                    <Mail className="w-4 h-4" /> Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/michelle-choy0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mt-1 text-sm text-gray-600 hover:text-icgblue transition-colors"
                  >
                    <Linkedin className="w-4 h-4" /> Linkedin
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 p-8">
              {state.succeeded ? (
                <div className="text-center text-xl font-semibold text-gray-800 py-20">
                  We will contact you soon!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Email Address{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="w-full p-3 border border-gray-300 rounded-md bg-white"
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
                      placeholder="Write your message here..."
                      className="w-full p-3 border border-gray-300 rounded-md bg-white"
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-icgblue text-white py-3 rounded-md hover:bg-icgblue/90 transition-colors font-bold"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
