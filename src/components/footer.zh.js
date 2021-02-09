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
          <span>© {new Date().getFullYear()} 郭力銘</span>
          <span>
            <span><a target="_blank" rel="noreferrer" href="http://archive.philkuo.com">過去專案封存</a></span>
            <span><Link to="/zh/privacy">隱私權政策</Link></span>
            <span className={styles.language}>
              <span><Link to={`${"/."}${pathname.replace("/zh", "")}`}>English</Link></span>
            </span>
          </span>
        </p>
      </div>
    </div>
  )
}