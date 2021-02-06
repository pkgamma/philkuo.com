import { Link } from "gatsby"
import React from "react"
import styles from "./footer.module.scss"

export default function Footer() {
  return (
    <div className={styles.sticky_footer}>
      <div className={styles.footer}>
        <p>
          <span>© {new Date().getFullYear()} Philip Kuo</span>
          <span><a target="_blank" rel="noreferrer" href="http://archive.philkuo.com">Project Archive</a></span>
          <span><Link to="/privacy">Privacy</Link></span>
          <span className={styles.language}>
            <span><Link to="/zh">中文</Link></span>
          </span>
        </p>
      </div>
    </div>
  )
}