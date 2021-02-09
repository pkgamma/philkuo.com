import { Link } from "gatsby"
import React from "react"
import styles from "./footer.module.scss"
import { useLocation } from "@reach/router"

export default function Footer() {
  const { pathname } = useLocation()

  return (
    <div className={styles.sticky_footer}>
      <div className={styles.footer}>
        <p>
          <span>© {new Date().getFullYear()} Philip Kuo</span>
          <span>
            <span><a target="_blank" rel="noreferrer" href="http://archive.philkuo.com">Project Archive</a></span>
            <span><Link to="/privacy">Privacy</Link></span>
            <span className={styles.language}>
              <span><Link to={`${"/zh"}${pathname}`}>中文</Link></span>
            </span>
          </span>
        </p>
      </div>
    </div>
  )
}