import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Joao',
      sobrenome: 'Guilherme',
      idade: 22,
      email: 'emailteste@icloud.com',
      peso: 19,
      altura: 1.69,
    });

    res.json(novoAluno);
  }
}

export default new AlunoController();
