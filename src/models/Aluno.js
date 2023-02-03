import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 255],
            msg: "Nome precisa ter entre 3 e 255 caracteres."
          }
        }
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 255],
            msg: "Sobrenome precisa ter entre 3 e 255 caracteres."
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          isEmail: {
            msg: "Email inválido."
          }
        }
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: "",
        validate: {
          isInt: {
            msg: "A idade precisa ser um numero inteiro."
          }
        }
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: "",
        validate: {
          isFloat: {
            msg: "Peso precisa ser um numero real."
          }
        }
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: "",
        validate: {
          isFloat: {
            msg: "Altura precisa ser um numero real."
          }
        }
      },
    }, {
      sequelize,
    });
    return this;
  }
}
