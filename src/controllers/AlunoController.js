import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({ attributes: ['id', 'nome', 'email','sobrenome', 'idade', 'peso', 'altura'] });
      return res.json(alunos);
    } catch (e) {
      return res.json(null);
    }
  }

  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      const { id, nome, sobrenome, email, idade, peso, altura } = novoAluno;
      return res.json({ id, nome, sobrenome, email, idade, peso, altura });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não encontrado."],
        })
      }

      const { id, nome, sobrenome, email, idade, peso, altura } = aluno;

      return res.json({ id, nome, sobrenome, email, idade, peso, altura });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      })
    }
  }

  async update(req, res) {
    try {
      console.log(req)
      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado'],
        });
      }

      const novosDados = await aluno.update(req.body);
      const { id, nome, sobrenome, email, idade, peso, altura } = novosDados;

      return res.json({ id, nome, sobrenome, email, idade, peso, altura });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado.'],
        });
      }

      await aluno.destroy();

      return res.json({
        apagado: true
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

}

export default new AlunoController();
