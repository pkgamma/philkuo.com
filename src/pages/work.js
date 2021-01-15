import React from "react"
import Layout from "../components/layout"
import styles from "./work.module.scss"

export default function Work() {
  return (
    <Layout>

      <h1>Work</h1>

      <div className={styles.container}>
        <div className={styles.item_container}>
          <div className={styles.pic}>
            <img src="https://source.unsplash.com/user/erondu/1600x900" />
          </div>
          <div className={styles.description}>
            This is it!
          </div>
        </div>


        <div className={styles.item_container}>
          <div className={styles.pic}>
            <img src="https://source.unsplash.com/user/erondu/1600x900" />
          </div>
          <div className={styles.description}>
            This is it!
          </div>
        </div>


        <div className={styles.item_container}>
          <div className={styles.pic}>
            <img src="https://source.unsplash.com/user/erondu/1600x900" />
          </div>
          <div className={styles.description}>
            This is it!
          </div>
        </div>

      </div>

      <p>Philip Kuo is a software engineer with a passion for human-centered design. He designs and develops intuitive products with great attention to detail.</p>
      <p>He currently works at Moshi, and previously at <a href="https://www.builtinchicago.org/company/cat-digital">Caterpillar</a> and DeepWalk Research. He founded PKGamma Digital Agency, organized a TEDx, and helped put together HackIllinois and the RP Tech Conference.</p>
      <p>In the meantime, he's pursuing a Computer Science degree from the University of Illinois at Urbana Champaign. At school, he’s developing at Hack4Impact to empower non-profits that are doing meaningful work to communities.</p>

    </Layout>
  )
}
