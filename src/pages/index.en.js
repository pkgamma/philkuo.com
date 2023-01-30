import React from "react"
import Layout from "../components/layout.en"
import SocialBtns from "../components/social-btns.en"
import styles from "./index.module.scss"
import useDarkMode from 'use-dark-mode';
import SEO from '../components/seo';

export default function Home() {

  const darkMode = useDarkMode(false);

  return (
    <Layout>

      <SEO />

      <div className={styles.pic}>
        <img onClick={darkMode.toggle} alt="Philip Kuo" src={'/philip_kuo.jpg'} />
      </div>

      <div className={styles.title_container}>
        <h1>
          <span>I Craft Stunning&nbsp;</span>
          <span>Digital Experiences.</span>
        </h1>
      </div>

      <p>Hi, my name is Philip. I am a software engineer with a passion for human-centered design. I design and develop intuitive products with great attention to details. This May, I will graduate from the <a target="_blank" rel="noreferrer" href="https://cs.illinois.edu">University of Illinois</a> at Urbana Champaign with a Bachelor's degree in Computer Science.</p>

      <p>Previously, I worked at <a target="_blank" rel="noreferrer" href="https://www.apple.com">Apple</a>, <a target="_blank" rel="noreferrer" href="https://www.caterpillar.com/en/company.html">Caterpillar</a>, and <a target="_blank" rel="noreferrer" href="https://www.deepwalkresearch.com/">DeepWalk Research</a>. At school, I develop at <a target="_blank" rel="noreferrer" href="https://uiuc.hack4impact.org/">Hack4Impact</a> to empower non-profits that are doing meaningful work to communities. I also founded <a target="_blank" rel="noreferrer" href="http://pkgamma.com">PKGamma Digital Agency</a>, organized a <a target="_blank" rel="noreferrer" href="https://www.ted.com/">TEDx</a>, and helped put together <a target="_blank" rel="noreferrer" href="https://hackillinois.org">HackIllinois</a> and the <a target="_blank" rel="noreferrer" href="https://reflectionsprojections.org">RP Tech Conference</a>.</p>

      <SocialBtns />

    </Layout>
  )
}
