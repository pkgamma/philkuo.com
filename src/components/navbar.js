import React from "react"
import styles from "./navbar.module.scss"

export default function Navbar() {
  return (
    <div className={styles.sticky_navbar}>
      <div className={styles.navbar}>
        <div className={styles.left}>
          <ul>
            <li className={styles.name}>Philip Kuo</li>
            <li><a className={styles.current} href="">About</a></li>
            <li><a href="">Work</a></li>
          </ul>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.right}>
          <ul>
            <li><a className={styles.current} href="">EN</a></li>
            <li><a href="">中</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}