import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.scss"

export default function Navbar() {

  return (
    <div className={styles.sticky_navbar}>
      <div className={styles.navbar}>
        <div className={styles.left}>
          <ul>
            <li className={styles.name}>郭力銘</li>
            <li><Link to="/zh" activeClassName={styles.current}>關於</Link></li>
            <li><Link to="/zh/work" activeClassName={styles.current}>作品</Link></li>
            <li><Link to="/zh/blog" activeClassName={styles.current}>經驗</Link></li>
          </ul>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.right}>
          <ul>
            <li><Link to="/" activeClassName={styles.current}>EN</Link></li>
            <li><Link to="/zh" activeClassName={styles.current}>中</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}