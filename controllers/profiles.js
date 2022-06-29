import { Profile } from '../models/profile.js'

function index (req, res) {
    Profile.find({})
    .then (profiles => {
        res.render('profiles/index', {
            profiles,
            title: 'Profile'
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect(`/profiles/${req.user.profile._id}`)
    })
}

function show(req, res) {
    Profile.findById(req.params.id)
    .then(profile => {
        const isSelf = profile._id.equals(req.user.profile._id)
        res.render('profiles/show', {
            title:`${profile.name}'s profile`,
            profile,
            isSelf
        })
    })
    .catch((err) => {
        console.log(err)
        res.redirect('/')
    })
}

function createFact(req, res) {
    Profile.findById(req.user.profile._id)
    .then(profile => {
        profile.facts.push(req.body)
        profile.save()
        .then(() => {
            res.redirect(`/profiles/${req.user.profile._id}`)
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect(`/profiles/${req.user.profile._id}`)
    })
}

function deleteFact(req, res) {
    Profile.findById(req.user.profile._id)
    .then(profile => {
        profile.facts.remove({_id: req.params.id})
        profile.save()
        .then(() => {
            res.redirect(`/profiles/${req.user.profile._id}`)
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect(`/profiles/${req.user.profile._id}`)
    })
}

function addMovie(req, res) {
    Profile.findById(req.user.profile._id)
    .then(profile => {
        profile.movies.push(req.body)
        profile.save()
        .then(()=> {
            res.redirect('/')
        })
    })
}

export {
    index,
    show,
    createFact,
    deleteFact,
    addMovie
}