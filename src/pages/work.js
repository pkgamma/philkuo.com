import React from "react"
import Layout from "../components/layout"
import styles from "./work.module.scss"
import { Link } from "gatsby"
import BG1 from "./work/img/A01.jpg"
import BG2 from "./work/img/A02.jpg"
import BG3 from "./work/img/B01.jpg"
import BG4 from "./work/img/B02.jpg"
import SEO from '../components/seo';

export default function Work() {
  return (
    <Layout>

      <SEO title={"Work - Philip Kuo"} />

      <div className={styles.title_container}>
        <h1>Work</h1>
      </div>

      <div className={styles.grid_container}>

        <Link to="/work/one" className={styles.item}>
          <img src={BG1}></img>
          <p className={styles.title}>Caterpillar Inc.</p>
          <p className={styles.description}>Robust Fleet Management Solutions</p>
        </Link>

        <Link to="/work/one" className={styles.item}>
          <img src={BG2}></img>
          <p className={styles.title}>SafeMaps</p>
          <p className={styles.description}>Campus Navigation App that Put Safety First</p>
        </Link>

        <Link to="/work/one" className={styles.item}>
          <img src={BG3}></img>
          <p className={styles.title}>PKGamma Digital Agency</p>
          <p className={styles.description}>Digital Solutions for Small Businesses</p>
        </Link>

        <Link to="/work/one" className={styles.item}>
          <img src={BG4}></img>
          <p className={styles.title}>The Hoverboard Guys</p>
          <p className={styles.description}>Successful Premium Hoverboards Startup</p>
        </Link>

      </div>


    </Layout>
  )
}
