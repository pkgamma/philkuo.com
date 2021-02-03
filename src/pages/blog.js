import React from "react"
import Layout from "../components/layout"
import styles from "./shared.grid.module.scss"
import BG1 from "./work/img/A01.jpg"
import BG2 from "./work/img/A02.jpg"
import BG3 from "./work/img/B01.jpg"
import BG4 from "./work/img/B02.jpg"
import SEO from '../components/seo';
import ItemCard from "../components/item-card"

export default function Blog() {
  return (
    <Layout>
      <SEO title={"Blog - Philip Kuo"} />
      <div className={styles.title_container}>
        <h1>Blog</h1>
      </div>
      <div className={styles.grid_container}>
        <ItemCard link="/blog/hackillinois" image={BG1} title="HackIllinois 2020" description="Making the Largest Hackathon in Midwest Happen"/>
        <ItemCard image={BG1} title="RP Tech Conference 2019" description="Marketing for a National Presence"/>
        <ItemCard image={BG1} title="Interconnect CRM" description="Attempt of Building a Business from Scratch"/>
        <ItemCard image={BG1} title="TEDx" description="Curating an Extraordinary TEDx Event"/>
        <ItemCard image={BG1} title="Menu3" description="Building an Elegant Brand Identity"/>
        <ItemCard image={BG1} title="The Munual" description="The Manual to Model United Nations"/>
      </div>
    </Layout>
  )
}
