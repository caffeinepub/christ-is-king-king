import { Toaster } from "@/components/ui/sonner";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useActor } from "./hooks/useActor";
import { useVisit, useVisitorCount } from "./hooks/useQueries";

const CA = "HgAEQbgPU8o8g8oAsNgu2hgQ87eQEBNfVourwznepump";
const DEX_URL =
  "https://dexscreener.com/solana/2zYu5jZRaUayoU3qTEfnS2iWN4BHKgznUYkeopRgCEAP";
const TWITTER_URL = "https://x.com/kingofkingz?s=21";
const TIKTOK_URL = "https://www.tiktok.com/@king_of_kingz__";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Distribution", href: "#distribution" },
    { label: "Contract", href: "#contract" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0b0b]/95 backdrop-blur-md shadow-lg"
          : "bg-[#0b0b0b]/70 backdrop-blur-sm"
      }`}
      style={{ borderBottom: "1px solid rgba(212,175,55,0.3)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="font-cinzel text-2xl font-bold gold-gradient-text tracking-widest"
          data-ocid="nav.link"
        >
          $KING
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans-display text-sm font-medium uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-200"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <a
            href={DEX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn px-5 py-2 rounded-full text-sm"
            data-ocid="nav.primary_button"
          >
            Buy Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b0b0b]/98 border-t border-[#D4AF37]/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-white/80 hover:text-white"
              onClick={() => setMenuOpen(false)}
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <a
            href={DEX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn px-5 py-2.5 rounded-full text-sm text-center"
            onClick={() => setMenuOpen(false)}
            data-ocid="nav.primary_button"
          >
            Buy Now
          </a>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-4"
      >
        {/* Crown decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl mb-2 gold-glow"
          aria-hidden="true"
        >
          👑
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-cinzel font-black uppercase tracking-[0.15em] leading-tight"
          style={{
            fontSize: "clamp(3rem, 9vw, 8rem)",
            textShadow:
              "0 0 60px rgba(212,175,55,0.8), 0 0 120px rgba(212,175,55,0.4), 0 4px 20px rgba(0,0,0,0.9)",
            background:
              "linear-gradient(135deg, #8A6A1F 0%, #F2D17B 35%, #D4AF37 55%, #FFF0A0 75%, #D4AF37 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Christ Is King
        </motion.h1>

        {/* Ticker */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-cinzel font-bold uppercase tracking-[0.25em]"
          style={{
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            textShadow:
              "0 0 40px rgba(212,175,55,0.7), 0 0 80px rgba(212,175,55,0.3)",
            background:
              "linear-gradient(135deg, #D4AF37 0%, #F2D17B 50%, #D4AF37 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          $KING
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="w-48 divider-gold my-2"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/75 text-lg md:text-xl font-sans-display tracking-wide max-w-lg"
        >
          The King of all meme coins reigns on Solana
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <a
            href={DEX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn px-8 py-3.5 rounded-full text-base"
            data-ocid="hero.primary_button"
          >
            Buy $KING
          </a>
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="outline-gold-btn px-8 py-3.5 rounded-full text-base"
            data-ocid="hero.secondary_button"
          >
            View on X
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center gap-6 mt-6 flex-wrap justify-center"
        >
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm uppercase tracking-widest"
            data-ocid="hero.link"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.858L1.764 2.25h7.098l4.254 5.622 4.928-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            @kingofkingz
          </a>
          <span className="text-white/20">|</span>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm uppercase tracking-widest"
            data-ocid="hero.link"
          >
            <TikTokIcon className="w-5 h-5" />
            TikTok
          </a>
          <span className="text-white/20">|</span>
          <a
            href={DEX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-gold transition-colors text-sm uppercase tracking-widest"
            data-ocid="hero.link"
          >
            DEX Screener
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#D4AF37]/40 to-transparent" />
      </motion.div>
    </section>
  );
}

function AboutSection() {
  const features = [
    {
      icon: "⚔️",
      title: "Divine Power",
      description:
        "Built on unshakeable faith and community conviction. $KING draws strength from the eternal — a token with purpose beyond the charts.",
    },
    {
      icon: "🏰",
      title: "Eternal Kingdom",
      description:
        "A covenant of holders united under one crown. No team tokens, no rug — just a sovereign community building something that lasts.",
    },
    {
      icon: "✝️",
      title: "Community of Faith",
      description:
        "Thousands of believers, one message. Join the fastest-growing faith-based meme coin community on Solana and let your conviction grow.",
    },
  ];

  return (
    <section id="about" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-gold-light text-xs uppercase tracking-[0.4em] mb-4"
            style={{ color: "#F2D17B" }}
          >
            The Vision
          </p>
          <h2
            className="section-heading text-3xl md:text-4xl mb-4"
            style={{
              color: "#F5F5F5",
              textShadow: "0 0 20px rgba(212,175,55,0.3)",
            }}
          >
            Kingdom Vision
          </h2>
          <div className="divider-gold w-32 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="panel-bg rounded-2xl p-8 flex flex-col items-center text-center gap-4 group hover:border-[#D4AF37]/50 transition-all duration-300"
              data-ocid="about.card"
            >
              <div
                className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                {feature.icon}
              </div>
              <div
                className="w-12 divider-gold"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #D4AF37, transparent)",
                  height: "1px",
                }}
              />
              <h3
                className="font-cinzel font-bold uppercase tracking-widest text-sm"
                style={{ color: "#D4AF37" }}
              >
                {feature.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DistributionSection() {
  const cards = [
    {
      icon: "🔥",
      percentage: "10%",
      title: "Burned",
      description:
        "Permanently removed from circulation in the Incinerator, reducing supply and strengthening the Kingdom.",
    },
    {
      icon: "✝️",
      percentage: "3%",
      title: "Charity",
      description:
        "Sent directly to Saint Jude Children's Research Hospital wallet, funding hope for children worldwide.",
    },
  ];

  return (
    <section id="distribution" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs uppercase tracking-[0.4em] mb-4"
            style={{ color: "#F2D17B" }}
          >
            By The Numbers
          </p>
          <h2
            className="section-heading text-3xl md:text-4xl mb-4"
            style={{
              color: "#F5F5F5",
              textShadow: "0 0 20px rgba(212,175,55,0.3)",
            }}
          >
            Token Distribution
          </h2>
          <div className="divider-gold w-32 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="panel-bg rounded-2xl p-10 flex flex-col items-center text-center gap-5 group hover:border-[#D4AF37]/50 transition-all duration-300"
              data-ocid="distribution.card"
            >
              <div
                className="text-5xl group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                {card.icon}
              </div>

              <div className="flex flex-col items-center gap-1">
                <span
                  className="font-cinzel font-black"
                  style={{
                    fontSize: "clamp(3.5rem, 8vw, 5rem)",
                    background:
                      "linear-gradient(135deg, #8A6A1F 0%, #F2D17B 40%, #D4AF37 60%, #FFF0A0 80%, #D4AF37 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "none",
                    lineHeight: 1,
                  }}
                >
                  {card.percentage}
                </span>
                <span
                  className="font-cinzel font-bold uppercase tracking-[0.25em] text-base"
                  style={{ color: "#D4AF37" }}
                >
                  {card.title}
                </span>
              </div>

              <div
                className="w-16"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #D4AF37, transparent)",
                  height: "1px",
                }}
              />

              <p className="text-white/65 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContractSection() {
  const [copied, setCopied] = useState(false);
  const [dexColor, setDexColor] = useState("rgba(212,175,55,0.7)");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CA);
      setCopied(true);
      toast.success("Contract address copied!", {
        style: {
          background: "#1A1A1A",
          border: "1px solid rgba(212,175,55,0.4)",
          color: "#F5F5F5",
        },
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <section id="contract" className="relative z-10 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p
            className="text-xs uppercase tracking-[0.4em] mb-4"
            style={{ color: "#F2D17B" }}
          >
            On Solana
          </p>
          <h2
            className="section-heading text-3xl md:text-4xl mb-4"
            style={{
              color: "#F5F5F5",
              textShadow: "0 0 20px rgba(212,175,55,0.3)",
            }}
          >
            Contract Address
          </h2>
          <div className="divider-gold w-32 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="panel-bg rounded-2xl p-6 md:p-8"
          data-ocid="contract.panel"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <div
              className="flex-1 rounded-xl px-5 py-4 font-mono text-sm break-all"
              style={{
                background: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(212,175,55,0.2)",
                color: "#F2D17B",
                letterSpacing: "0.02em",
              }}
            >
              {CA}
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="gold-btn px-6 py-4 rounded-xl text-sm shrink-0 flex items-center justify-center gap-2"
              data-ocid="contract.primary_button"
            >
              {copied ? (
                <>
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy CA
                </>
              )}
            </button>
          </div>

          <div className="mt-6 text-center">
            <a
              href={DEX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest transition-colors duration-200"
              style={{ color: dexColor }}
              onMouseEnter={() => setDexColor("rgba(242,209,123,1)")}
              onMouseLeave={() => setDexColor("rgba(212,175,55,0.7)")}
              data-ocid="contract.link"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              View on DEX Screener
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer({ visitorCount }: { visitorCount: bigint | undefined }) {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative z-10 py-12 px-6"
      style={{ borderTop: "1px solid rgba(212,175,55,0.2)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="font-cinzel text-xl font-bold gold-gradient-text tracking-widest">
            $KING
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 flex-wrap justify-center">
            <a
              href={TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 hover:text-white/90 transition-colors text-sm uppercase tracking-wider"
              data-ocid="footer.link"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.858L1.764 2.25h7.098l4.254 5.622 4.928-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter / X
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 hover:text-white/90 transition-colors text-sm uppercase tracking-wider"
              data-ocid="footer.link"
            >
              <TikTokIcon className="w-4 h-4" />
              TikTok
            </a>
            <a
              href={DEX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white/90 transition-colors text-sm uppercase tracking-wider"
              data-ocid="footer.link"
            >
              DEX Screener
            </a>
          </div>
        </div>

        <div className="divider-gold mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30 uppercase tracking-wider">
          <p>© {year} $KING — Christ is King. Not financial advice. DYOR.</p>
          {visitorCount !== undefined && (
            <p data-ocid="footer.panel">Visitors: {visitorCount.toString()}</p>
          )}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const { actor } = useActor();
  const { mutate: recordVisit } = useVisit();
  const { data: visitorCount } = useVisitorCount();

  // Record visit on mount once actor is ready
  useEffect(() => {
    if (actor) {
      recordVisit();
    }
  }, [actor, recordVisit]);

  return (
    <div className="relative min-h-screen" style={{ background: "#0B0B0B" }}>
      {/* Fixed video background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.65) saturate(1.1)" }}
        >
          <source src="/assets/king-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.65) 80%, rgba(11,11,11,0.95) 100%)",
          }}
        />
        {/* Subtle vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />

          {/* Dark section divider */}
          <div
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(11,11,11,0.85) 40%, rgba(11,11,11,0.85) 60%, transparent)",
              backdropFilter: "blur(4px)",
            }}
          >
            <AboutSection />
            <div className="divider-gold max-w-6xl mx-auto opacity-40" />
            <DistributionSection />
            <div className="divider-gold max-w-6xl mx-auto opacity-40" />
            <ContractSection />
          </div>
        </main>
        <Footer visitorCount={visitorCount} />
      </div>

      <Toaster />
    </div>
  );
}
