import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

router.get('/', isLoggedIn, profilesCtrl.index)

router.get('/:id', isLoggedIn, profilesCtrl.show)

router.post('/:id/facts', isLoggedIn, profilesCtrl.createFact)

router.post('/addMovie', profilesCtrl.addMovie)

router.delete('/facts/:id', isLoggedIn, profilesCtrl.deleteFact)

export {
  router
}