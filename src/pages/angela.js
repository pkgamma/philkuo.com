import React from "react"
import Layout from "../components/layout.en"
import Title from "../components/title.en"
import SEO from '../components/seo';

export default function Angela() {
  return (
    <Layout>
      <SEO noindex title={"Angela's Secret Page"} />
      <Title title="Angela's Little Secret Page"/>
      <p>This is a little secret page on my website created only for my dearest Angela Chao! I love you, my dearest!</p>
    </Layout>
  )
}
