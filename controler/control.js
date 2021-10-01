const member = require("./member")
const connection = require("../db/db")

class IndexContoller {


    //  take all post blog data  

    static getblog(req, res) {
        connection.query("SELECT * FROM BlogPostAdd", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.json(result)
        });
    }

    // Get single blog data 

    static getblogbyid(req, res) {
        connection.query("SELECT * FROM BlogPostAdd", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            const found = result.some(single => Number(single.id) === parseInt(req.params.id))
            console.log("found", found);
            if (found) {
                res.json(result.find(single => Number(single.id) === parseInt(req.params.id)))
            } else {

                res.status(400).json("Wrong id you pushed")
            }
        });
    }

  
    // Create a new blog 

    static postblog(req, res) {

        const id = req.body.id;
        const description = req.body.description;
        res.json("Post create");
        console.log("id", id);
        console.log("description", description);
        var sql = `INSERT INTO BlogPostAdd (id, description) VALUES ( "${id}" , "${description}") `
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    }


   // Update a blog with specific id 

        static updateblogbyid(req, res) {
            connection.query("SELECT * FROM BlogPostAdd", function (err, result, fields) {
                if (err) throw err;
                console.log(result);
                const found = result.some(single => Number(single.id) === parseInt(req.params.id))
                console.log("found", found);
                if (found) {
                    const updateblog = req.body;
                    console.log(updateblog);
                    // res.json(member.find(single=>Number(single.id) === parseInt(req.params.id)))
                    console.log("id: ", req.params.id)
                    result.forEach((singlblogup) => {
                        if (Number(singlblogup.id) === parseInt(req.params.id)) {
                            console.log(singlblogup.description);
                            singlblogup.description = updateblog.description ? updateblog.description : singlblogup.description;

                            // var sql = `INSERT INTO BlogPostAdd (id , description) VALUES (" ${req.params.id}", "${singlblogup.description}") `
                        //   var sql = "UPDATE BlogPostAdd SET address = 'Canyon 123' WHERE address = 'Valley 345'";  

                            var sql = `UPDATE BlogPostAdd SET   description= "${singlblogup.description}" WHERE id = "${req.params.id}"`
                            connection.query(sql, function (err, result) {
                                    if (err) throw err;
                                    console.log("1 record Updated");
                                });
                           res.send({ msg: "Data is Updated:", result });
                        }
                    });
                } else {
                    res.status(400).json("Wrong id you pushed")
                }
            });
    }


    //Delete a blog by single Id

    static deleteblogbyid(req, res) {
        connection.query("SELECT * FROM BlogPostAdd", function (err, result, fields) {
            if (err) throw err;
            const found = result.some(single => Number(single.id) === parseInt(req.params.id));
            if (found) {
              var sql= `DELETE FROM BlogPostAdd WHERE id = "${req.params.id}"`;
                connection.query(sql, function (err, result) {
                    if (err) throw err;
                    res.json(`Blog Nummber "${req.params.id}"   Deleted`) 
                });
            }else{
                        res.status(400).json("Wrong id you pushed")
             }
        });
    }
    // Delete a all  blog  list

    static deleteallblog(req, res) {
        console.log(req.body);
        res.json(req.body);
        if (req.body) {
            res.json("All post are deleted")   
        }
    }

    static userRegistration(){

    }

    static userLogin(){

    }

    

}
module.exports = IndexContoller;