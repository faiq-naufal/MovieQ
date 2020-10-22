import React from "react"
import useSWR from "swr"
import Seo from "../components/commons/Seo"
import MovieLayout from "../components/pages/movie"

export default function Movie({ id }) {
  const API_KEY = process.env.GATSBY_OMDB_API_KEY
  const endPoint = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
  const fetcher = url =>
    fetch(url)
      .then(response => response.json())
      .catch(() => {
        throw new Error("Failed to receive data")
      })
  const { data, error } = useSWR(endPoint, fetcher)

  const title = data ? `${data.Title || `Detail of Movie`} - MovieQ` : null
  const description = data
    ? `${data.Title || `Detail of Movie`} - MovieQ`
    : null

  return (
    <>
      {data && !error ? <Seo title={title} description={description} /> : null}
      <MovieLayout isLoading={!data} movie={data ? data : null} />
    </>
  )
}
