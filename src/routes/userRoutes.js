import { Router } from 'express';

import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// ESSAS ROTA CONTEM FALHA DE SEGURANÇA, NÃO SERIA NECESSÁRIO EM UM SISTEMA REAL
router.get('/', userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
