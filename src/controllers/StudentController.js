import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    try {
      const student = await Student.findAll({ attributes: ['id', 'firstname', 'lastname', 'email', 'age', 'weight', 'height'] });
      return res.json(student);
    } catch (e) {
      return res.json(null);
    }
  }

  async store(req, res) {
    try {
      const newStudent = await Student.create(req.body);
      const {
        id, firstname, lastname, email, age, weight, height,
      } = newStudent;
      return res.json({
        id, firstname, lastname, email, age, weight, height,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const student = await Student.findByPk(req.params.id);

      if (!student) {
        return res.status(400).json({
          errors: ['Aluno não encontrado.'],
        });
      }

      const {
        id, firstname, lastname, email, age, weight, height,
      } = student;
      return res.json({
        id, firstname, lastname, email, age, weight, height,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const student = await Student.findByPk(req.params.id);

      if (!student) {
        return res.status(400).json({
          errors: ['Aluno não encontrado'],
        });
      }

      const attStudent = await student.update(req.body);
      const {
        id, firstname, lastname, email, age, weight, height,
      } = attStudent;

      return res.json({
        id, firstname, lastname, email, age, weight, height,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const student = await Student.findByPk(req.params.id);

      if (!student) {
        return res.status(400).json({
          errors: ['Aluno não encontrado.'],
        });
      }

      await student.destroy();

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

export default new StudentController();
