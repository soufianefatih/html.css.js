const { Category,Cars } = require("../model");
const fs = require('fs');

/* -------create category  by admin && agence ----- */

exports.create = async (req, res) => {

  let image = './upload/' + Math.floor(Math.random() * 1000000000000000) + '.png';
  await fs.promises.writeFile(image, req.files.image[0].buffer)

    let data = req.body;
    const category = await Category.create({
      name: data.name,
      type: data.type,
      image : image,
      agence_id: data.agence_id,
      user_id : req.user.id ?? 1,
    });
    res.json(category);
  };

  /* -------get all category ----- */

  exports.all = async (req, res) => {
    const categorys = await Category.findAll();
  
    res.json(categorys);
  };
/* -------get one category  ----- */


exports.ById = async (req, res) => {
  try {
      const category = await Category.findByPk(req.params.id);
  
      res.json(category);
    } catch (error) {
      res.status(400).send(error);
    }
};

/* -------update category by admin ----- */
exports.update = async (req, res) => {
  let data = req.body;
  const category = await Category.update(
    {
      name: data.name,
      type: data.type,    
    },
    { where: { id: req.params.id } }
  );

        res.status(200).send({message: 'update successfully ',category});

};

/* -------delete category by admin  && agence----- */
exports.delete = async (req, res) => {

  try {
      const category = await Category.destroy({where: { id: req.params.id}});

      res.status(200).send({message: 'delete successfully ',category});

  } catch (error) {
      res.status(400).send(error);
  }
}




  /* -------get all category  by user id created----- */

  exports.all_category = async (req, res) => {
    console.log(req);
    const categorys = await Category.findAll({

      where: { user_id: req.user.id },
    });
   
    res.json(categorys);
  };



  /* -------get category  with info cars ----- */

exports.category_cars = async (req, res) => {
  const id = req.params.id
  try {
      const info = await Category.findOne({
        include: [{
            model: Cars,
            as: 'cars'
        }],
        where: {id: id}
    });
      res.json(info);
    } catch (error) {
      res.status(400).send(error);
    }
};