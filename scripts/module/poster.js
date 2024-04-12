import { getTrending, getGenres, posterAPI } from './module/utils.js'
import createBanner from './module/banner.js'
import { pushMovie } from './module/swiper.js'

// Assuming 'types' and 'id' are defined elsewhere

// Invoking getTrending to fetch trending data and then creating a banner and pushing movies
getTrending(types[0]).then(({ results }) => {
    createBanner(results[id])
    pushMovie(results, 0, null, title)
})

const getPosterWithGenres = type => {
    // Fetching genres for a specific type and then fetching posters for each genre
    getGenres(type).then(({ genres }) =>
        Promise.all(
            genres.slice(0, 6).map(genre => {
                fetch(posterAPI(type, genre.id))
                    .then(response => response.ok && response.json())
                    .then(({ results }) => {
                        if (!results) return

                        // Pushing movies for each genre
                        pushMovie(results, genre.id, type, genre.name)
                    })
            })
        )
    )
}

// Assuming 'types' and 'id' are defined elsewhere
getPosterWithGenres(types[0], id)