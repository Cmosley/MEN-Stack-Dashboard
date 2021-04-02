const User = require("../models/user");
const Store = require("../models/store");
const { default: axios } = require("axios");



module.exports = {
  index,
  showProfile,
  update,
//   show, 
  addFriend, 
  removeFriend, 
  addToUser,
  checkStatus
};

function addToUser(req, res){
  User.findById(req.params.id, function(err, store){
    console.log(`params: ${req.params.id}`)
    user.storeid.push(req.body.storeId)
    user.save(function(err){
      res.redirect(`/users/profile`)
    })
  })
}

function addFriend(req, res) {
  req.user.friends.push(req.params.id);
  req.user.save()
  .then(() => {
    res.redirect(`/users/${req.params.id}`);
  });
}

function removeFriend(req,res) {
  let idx = req.user.friends.indexOf(req.params.id);
  req.user.friends.splice(idx, 1);
  req.user.save()
  .then(() => {
    res.redirect(`/users/${req.params.id}`)
  });
}


function update(req, res) {
  User.findByIdAndUpdate(req.user._id, req.body, { new: true })
	.then(() => {
    res.redirect("/users/profile");
  });
}

function index(req, res) {
  User.find({}).then((users) => {
    res.render("users/index", { title: "User Index", user: req.user, users });
  });
}


function showProfile(req, res){
  User.findById(req.user)
  .populate('storeId').exec(function(err, user) {
    Store.find({_id: {$nin: user.storeId}}, function(err, stores) {
      res.render('users/profile', {
        title: 'User Profile',
        user,
        stores
      })
    })
  })
}


function checkStatus(req, res) {
  axios
  .get(www.wataugakwikkar.com)
  console.log(response)
}
