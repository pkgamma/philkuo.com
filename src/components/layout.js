import React from "react"
import styles from "./layout.module.scss"
import "normalize.css"

export default function Layout({ children }) {
  return (
    <div>
      <div className={styles.page_container}>

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

        <div className={styles.sticky_footer}>
          <div className={styles.footer}>
            <p>
              <span>© 2021 Philip Kuo</span>
              <span><a href="http://archive.philkuo.com">Project Archive</a></span>
              <span><a href="http://archive.philkuo.com">Privacy</a></span>
              </p>
          </div>
        </div>

      </div>
    </div>
  )
}
