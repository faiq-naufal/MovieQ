import React from "react"
import ContentLoader from "react-content-loader"
import {
  WrapperAll,
  Gradient,
  Container,
  SearchResult,
  ListMovie,
  MovieCard,
  MovieLabel,
  WrapperLink,
} from "./styled"

import Header from "../../commons/Header"
import Footer from "../../commons/Footer"
import Sidebar from "../../commons/Sidebar"
import PosterMovie from "../../commons/PosterMovie"
import PosterMovieLoader from "../../commons/PosterMovieLoader"
import useToggle from "../../hooks/useToggle"

export default function Search({ query, isLoading, isError, movies }) {
  const [isSidebarOpen, toggleSidebar] = useToggle(false)
  return (
    <WrapperAll>
      <Gradient>
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </Gradient>
      <Container>
        <SearchResult>
          <h1>
            Search results for <strong>"{query}"</strong>
          </h1>

          {isLoading ? (
            <ListMovie>
              {Array.from(Array(10), (item, index) => (
                <MovieCard key={index}>
                  <PosterMovieLoader />
                  <MovieLabel>
                    <ContentLoader
                      style={{ width: "100%", height: "60px" }}
                      viewBox="0 0 100 60"
                    >
                      <rect
                        x="0"
                        y="10"
                        rx="3"
                        ry="3"
                        width="100%"
                        height="15px"
                      />
                      <rect
                        x="0"
                        y="35"
                        rx="3"
                        ry="3"
                        width="35%"
                        height="15px"
                      />
                    </ContentLoader>
                  </MovieLabel>
                </MovieCard>
              ))}
            </ListMovie>
          ) : movies ? (
            <ListMovie>
              {movies.map(movie => (
                <MovieCard key={movie.imdbID}>
                  <WrapperLink
                    // to={`/movie/${movie.Title.toLowerCase()
                    //   .replace(/ /g, "-")
                    //   .replace(/[-]+/g, "-")
                    //   .replace(/[^\w-]+/g, "")}`}
                    // state={{ movieId: movie.imdbID }}
                    to={`/movie/${movie.imdbID}`}
                  >
                    <PosterMovie poster={movie.Poster} title={movie.Title} />
                    <MovieLabel>{movie.Title}</MovieLabel>
                  </WrapperLink>
                </MovieCard>
              ))}
            </ListMovie>
          ) : (
            <div>No Movies Found</div>
          )}
        </SearchResult>
      </Container>
      <Footer />
    </WrapperAll>
  )
}
