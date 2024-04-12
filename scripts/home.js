import { getTrending, getMovies, getUpcoming } from './module/utils.js'
import createBanner from './module/banner.js'
import { pushMovie } from './module/swiper.js'

const titles = {
  0: 'Top Rated Movies',
  1: 'Popular Movies',
  2: 'Top Rated Tv Shows',
  3: 'Popular Tv Shows',
  4: 'Upcoming',
  5: 'Trending Now'
}

getTrending('all').then(({ results }) => pushMovie(results, 5, null, titles[5]))

getMovies().then(res => {
  const [movies, tv] = res
  const all = [...movies, ...tv]

  console.log(movies, tv)

  createBanner({ ...movies[0].results[5], type: 'movie' })

  all.forEach(({ results }, i) => {
    const type = i < 2 ? types[0] : types[1]
    pushMovie(results, i, type, titles[i])
  })
})

getUpcoming().then(({ results }) => pushMovie(results, 4, 'movie', titles[4]))
