import React from "react"
import Layout from "../components/layout.en"
import Title from "../components/title.en"
import SEO from '../components/seo';

export default function Angela() {
  return (
    <Layout>
      <SEO title={"Angela's Page"} />
      <Title title="Angela Only"/>
      <p>This page is for Angela Only and no one else.</p>
    </Layout>
  )
}
