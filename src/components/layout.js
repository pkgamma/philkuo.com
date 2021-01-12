import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "./layout.module.scss"
import "normalize.css"

export default function Layout({ children }) {
  return (
    <div>

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

      <div className={styles.main}>
        {children}
      </div>

    </div>
  )
}
