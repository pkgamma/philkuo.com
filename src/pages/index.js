import React from "react"
import Layout from "../components/layout"
import styles from "./index.module.scss"
import PhilipKuoPic from "../img/philip_kuo.jpg"
import { faGithub, faLinkedin, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { faFile, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <Layout>

      <div className={styles.container}>

        <div className={styles.pic}>
          <img alt="Philip Kuo" src={PhilipKuoPic} />
        </div>

        <h1>
          <span>I Craft Stunning&nbsp;</span>
          <span>Digital Experiences.</span>
        </h1>

        <p>Philip Kuo is a software engineer with a passion for human-centered design. He designs and develops intuitive products with great attention to detail.</p>
        <p>He currently works at Moshi, and previously at <a href="https://www.builtinchicago.org/company/cat-digital">Caterpillar</a> and DeepWalk Research. He founded PKGamma Digital Agency, organized a TEDx, and helped put together HackIllinois and the RP Tech Conference.</p>
        <p>In the meantime, he's pursuing a Computer Science degree from the University of Illinois at Urbana Champaign. At school, he’s developing at Hack4Impact to empower non-profits that are doing meaningful work to communities.</p>

        <div className={styles.social_section}>
          <ul>
            <li><a className={styles.resume} href="http://philkuo.com/resume"><FontAwesomeIcon icon={faFile} className={styles.icon} />Resume</a></li>
            <li><a href="mailto:pk@philkuo.com"><FontAwesomeIcon icon={faEnvelope} className={styles.icon} />Email</a></li>
            <li><a href="https://linkedin.com/in/pkgamma/"><FontAwesomeIcon icon={faLinkedin} className={styles.icon} />LinkedIn</a></li>
            <li><a href="https://github.com/pkgamma"><FontAwesomeIcon icon={faGithub} className={styles.icon} />Github</a></li>
            <li><a href="https://medium.com/@pkgamma"><FontAwesomeIcon icon={faMediumM} className={styles.icon} />Medium</a></li>
          </ul>
        </div>

      </div>



    </Layout>
  )
}
