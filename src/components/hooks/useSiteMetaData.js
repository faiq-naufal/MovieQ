import { useStaticQuery, graphql } from "gatsby"

export default function useSiteMetaData() {
  const { site } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            description
            logo
            author
            siteUrl
            siteName
            lang
          }
        }
      }
    `
  )

  return { ...site.siteMetadata }
}
