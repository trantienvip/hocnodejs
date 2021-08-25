class SiteController {
    
    // Phương thức GET / News
    index(req, res){
        res.render('home');
    }
    intro(req, res){
        res.render('intro');
    }
    error(req, res){
        res.render('error');
    }
}

module.exports = new SiteController;