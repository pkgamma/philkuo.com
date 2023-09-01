import React from "react"
import Layout from "../components/layout.en"
import SocialBtns from "../components/social-btns.en"
import styles from "./index.module.scss"
import useDarkMode from "use-dark-mode"
import SEO from "../components/seo"

export default function Home() {
  const darkMode = useDarkMode(false)

  return (
    <Layout>
      <SEO />

      <div className={styles.pic}>
        <img
          onClick={darkMode.toggle}
          alt="Philip Kuo"
          src={"/philip_kuo.jpg"}
        />
      </div>

      <div className={styles.title_container}>
        <h1>
          <span>I Craft Stunning&nbsp;</span>
          <span>Digital Experiences.</span>
        </h1>
      </div>

      <p>
        Hi, my name is Philip. I work as a software engineer at Caterpillar in
        Chicago. I enjoy crafting products with great attention to detail and
        delving deeply into user interface design, considering how it looks,
        feels, and behaves.
      </p>

      <p>
        I hold a Computer Science degree from the University of Illinois at
        Urbana-Champaign and was an active participant in Hack4Impact, where I
        empowered non-profits through technology. Furthermore, I organized a
        TEDx event and played a key role in HackIllinois and the RP Tech
        Conference.
      </p>

      <SocialBtns />
    </Layout>
  )
}
