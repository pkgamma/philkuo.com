import { Link } from "gatsby"
import React from "react"
import styles from "./footer.module.scss"

export default function Footer() {
  return (
    <div className={styles.sticky_footer}>
      <div className={styles.footer}>
        <p>
          <span>© 2021 郭力銘</span>
          <span><a target="_blank" rel="noreferrer" href="http://archive.philkuo.com">過去專案封存</a></span>
          <span><Link to="/privacy">隱私權政策</Link></span>
          <span className={styles.language}>
            <span><Link to="/">English</Link></span>
          </span>
        </p>
      </div>
    </div>
  )
}