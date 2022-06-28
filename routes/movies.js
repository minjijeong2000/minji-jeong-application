import { Router } from 'express'
import * as moviesCtrl from '../controllers/movies.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', moviesCtrl.index)

export {
  router
}
