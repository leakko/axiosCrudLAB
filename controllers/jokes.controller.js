const axios = require("axios");

module.exports.list = (req, res, next) => {
  axios.get("http://localhost:8000/jokes")
  .then ((jokes) => {
    res.render("jokes/home", {jokes: jokes.data})
  })
  .catch ((e) => {
    next(e)
  })
};

module.exports.detail = (req, res, next) => {
  const {id} = req.params;
  axios.get(`http://localhost:8000/jokes/${id}`)
  .then ((joke) => {
    res.render("jokes/detail", {joke: joke.data})
  })
  .catch ((e) => {
    next(e)
  })
};

module.exports.createJoke = (req, res, next) => {
  res.render("jokes/new")
}

module.exports.doCreateJoke = (req, res, next) => {
  axios.post(`http://localhost:8000/jokes`, req.body)
  .then(() => {
    res.redirect("/")
  })
  .catch((e) => {
    next(e)
  })
};

module.exports.editJoke = (req, res, next) => {
  const { id } = req.params;
  axios.get(`http://localhost:8000/jokes/${id}`)
  .then((joke) => {
    console.log(joke.data)
    res.render("jokes/edit", joke.data);
  })
}

module.exports.doEditJoke = (req, res, next) => {
  const { title, start, end } = req.body;
  const { id } = req.params;
  axios.patch(`http://localhost:8000/jokes/${id}`, {
    title: title,
    start: start,
    end: end
  })
  .then(() => {
    res.redirect("/");
  })
}
