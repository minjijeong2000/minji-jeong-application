import { Post } from '../models/post.js'

function index(req, res) {
    Post.find({})
    .then ( posts => {
        res.render('posts/index', {
            posts,
            title: 'Posts'
        })
    })
    .catch (err => {
        console.log(err)
        res.redirect('/posts')
    })
}

function create(req, res) {
    req.body.owner = req.user.profile._id
    Post.create(req.body)
    .then(post => {
        res.redirect('/posts')
    })
    .catch (err => {
        console.log(err)
        res.redirect('/posts')
    })
}

function show(req, res) {
    Post.findById(req.params.id)
    .populate('owner')
    .then(post => {
        res.render('posts/show', {
            post,
            title: 'Show post'
        })
    })
    .catch (err => {
        console.log(err)
        res.redirect('/posts')
    })
}

function edit(req, res) {
    Post.findById(req.params.id)
    .then (post => {
        res.render('posts/edit', {
            post,
            title:'Edit this post'
        })
    })
    .catch (err => {
        console.log(err)
        res.redirect('/posts')
    })
}

function update(req,res) {
    Post.findById(req.params.id)
    .then(post => {
        if (post.owner.equals(req.user.profile._id)){
            post.updateOne(req.body, {new:true})
            .then(()=> {
                res.redirect(`/posts/${post._id}`)
            })
        } else {
            throw new Error ('Not authorized')
        }
    })
    .catch (err => {
        console.log(err)
        res.redirect('/posts')
    })
}

function deletePost(req, res) {
    Post.findById(req.params.id)
    .then(post => {
        if (post.owner.equals(req.user.profile._id)) {
            post.delete()
            .then(()=> {
                res.redirect('/posts')
            })
        } else {
            throw new Error ('Not authorized')
        }
    })
    .catch (err => {
        console.log(err)
        res.redirect('/posts')
    })
}

export {
    index,
    create,
    show,
    edit,
    update,
    deletePost as delete
}