import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import useSiteMetaData from "../hooks/useSiteMetaData"

export default function SEO({
  title,
  description,
  image,
  currentUrl,
  author,
  schemaMarkup,
  meta,
  children,
}) {
  const siteMetadata = useSiteMetaData()

  const metaTitle = title || siteMetadata.title
  const metaDescription = description || siteMetadata.description
  const metaUrl = currentUrl || siteMetadata.siteUrl
  const metaAuthor = author || siteMetadata.author
  const metaImage = image || siteMetadata.logo

  return (
    <Helmet
      htmlAttributes={{
        lang: siteMetadata.lang,
      }}
      title={metaTitle}
      meta={[
        {
          name: `title`,
          content: metaTitle,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: metaAuthor,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `og:site_name`,
          content: siteMetadata.siteName,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
        {
          name: `twitter:url`,
          content: metaUrl,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
      ].concat(meta)}
    >
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
      {children}
    </Helmet>
  )
}

SEO.defaultProps = {
  title: "",
  description: "",
  image: "",
  siteUrl: "",
  author: "",
  schemaMarkup: {},
  meta: [],
}

SEO.propTypes = {
  meta: PropTypes.arrayOf(PropTypes.object),
}
