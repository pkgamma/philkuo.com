import React from "react"
import Layout from "../../components/layout.zh"
import SEO from "../../components/seo"
import BG1 from "./img/A01.jpg"
import Title from "../../components/title.zh"

export default function One() {
  return (
    <Layout>

      <SEO title={"SafeMaps - Philip Kuo"} article={true}/>
      <Title title="建置 SafeMaps" back_btn={true} />

      <article>
        <img src={BG1}></img>

        <h2>Our Story</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vestibulum odio, ac bibendum justo sodales at. Pellentesque pretium sapien ornare gravida sodales. Cras id ante eget arcu euismod blandit. Etiam feugiat, nunc molestie commodo molestie, elit nulla mollis nisi, hendrerit facilisis dolor est vitae nunc. Pellentesque sodales at massa non facilisis. Mauris facilisis justo lacus, at dictum turpis porta eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porta eleifend mi at sollicitudin.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vestibulum odio, ac bibendum justo sodales at. Pellentesque pretium sapien ornare gravida sodales. Cras id ante eget arcu euismod blandit. Etiam feugiat, nunc molestie commodo molestie, elit nulla mollis nisi, hendrerit facilisis dolor est vitae nunc. Pellentesque sodales at massa non facilisis. Mauris facilisis justo lacus, at dictum turpis porta eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porta eleifend mi at sollicitudin.</p>

        <img src={BG1}></img>

        <h2>How it all started</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vestibulum odio, ac bibendum justo sodales at. Pellentesque pretium sapien ornare gravida sodales. Cras id ante eget arcu euismod blandit. Etiam feugiat, nunc molestie commodo molestie, elit nulla mollis nisi, hendrerit facilisis dolor est vitae nunc. Pellentesque sodales at massa non facilisis. Mauris facilisis justo lacus, at dictum turpis porta eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porta eleifend mi at sollicitudin.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vestibulum odio, ac bibendum justo sodales at. Pellentesque pretium sapien ornare gravida sodales. Cras id ante eget arcu euismod blandit. Etiam feugiat, nunc molestie commodo molestie, elit nulla mollis nisi, hendrerit facilisis dolor est vitae nunc. Pellentesque sodales at massa non facilisis. Mauris facilisis justo lacus, at dictum turpis porta eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porta eleifend mi at sollicitudin.</p>

      </article>

    </Layout>
  )
}
