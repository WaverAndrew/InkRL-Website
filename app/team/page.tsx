"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import Section from "@/components/Section";

const founders = [
  {
    name: "Andrea Bonarrigo",
    title: "Founder & CEO",
    description:
      "Product systems thinker. Built and shipped across Amazon, YC-backed experiments, and RL research tracks bridging product with algorithms.",
    image: "/avatars/andrea.jpg",
    email: "andrea.bonarrigo@studbocconi.it",
    floatDelay: 0,
  },
  {
    name: "Vittorio Garavelli",
    title: "Co-Founder & CTO",
    description:
      "Brings reinforcement-learning rigor from Berkeley and Bocconi. Designs the policies that make inkRL adapt faster every send.",
    image: "/avatars/vittorio.jpg",
    email: "vittorio.garavelli@studbocconi.it",
    floatDelay: 0.4,
  },
  {
    name: "Filippo Gombac",
    title: "Co-Founder & Chief Research",
    description:
      "Heads the RL and language research stack. Specializes in reward modeling, content measurement, and data tooling that keep our agents aligned.",
    image: "/avatars/filippo.jpg",
    email: "filippo.gombac@studbocconi.it",
    floatDelay: 0.8,
  },
];

export default function TeamPage() {
  return (
    <main className="relative min-h-screen bg-paper text-ink">
      <ProgressBar />
      <Header />
      <Section className="pb-32 pt-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="font-mono text-xs uppercase tracking-[0.6em] text-muted-gray">
            The Team
          </p>
          <h1 className="mt-6 text-4xl font-medium leading-tight sm:text-5xl">
            Three founders teaching language to learn back.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-muted-gray sm:text-lg">
            InkRL is built by operators who speak product, research, and revenue
            fluently. We design with words, test with math, and ship with speed.
          </p>
        </div>

        <div className="mt-24 grid gap-14 md:grid-cols-3">
          {founders.map((founder) => (
            <motion.article
              key={founder.name}
              className="relative flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="relative w-full max-w-xs overflow-hidden rounded-[2.75rem] border border-ink/10 bg-gradient-to-b from-paper to-paper/60 shadow-[0_25px_80px_-35px_rgba(17,17,17,0.65)]"
                animate={{
                  y: [0, -18, 6],
                  rotate: [0, 1.5, -1],
                }}
                transition={{
                  duration: 8,
                  delay: founder.floatDelay,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 280px, 320px"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 border border-white/10" />
              </motion.div>
              <div className="mt-10 space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.4em] text-muted-gray">
                  {founder.title}
                </p>
                <h2 className="text-2xl font-semibold">{founder.name}</h2>
                <p className="text-sm leading-relaxed text-ink/80 sm:text-base">
                  {founder.description}
                </p>
                <a
                  href={`mailto:${founder.email}`}
                  className="inline-flex items-center justify-center border border-ink/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                >
                  Contact
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
