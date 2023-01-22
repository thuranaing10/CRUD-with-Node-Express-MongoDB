var Postdb = require('../model/posts');

exports.create = (req, res) => {

    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new post
    const post = new Postdb({
        title : req.body.title,
        description : req.body.description
    })

    // save post in the database
    post
        .save(post)
        .then(data => {
            res.send(data)
            // res.redirect('/add-post');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}


exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Postdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found post with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving post with id " + id})
            })

    }else{
        Postdb.find()
            .then(post => {
                res.send(post)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving post information" })
            })
    }

    
}

exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Postdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update post with ${id}. Maybe post not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update post information"})
        })
}

// Delete a post with specified post id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    Postdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "post was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}

