const { Review } = require("../model");


/* -------create review  by client ----- */

exports.create = async (req, res) => {

    let data = req.body;
    const review = await Review.create({
      texte: data.texte,
      status: 0,
      agence_id: data.agence_id,
      client_id:req.user.id ?? 1,
    });
    res.json(review);
  };


  /* -------get All review ----- */

exports.all = async (req, res) => {
    const review = await Review.findAll( {
      include: ["client"],});
  
    res.json(review);
  };

 /* -------get one review ----- */

  exports.ById = async (req, res) => {
    try {
      const review = await Review.findByPk(req.params.id);
      res.json(review);
    } catch (error) {
      res.status(400).send(error);
    }
  };

   /* -------get all review  by user id created----- */

   exports.all_review = async (req, res) => {
    const review = await Review.findAll({
      where: { client_id: req.user.id },
    });
  
    res.json(review);
  };

  /* -------get All review  with status confirmed----- */

exports.reviewconfirmed = async (req, res) => {
    const review = await Review.findAll({
         include: ["client"],
        where: { status:1},
    });
    res.json(review);
  };

  /* -------confirm status status review ----- */
exports.confirm = async (req, res) => {
    try {
      const status = await Review.update(
        {
          status: 1
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).send({ message: "change successfully ", status });
    } catch {
      res.status(400).json("status is not confirm");
    }
  }



  /* -------update review by client ----- */

exports.update = async (req, res) => {
    let data = req.body;
    const review = await Review.update(
      {
        texte: data.texte,
        
      },
      { where: { id: req.params.id} }
    );
  
    res.status(200).send({ message: "update successfully ", command });
  };
  

  /* -------delete review by client ----- */


  exports.delete = async (req, res) => {

    try {
        const review = await Review.destroy({where: { id: req.params.id}});

        res.status(200).send({message: 'delete successfully ',review});

    } catch (error) {
        res.status(400).send(error);
    }
}
