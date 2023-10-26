const { Cars } = require("../model");
const fs = require('fs');

/* -------create cars by admin && agence ----- */

exports.create = async (req, res) => {

  let image = './upload/' + Math.floor(Math.random() * 1000000000000000) + '.png';
  await fs.promises.writeFile(image, req.files.image[0].buffer)
    let data = req.body;
    const cars = await Cars.create({
      marque: data.marque,
      model: data.model,
      price: data.price,
      status: 0,
      image : image,
      category_id : data.category_id,
      user_id: req.user.id ?? 1,
      
    });
    res.json(cars);
  };

  /* -------update cars by admin && agence ----- */


  exports.update = async (req, res) => {
    let data = req.body;
    const car = await Cars.update(
      {
        marque: data.marque,
        model: data.model,
        price: data.price,
      },
      { where: { id: req.params.id } }
    );
  
    res.status(200).send({message: 'update successfully ',car});
  }


    /* -------get all cars ----- */

    exports.all = async (req, res) => {
        const cars = await Cars.findAll();
      
        res.json(cars);
      };


  /* -------get one car  ----- */


  exports.ById = async (req, res) => {
    try {
        const cars = await Cars.findByPk(req.params.id);
    
        res.json(cars);
      } catch (error) {
        res.status(400).send(error);
      }
  };

    /* -------delete cars by admin ,agence ----- */


    exports.delete = async (req, res) => {

        try {
            const cars = await Cars.destroy({where: { id: req.params.id}});
    
            res.status(200).send({message: 'delete successfully ',cars});
    
        } catch (error) {
            res.status(400).send(error);
        }
    }


    
  /* -------get all cars user id created----- */

  exports.all_cars = async (req, res) => {
    console.log(req);
    const categorys = await Cars.findAll({

      where: { user_id: req.user.id },
    });
   
    res.json(categorys);
  };


