import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

// import HomepageFeatures from "@site/src/components/HomepageFeatures"; // Uncomment when needed

import styles from "./index.module.css";

// Hero Section
export function HomepageContent() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className={clsx("container", styles.heroContentWrapper)}>
      {/* LEFT COLUMN (Text) */}
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
          <Link
            className="button button--primary button--lg"
            to="/docs/getting-started"
          >
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

      {/* RIGHT COLUMN (Images) */}
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

// Home Page Layout
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <Layout
      title={`${siteConfig.title} - A React Native UI Kit`}
      description="Shadow UI is a modern, powerful UI component library built on top of Shopify Restyle for building consistent, theme-aware, and responsive designs in React Native."
    >
      <main style={{ position: "relative" }}>
        <div style={{ zIndex: 10, position: "relative", }}>
          <HomepageContent />
        </div>

        {/* Particle Background at Bottom */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "300px", // or whatever height you need at the bottom
            zIndex: 1,
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
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
                color: { value: "#589FEB" },
                links: {
                  color: "#4287E8",
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
                number: { density: { enable: true, area: 2000 }, value: 200 },
                opacity: { value:1 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 5 } },
              },
              detectRetina: true,
            }}
          />
        </div>
      </main>
    </Layout>
  );
}
