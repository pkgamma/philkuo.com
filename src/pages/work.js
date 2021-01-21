import React from "react"
import Layout from "../components/layout"
import styles from "./work.module.scss"
import BG1 from "../img/work/1.jpg"
import BG2 from "../img/work/2.jpg"
import BG3 from "../img/work/3.jpg"
import BG4 from "../img/work/4.jpg"

export default function Work() {
  return (
    <Layout>

      <div className={styles.title_container}>
        <h1>Work</h1>
      </div>

      <div className={styles.grid_container}>
        <div className={styles.item_container}>
          <div className={styles.pic} style={{ backgroundImage: "url(" + BG1 + ")" }}>
          </div>
          <div className={styles.description_container}>
            <div className={styles.title}>Item Title One</div>
            <div className={styles.description}>Lorem ipsum dolor sit amet</div>
          </div>
        </div>

        <div className={styles.item_container}>
          <div className={styles.pic} style={{ backgroundImage: "url(" + BG2 + ")" }}>
          </div>
          <div className={styles.description_container}>
            <div className={styles.title}>Item Title Two</div>
            <div className={styles.description}>Lorem ipsum dolor sit amet</div>
          </div>
        </div>

        <div className={styles.item_container}>
          <div className={styles.pic} style={{ backgroundImage: "url(" + BG3 + ")" }}>
          </div>
          <div className={styles.description_container}>
            <div className={styles.title}>Item Title Three</div>
            <div className={styles.description}>Lorem ipsum dolor sit amet</div>
          </div>
        </div>

        <div className={styles.item_container}>
          <div className={styles.pic} style={{ backgroundImage: "url(" + BG4 + ")" }}>
          </div>
          <div className={styles.description_container}>
            <div className={styles.title}>Item Title Four</div>
            <div className={styles.description}>Lorem ipsum dolor sit amet</div>
          </div>
        </div>

      </div>


    </Layout>
  )
}
