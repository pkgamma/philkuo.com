import React from "react"

import Layout from "../components/layout"

import styles from "./index.module.scss"

import { faGithub, faLinkedin, faMedium, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { faFile, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <Layout>

      <div className={styles.container}>

        <div className={styles.pic}>
          <img alt="Philip Kuo" src="https://d33wubrfki0l68.cloudfront.net/f889430202cebb38797416bf08da875a98ff4585/a607f/img/philip_kuo.jpg" />
        </div>

        <h1>I Craft Stunning Digital Experiences.</h1>

        <p>Philip Kuo is a software engineer with a passion for human-centered design. He designs and develops intuitive products with great attention to detail.</p>

        <p>He currently works at Moshi, and previously at Caterpillar and DeepWalk Research. He founded PKGamma Digital Agency, organized a TEDx, and helped put together HackIllinois and the RP Tech Conference.</p>

        <p>In the meantime, he's pursuing a Computer Science degree from the University of Illinois at Urbana Champaign. At school, he’s developing at Hack4Impact to empower non-profits that are doing meaningful work to communities.</p>

      </div>



      <div className={styles.social_section}>

        <ul>
          <li><a href="http://www.google.com"><FontAwesomeIcon icon={faFile} className={styles.icon} />Resume</a></li>
          <li><a href="http://www.google.com"><FontAwesomeIcon icon={faEnvelope} className={styles.icon} />Email</a></li>
          <li><a href="http://www.google.com"><FontAwesomeIcon icon={faLinkedin} className={styles.icon} />LinkedIn</a></li>
          <li><a href="http://www.google.com"><FontAwesomeIcon icon={faGithub} className={styles.icon} />Github</a></li>
          <li><a href="http://www.google.com"><FontAwesomeIcon icon={faMediumM} className={styles.icon} />Medium</a></li>
        </ul>

      </div>






      {/* <div className={styles.social_section}>

        <div className={styles.btn}>
          <a href="http://www.google.com"><FontAwesomeIcon icon={faFile} className={styles.icon} />Resume</a>
        </div>
        <div className={styles.btn}>
          <a href="http://www.google.com"><FontAwesomeIcon icon={faEnvelope} className={styles.icon} />Email</a>
        </div>
        <div className={styles.btn}>
          <a href="http://www.google.com"><FontAwesomeIcon icon={faLinkedin} className={styles.icon} />LinkedIn</a>
        </div>
        <div className={styles.btn}>
          <a href="http://www.google.com"><FontAwesomeIcon icon={faGithub} className={styles.icon} />Github</a>
        </div>
        <div className={styles.btn}>
          <a href="http://www.google.com"><FontAwesomeIcon icon={faMediumM} className={styles.icon} />Medium</a>
        </div>

      </div> */}

    </Layout>
  )
}
