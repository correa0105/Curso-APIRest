import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'fullname', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, fullname, email } = novoUser;
      return res.json({ id, fullname, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id, { attributes: ['id', 'fullname', 'email'] });

      if (!user) {
        return res.status(401).json({
          errors: ['User não encontrado.'],
        });
      }

      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado'],
        });
      }

      const attUser = await user.update(req.body);
      const { id, fullname, email } = attUser;

      return res.json({ id, fullname, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado'],
        });
      }

      await user.destroy();

      return res.json({
        wiped: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();

/*
Index -> LISTA TODOS USUARIOS (GET)
Store/Create -> CRIA UM NOVO USUARIO (POST)
Delete -> APAGA UM USUARIO (DELETE)
Show -> MOSTRA UM USUÁRIO (GET)
Update -> ATUALIZA UM USUÁRIO (PATCH OU PUT)
*/
