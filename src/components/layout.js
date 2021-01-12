import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "./layout.module.scss"
import "normalize.css"

export default function Layout({ children }) {
  return (
    <div>

      <div className={styles.navbar}>

        Content

      </div>

      <div className={styles.main}>
        {children}
      </div>
    </div>
  )
}
