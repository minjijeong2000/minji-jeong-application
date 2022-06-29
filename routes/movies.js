import { Router } from 'express'
import * as moviesCtrl from '../controllers/movies.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', moviesCtrl.index)

// router.patch(':id/addWatchList', isLoggedIn, moviesCtrl.addWatchList)

router.get('/:id', isLoggedIn, moviesCtrl.show)

export {
  router
}
