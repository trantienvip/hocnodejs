class NewsController {
    
    // Phương thức GET / News
    index(req, res){
        res.render('news');
    }
    // Phương thức GET / News/slug
    slug(req, res){
        res.send('Slug');
    }
    error(req, res){
        res.render('error');
    }
}

module.exports = new NewsController;