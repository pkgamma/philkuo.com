import React from "react"
import styles from "./social-btns.module.scss"
import { faGithub, faLinkedin, faMediumM, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faFile, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialBtns() {
  return (
    <div className={styles.social_section}>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="http://philkuo.com/resume"><FontAwesomeIcon icon={faFile} className={styles.icon} />履歷</a></li>
        <li><a target="_blank" rel="noreferrer" href="mailto:pk@philkuo.com"><FontAwesomeIcon icon={faEnvelope} className={styles.icon} />電子郵件</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/pkgamma"><FontAwesomeIcon icon={faFacebook} className={styles.icon} />Facebook</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://linkedin.com/in/pkgamma/"><FontAwesomeIcon icon={faLinkedin} className={styles.icon} />LinkedIn</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://github.com/pkgamma"><FontAwesomeIcon icon={faGithub} className={styles.icon} />Github</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://medium.com/@pkgamma"><FontAwesomeIcon icon={faMediumM} className={styles.icon} />Medium</a></li>
      </ul>
    </div>
  )
}