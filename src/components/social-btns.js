import React from "react"
import styles from "./social-btns.module.scss"
import { faGithub, faLinkedin, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { faFile, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialBtns() {
  return (
    <div className={styles.social_section}>
      <ul>
        <li><a className={styles.resume} href="http://philkuo.com/resume"><FontAwesomeIcon icon={faFile} className={styles.icon} />Resume</a></li>
        <li><a href="mailto:pk@philkuo.com"><FontAwesomeIcon icon={faEnvelope} className={styles.icon} />Email</a></li>
        <li><a href="https://linkedin.com/in/pkgamma/"><FontAwesomeIcon icon={faLinkedin} className={styles.icon} />LinkedIn</a></li>
        <li><a href="https://github.com/pkgamma"><FontAwesomeIcon icon={faGithub} className={styles.icon} />Github</a></li>
        <li><a href="https://medium.com/@pkgamma"><FontAwesomeIcon icon={faMediumM} className={styles.icon} />Medium</a></li>
      </ul>
    </div>
  )
}