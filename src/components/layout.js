import React from "react"
import "normalize.css"
import styles from "./layout.module.scss"
import Navbar from "./navbar"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div className={styles.page_container}>
      <Navbar></Navbar>
      <div className={styles.main}>
        {children}
      </div>
      <Footer></Footer>
    </div>
  )
}
