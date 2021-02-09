import React from "react"
import "normalize.css"
import styles from "./layout.module.scss"
import Navbar from "./navbar.zh"
import Footer from "./footer.zh"

export default function Layout({ children }) {

  console.log("%c哈囉! 你怎麼會在這?\n既然都見面了, 發封訊息給我, 我們來聊聊天吧!", "font: 3em sans-serif; -webkit-text-stroke: 1px black; color: white; text-shadow: 3px 3px 0 #999, -1px -1px 0 #999, 1px -1px 0 #999, -1px 1px 0 #999, 1px 1px 0 #999;");

  return (
    <div className={styles.zh}>

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
