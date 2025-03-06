import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css"; // Importing modular CSS file

function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Find Your Perfect Career Path with AI</h1>
          <p className={styles.heroDescription}>
            Our AI-driven platform helps you discover your ideal career based on your skills, interests, and goals.
          </p>
          <Link to="/signup" className={styles.ctaButton}>Get Started</Link>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Features</h2>
          <div className={styles.feature}>
            <h3>Personalized Career Guidance</h3>
            <p>Get AI-based career recommendations tailored to your strengths and aspirations.</p>
          </div>
          <div className={styles.feature}>
            <h3>Skill Gap Analysis</h3>
            <p>Identify areas where you need improvement and receive actionable advice to boost your career potential.</p>
          </div>
          <div className={styles.feature}>
            <h3>Real-Time Industry Trends</h3>
            <p>Stay updated with the latest trends and job opportunities in your desired field.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="signup" className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to unlock your future?</h2>
          <p className={styles.ctaDescription}>
            Sign up now and let AI guide your career journey!
          </p>
          <Link to="/signup" className={styles.ctaButton}>Sign Up Now</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

