// src/pages/index.tsx

import React, { useCallback } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine, Container } from "tsparticles-engine";

import styles from "./index.module.css";

// ====================
// Hero Section
// ====================
function HeroSection() {
  return (
    <div className={clsx("container", styles.heroContentWrapper)}>
      {/* Text Content */}
      <div className={styles.heroText}>
        <Heading as="h1" className="hero__title primary">
          Build Consistently. Ship Beautifully.
        </Heading>
        <p className="hero__subtitle">
          Shadow UI is a flexible, themeable React Native design system built on
          top of Shopify Restyle. It helps teams create consistent and scalable
          UIs faster.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/getting-started">
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg margin-left--md"
            to="/docs/components/Text"
          >
            Browse Components
          </Link>
        </div>
      </div>

      {/* Image Preview */}
      <div className={styles.heroImages}>
        <img
          src="https://github.com/user-attachments/assets/91179769-5293-4292-a1c0-9a708855fac9"
          alt="Shadow UI preview 1"
          className={styles.heroImage}
        />
        <img
          src="https://github.com/user-attachments/assets/a4efd275-0197-4c2d-bded-dc907f6c956b"
          alt="Shadow UI preview 2"
          className={styles.heroImage}
        />
      </div>
    </div>
  );
}

// ====================
// Particles Background
// ====================
function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#000" },
          links: {
            color: "#000",
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            speed: 1,
          },
          number: { density: { enable: true, area: 10000 }, value: 1000 },
          opacity: { value: 1 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
}

// ====================
// Page Component
// ====================
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} - A React Native UI Kit`}
      description="Shadow UI is a modern, powerful UI component library built on top of Shopify Restyle for building consistent, theme-aware, and responsive designs in React Native."
    >
      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          <HeroSection />
        </div>
        <ParticlesBackground />
      </main>
    </Layout>
  );
}
