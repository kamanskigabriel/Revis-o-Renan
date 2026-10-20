// service
import ServiceUser from '../service/user.js'


class ControllerUser {
    async Buscar(req, res) {
        try {
            const users = await ServiceUser.Buscar()
            res.status(200).send({ users })

        } catch (error) {
            res.status(500).send({ message: error.message })
        }

    }
    //
    async Detalhe(req, res) {
        try {
            // session === usuario logado
            const id = req.session.id
            const user = await ServiceUser.Detalhe()
            res.status(200).send({ user })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }

    }

    async Criar(req, res) {
        try {
            const { name, email, password } = req.body
            await ServiceUser.Criar(name, email, password)
            res.status(201).send({ message: "Usuário criado com sussesso" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }

    }

    //
    async Alterar(req, res) {
        try {
            const id = req.session.id
            const { name, email, password } = req.body
            const user = await ServiceUser.Alterar(id, name, email, password)
            res.status(200).send({ user })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }

    }

    //
    async Deletar(req, res) {
        try {
            const id = req.session.id
            await ServiceUser.Deletar(id)
            res.status(200).send({ message: "Usuário deletado com sucesso" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }

    }

    //
    async Login(req, res) {
        return res.status(200).send({ token: 158575 })
        try {
            const { email, password } = req.body
            const token = await ServiceUser.Login(email, password)
            res.status(200).send({ user })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }

    }

}
export default new ControllerUser()