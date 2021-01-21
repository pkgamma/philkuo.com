import React from "react"
import Layout from "../components/layout"
import SocialBtns from "../components/social-btns"
import styles from "./index.module.scss"
import PhilipKuoPic from "../img/philip_kuo.jpg"
import useDarkMode from 'use-dark-mode';

export default function Home() {

  const darkMode = useDarkMode(false);

  return (
    <Layout>

      <div className={styles.pic}>
        <img onClick={darkMode.toggle} alt="Philip Kuo" src={PhilipKuoPic} />
      </div>

      <div className={styles.title_container}>
        <h1>
          <span>I Craft Stunning&nbsp;</span>
          <span>Digital Experiences.</span>
        </h1>
      </div>

      <p>Philip Kuo is a software engineer with a passion for human-centered design. He designs and develops intuitive products with great attention to detail.</p>
      <p>He currently works at <a target="_blank" href="https://www.moshi.com/">Moshi</a>, and previously at <a target="_blank" href="https://www.builtinchicago.org/company/cat-digital">Caterpillar</a> and <a target="_blank" href="https://www.deepwalkresearch.com/">DeepWalk Research</a>. He founded <a target="_blank" href="http://pkgamma.com">PKGamma Digital Agency</a>, organized a <a target="_blank" href="https://www.ted.com/">TEDx</a>, and helped put together <a target="_blank" href="https://hackillinois.org">HackIllinois</a> and the <a target="_blank" href="https://reflectionsprojections.org">RP Tech Conference</a>.</p>
      <p>In the meantime, he's pursuing a Computer Science degree from the University of Illinois at Urbana Champaign. At school, he’s developing at <a target="_blank" href="https://uiuc.hack4impact.org/">Hack4Impact</a> to empower non-profits that are doing meaningful work to communities.</p>

      <SocialBtns />

    </Layout>
  )
}
