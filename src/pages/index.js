import React, { useEffect } from "react"
import Helmet from "react-helmet"
import Seo from "../components/commons/Seo"
import HomeLayout from "../components/pages/home"
import useSiteMetaData from "../components/hooks/useSiteMetaData"

const setDocHeight = () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty("--vh", `${vh}px`)
}

export default function Home() {
  useEffect(() => {
    window.addEventListener("resize", setDocHeight, true)
    window.addEventListener("orientationchange", setDocHeight, true)
    setDocHeight()

    return () => {
      window.removeEventListener("resize", setDocHeight, true)
      window.removeEventListener("orientationchange", setDocHeight, true)
    }
  }, [])

  const { siteUrl } = useSiteMetaData()
  const title = `Home - Search Your Movies Here | MovieQ`
  const description = `Home - Search Your Movies Here | MovieQ`

  return (
    <>
      <Helmet>
        <link rel="canonical" href={siteUrl} />
      </Helmet>
      <Seo title={title} description={description} />
      <HomeLayout />
    </>
  )
}
