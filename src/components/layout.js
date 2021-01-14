import React from "react"
import "normalize.css"
import styles from "./layout.module.scss"
import Navbar from "./navbar"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div className={styles.page_container}>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.main_container}>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}
