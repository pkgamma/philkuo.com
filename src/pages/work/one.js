import React from "react"
import Layout from "../../components/layout"
import styles from "./work_post.module.scss"
import { Link } from "gatsby"
import BG1 from "../../img/work/1.jpg"

export default function One() {
  return (
    <Layout>

      <div className={styles.title_container}>
        <div className={styles.back}>Back</div>
        <h1>The Munual Case Study</h1>
      </div>

      <article>
        <img src={BG1}></img>

        <h2>How we designed it</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vestibulum odio, ac bibendum justo sodales at. Pellentesque pretium sapien ornare gravida sodales. Cras id ante eget arcu euismod blandit. Etiam feugiat, nunc molestie commodo molestie, elit nulla mollis nisi, hendrerit facilisis dolor est vitae nunc. Pellentesque sodales at massa non facilisis. Mauris facilisis justo lacus, at dictum turpis porta eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porta eleifend mi at sollicitudin.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vestibulum odio, ac bibendum justo sodales at. Pellentesque pretium sapien ornare gravida sodales. Cras id ante eget arcu euismod blandit. Etiam feugiat, nunc molestie commodo molestie, elit nulla mollis nisi, hendrerit facilisis dolor est vitae nunc. Pellentesque sodales at massa non facilisis. Mauris facilisis justo lacus, at dictum turpis porta eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porta eleifend mi at sollicitudin.</p>

        <img src={BG1}></img>

        <h2>How we designed it again</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vestibulum odio, ac bibendum justo sodales at. Pellentesque pretium sapien ornare gravida sodales. Cras id ante eget arcu euismod blandit. Etiam feugiat, nunc molestie commodo molestie, elit nulla mollis nisi, hendrerit facilisis dolor est vitae nunc. Pellentesque sodales at massa non facilisis. Mauris facilisis justo lacus, at dictum turpis porta eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porta eleifend mi at sollicitudin.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vestibulum odio, ac bibendum justo sodales at. Pellentesque pretium sapien ornare gravida sodales. Cras id ante eget arcu euismod blandit. Etiam feugiat, nunc molestie commodo molestie, elit nulla mollis nisi, hendrerit facilisis dolor est vitae nunc. Pellentesque sodales at massa non facilisis. Mauris facilisis justo lacus, at dictum turpis porta eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porta eleifend mi at sollicitudin.</p>

      </article>
      
    </Layout>
  )
}
