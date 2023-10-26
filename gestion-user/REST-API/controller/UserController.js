const { User } = require("../model");


/* -------create user by admin ----- */

exports.create = async (req, res) => {
    let data = req.body;
    const user = await User.create({
      name: data.name,
      email: data.email,
      password: data.password,
      status: data.status,
      role: data.role,
    });
    res.json(user);
  };
  

  /* -------find All users ----- */

exports.all = async (req, res) => {
 
    const users = await User.findAll();
  
    res.json(users);
  };

   /* -------find All users role agence ----- */

exports.agence = async (req, res) => {
 
  const users = await User.findAll({
    where:{role: 'agence'}
  });

  res.json(users);
};



  /* -------find one user  ----- */

exports.ById = async (req, res) => {
    try {
        const users = await User.findByPk(req.params.id);
    
        res.json(users);
      } catch (error) {
        res.status(400).send(error);
      }
};


/* -------delete user by admin ----- */

exports.delete = async (req, res) => {

    try {
        const user = await User.destroy({where: { id: req.params.id}});

        res.status(200).send({message: 'delete successfully'});
  

    } catch (error) {
        res.status(400).send(error);
    }
}


/* -------confirm status agence by admin ----- */

exports.status_agence = async (req, res) => {
    const confirmer = await User.update(
      {
        status: 1
    },
    {
        where: {
            id: req.params.id
        }
    }
    );
    res.status(200).send({message: 'confirmation successfully ',confirmer});
  
  };
  