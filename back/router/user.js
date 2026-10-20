import ControllerUser from '../controller/user.js'
import express from 'express';
import authMiddleware from '../middleware/auth.js'

const router = express.Router()

router.get('/buscar',authMiddleware,ControllerUser.Buscar)
router.get('/detalhe/:id',authMiddleware, ControllerUser.Detalhe)
router.post('/criar',ControllerUser.Criar)
router.put('/alterar/ :id',authMiddleware,ControllerUser.Alterar)
router.delete('/deletar/ :id',authMiddleware,ControllerUser.Deletar)
router.post('/login',ControllerUser.Login)

export default  router