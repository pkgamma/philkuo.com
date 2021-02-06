import React from "react"
import "normalize.css"
import styles from "./layout.module.scss"
import styles_zh from "./layout.zh.module.scss"
import Navbar from "./navbar.zh"
import Footer from "./footer.zh"

export default function Layout({ children }) {

  console.log("%cHey, you like coding too?\nLet's work together! :)", "font: 3em sans-serif; -webkit-text-stroke: 1px black; color: white; text-shadow: 3px 3px 0 #999, -1px -1px 0 #999, 1px -1px 0 #999, -1px 1px 0 #999, 1px 1px 0 #999;");

  return (
    <div className={styles_zh.page_container}>

      <div className={styles.page_container}>
        <Navbar />
        <div className={styles.main}>
          {children}
        </div>
        <Footer />
      </div>
      
    </div>
  )
}
