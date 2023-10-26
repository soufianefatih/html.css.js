const { Agence ,Category} = require("../model");
const fs = require('fs');
const Actions = require("../classes/Action");

/* -------create agence  by admin && agence ----- */

exports.create = async (req, res) => {

  let image = './upload/' + Math.floor(Math.random() * 1000000000000000) + '.png';
  await fs.promises.writeFile(image, req.files.image[0].buffer)


    let data = req.body;
    const agence = await Agence.create({
      name: data.name,
      city: data.city,
      description: data.description,
      image : image,
      user_id : req.user.id ?? 1,
    });
    res.json(agence);
  };
  /* -------update agence by admin && agence ----- */

  exports.update = async (req, res) => {
    let data = req.body;
    const agence = await Agence.update(
      {
        name: data.name,
        city: data.city,
        description: data.description,
      
      
      },
      { where: { id: req.params.id } }
    );
  
          res.status(200).send({message: 'update successfully ',agence});
  
  };


  /* -------get all agence ----- */

  exports.all = async (req, res) => {
    let filters = req.query.filters || {};
    const agence = await Actions.setModel(Agence).filters(filters).get();
    // const agence = await Agence.findAll();
  
    res.json(agence);
  };

  /* -------get one agence  ----- */
exports.ById = async (req, res) => {
    try {
        const agence = await Agence.findByPk(req.params.id);
    
        res.json(agence);
      } catch (error) {
        res.status(400).send(error);
      }
  };

  /* -------get all agence  by user id created----- */

  exports.all_agence = async (req, res) => {
    const agence = await Agence.findAll({
      where: { user_id: req.user.id },
    });
  
    res.json(agence);
  };

  /* -------delete agence by admin ,agence ----- */

  exports.delete = async (req, res) => {

    try {
        const agence = await Agence.destroy({where: { id: req.params.id}});

        res.status(200).send({message: 'delete successfully ',agence});

    } catch (error) {
        res.status(400).send(error);
    }
}

/* -------get agence  with info category ----- */

exports.agence_category = async (req, res) => {
  const id = req.params.id
  try {
      const info = await Agence.findOne({
        include: [{
            model: Category,
            as: 'categorys'
        }],
        where: {id: id}
    });
      res.json(info);
    } catch (error) {
      res.status(400).send(error);
    }
};