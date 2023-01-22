import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Joana',
      sobrenome: 'Saldanha',
      idade: 24,
      email: 'emailteste@gmail.com',
      peso: 68,
      altura: 1.67,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
