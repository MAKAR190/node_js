const articles = [
  {
    id: 1,
    title: " Title 1",
    text: " Some text",
  },
  {
    id: 2,
    title: " Title 2",
    text: " Some text",
  },
];
function getAll(req, res) {
  res.render("articles", { articles: articles });
}
function getById(req, res) {
  const target = articles[req.params.id];
  res.render("article", { article: target });
}
module.exports = { getAll, getById };
