import { Link } from "gatsby"
import React from "react"
import styles from "./footer.module.scss"

export default function Footer() {
  return (
    <div className={styles.sticky_footer}>
      <div className={styles.footer}>
        <p>
          <span>© 2021 Philip Kuo</span>
          <span>
            <span><a target="_blank" rel="noreferrer" href="http://archive.philkuo.com">Project Archive</a></span>
            <span><Link to="/privacy">Privacy</Link></span>
          </span>
        </p>
      </div>
    </div>
  )
}