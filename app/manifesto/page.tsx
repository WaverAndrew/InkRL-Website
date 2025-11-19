"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import Header from "@/components/Header";

type ParagraphContent = {
  id: string;
  content: ReactNode;
};

const manifestoSections: {
  label: string;
  paragraphs: ParagraphContent[];
}[] = [
  {
    label: "The Vision",
    paragraphs: [
      {
        id: "vision-1",
        content: (
          <>
            We imagine a world where every single word, every line of copy,
            every subject line, every CTA{" "}
            <span className="font-semibold">
              learns from how people react to it.
            </span>
          </>
        ),
      },
      {
        id: "vision-2",
        content:
          "A world where language isn’t static, but alive. Where algorithms don’t just generate text, but understand and improve it, continuously, autonomously, and at scale.",
      },
      {
        id: "vision-3",
        content:
          "Our goal is to build the algorithm that personalizes communication for every individual. An algorithm that learns what resonates with each reader, and optimizes towards one universal metric: engagement.",
      },
      {
        id: "vision-4",
        content:
          "We’re starting with email: the most measurable, most iterative marketing channel. But we’re building toward something bigger: a world where every piece of text is optimized for its goal.",
      },
    ],
  },
  {
    label: "The Belief",
    paragraphs: [
      { id: "belief-1", content: "We believe creativity can be explainable." },
      {
        id: "belief-2",
        content:
          "We believe preferences can be embedded, tracked, and learned.",
      },
      {
        id: "belief-3",
        content:
          "We believe reinforcement learning, the same feedback loop that mastered games, can master persuasion.",
      },
      {
        id: "belief-4",
        content:
          "TikTok and Meta already do this for feeds and reccomandation. We’re doing it for language.",
      },
    ],
  },
  {
    label: "The Mission",
    paragraphs: [
      {
        id: "mission-1",
        content:
          "inkRL is building a proprietary reinforcement learning system that autonomously improves marketing copy to maximize user engagement.",
      },
      {
        id: "mission-2",
        content:
          "Every campaign becomes a feedback loop. Every click teaches the model something new. Every word is an experiment.",
      },
      {
        id: "mission-3",
        content:
          "We’re creating a personalized optimization layer for the internet where text adapts to humans, not the other way around.",
      },
    ],
  },
];

const prefaceParagraphs: ParagraphContent[] = [
  {
    id: "preface-1",
    content: (
      <>
        From marketing emails to product descriptions, from ads on your feed to
        billboards on the street, from political campaigns to product launches –{" "}
        <span className="italic font-bold text-lg sm:text-xl">
          everything runs on text.
        </span>
      </>
    ),
  },
  {
    id: "preface-2",
    content:
      "Text is how ideas travel, how we sell, how we persuade, how we move the world.",
  },
  {
    id: "preface-3",
    content:
      "Every word you read has been crafted by a human, for a human to make you think, feel, or act.",
  },
  {
    id: "preface-4",
    content: "But it’s static. It’s generic. It’s one-size-fits-all.",
  },
  {
    id: "preface-5",
    content: (
      <em className="italic text-ink/80">
        We think that’s insane. And we’re here to change it.
      </em>
    ),
  },
  {
    id: "preface-6",
    content: (
      <span className="italic text-xl">
        We want text to adapt, to specialize, to learn, to understand you.
      </span>
    ),
  },
  {
    id: "preface-7",
    content: (
      <span className="italic text-xl">
        To evolve until every word is written not just for a crowd, but for a
        person.
      </span>
    ),
  },
  {
    id: "preface-8",
    content:
      "That’s what inkRL is building: a system that transforms language from something designed by humans for humans into something optimized with them: a world where words don’t just speak, but learn.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(17,17,17,0.25),_transparent_60%)]" />
        <motion.div
          aria-hidden
          className="absolute -left-1/3 top-1/4 h-64 w-2/3 rounded-full bg-accent-yellow/40 blur-3xl md:-left-1/6"
          initial={{ opacity: 0.4 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.9, 1.05, 0.95],
            rotate: [0, 8, -8],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute right-[-10%] top-1/3 h-72 w-72 rounded-full bg-accent-blue/30 blur-3xl"
          initial={{ opacity: 0.2 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [0, -30, 10],
            scale: [0.8, 1, 0.9],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-paper to-transparent" />
      </div>

      <Header />
      <div className="relative z-10 flex min-h-screen flex-col px-6 pb-10 pt-32 sm:px-10 lg:px-24">
        <motion.header
          className="flex items-center justify-between text-sm uppercase tracking-[0.2em]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="font-mono text-xs sm:text-sm">inkRL</span>
          <span className="text-muted-gray">Where copy learns.</span>
        </motion.header>

        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-ink/40 to-transparent" />

        <motion.p
          className="mb-6 font-mono text-xs uppercase tracking-[0.6em] text-muted-gray"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          InkRL Manifesto
        </motion.p>

        <section className="space-y-6 text-lg leading-relaxed sm:text-xl md:text-2xl">
          <motion.h1
            className="font-mono text-xs uppercase tracking-[0.5em] text-muted-gray"
            {...fadeUp.animate(0.1)}
            initial={fadeUp.initial}
          >
            manifesto
          </motion.h1>
          <motion.p
            className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl"
            {...fadeUp.animate(0.2)}
            initial={fadeUp.initial}
          >
            Where copy learns.
          </motion.p>
          {prefaceParagraphs.map((paragraph, idx) => (
            <motion.p
              key={paragraph.id}
              className="max-w-4xl text-base text-muted-gray sm:text-lg"
              initial={fadeUp.initial}
              animate={fadeUp.animate(0.25 + idx * 0.05)}
            >
              {paragraph.content}
            </motion.p>
          ))}
          <motion.p
            className="max-w-4xl text-base text-muted-gray sm:text-lg"
            {...fadeUp.animate(0.25 + prefaceParagraphs.length * 0.05)}
            initial={fadeUp.initial}
          >
            Copy that adapts itself in real time. Feedback loops stitched into
            every sentence. Reinforcement learning built for language that
            listens.
          </motion.p>
        </section>

        <motion.div
          className="my-12 h-px w-full bg-gradient-to-r from-transparent via-ink/40 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />

        <section className="mb-24 flex flex-col gap-16">
          {manifestoSections.map((section, idx) => (
            <motion.article
              key={section.label}
              className="space-y-4 border-l border-ink/40 pl-6"
              initial={fadeUp.initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-gray">
                {section.label}
              </p>
              <div className="space-y-4 text-lg leading-relaxed text-ink/90 sm:text-xl">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.id}>{paragraph.content}</p>
                ))}
              </div>
            </motion.article>
          ))}
        </section>

        <motion.section
          className="mt-auto space-y-6 border-t border-dashed border-ink/30 pt-12"
          initial={fadeUp.initial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-muted-gray">
            inkrl
          </p>
          <p className="text-3xl font-medium leading-snug sm:text-4xl">
            Reinforcement learning for language that learns you back.
          </p>
        </motion.section>
      </div>
    </main>
  );
}
