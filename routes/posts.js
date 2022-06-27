import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router ()

router.get('/', postsCtrl.index)

router.get('/:id', postsCtrl.show)

router.post('/', isLoggedIn, postsCtrl.create)

router.post('/:id/edit', isLoggedIn, postsCtrl.edit)

router.put('/:id', isLoggedIn, postsCtrl.update)

export {
    router
}