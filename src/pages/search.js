import React from "react"
import useSWR from "swr"
import Seo from "../components/commons/Seo"
import SearchLayout from "../components/pages/search"

export default function Search({ query }) {
  const API_KEY = process.env.GATSBY_OMDB_API_KEY
  const endPoint = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
  const fetcher = url =>
    fetch(url)
      .then(response => response.json())
      .catch(() => {
        throw new Error("Failed to receive data")
      })
  const { data, error } = useSWR(endPoint, fetcher)

  const title = `Search results for ${query} - MovieQ`
  const description = `Search results for ${query} - MovieQ`
  return (
    <>
      <Seo title={title} description={description} />
      <SearchLayout
        query={query}
        isLoading={!data}
        isError={error}
        movies={data ? data.Search : null}
      />
    </>
  )
}
