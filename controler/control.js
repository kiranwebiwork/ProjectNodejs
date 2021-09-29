class IndexContoller {
    static initial(req , res){
        res.send("Hello inital folder")
    }

    static home(req, res){
        res.send("Hello Home")
    }

    static contact(req, res){
        res.send("Hello Contact")
    }
}
module.exports = IndexContoller;