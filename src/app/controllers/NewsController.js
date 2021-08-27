class NewsController {
  // Phương thức GET / News
  index(req, res) {
    res.render('news', { title: 'Tin tức | Medical Center' });
  }
  // Phương thức GET / News/slug
  slug(req, res) {
    res.send('slug');
  }
  error(req, res) {
    res.render('error', { title: '404 Not found | Medical Center' });
  }
}

module.exports = new NewsController();
