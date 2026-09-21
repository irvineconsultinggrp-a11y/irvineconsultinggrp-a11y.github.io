import { Mail, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Motion";
import { EASE } from "../lib/motion";

function Footer() {
  return (
    <footer className="bg-icgblue text-white py-10 px-6">
      <Reveal
        y={18}
        className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* Left */}
        <div className="flex items-center gap-5">
          <motion.img
            src="/icg-logo-white.webp"
            alt="ICG Logo"
            loading="lazy"
            decoding="async"
            className="w-16 h-16"
            whileHover={{ rotate: -6, scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          />
          <div>
            <h3 className="text-xl font-bold">Irvine Consulting Group</h3>
            <p className="text-lg text-white/90 border-b border-white/40 pb-1 mt-0.5">
              Where Talent Meets Opportunity
            </p>
            <p className="text-xs text-white/40 mt-2">&copy; 2026 ICG</p>
          </div>
        </div>

        {/* Right — Contact Us + icons */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <h3 className="text-xl font-bold text-white">Contact Us</h3>
          <div className="flex items-center gap-5">
            {[
              {
                href: 'mailto:irvineconsulting.grp@gmail.com',
                label: 'Email',
                Icon: Mail,
                external: false,
              },
              {
                href: 'https://www.instagram.com/icg.uci/',
                label: 'Instagram',
                Icon: Instagram,
                external: true,
              },
              {
                href: 'https://www.linkedin.com/company/irvineconsultinggroup/about/',
                label: 'LinkedIn',
                Icon: Linkedin,
                external: true,
              },
            ].map(({ href, label, Icon, external }) => (
              <motion.a
                key={label}
                href={href}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                aria-label={label}
                className="block rounded-full border border-white/50 p-2 text-white/90 hover:bg-white/10 hover:text-white transition-colors"
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </Reveal>
    </footer>
  );
}

export default Footer;
