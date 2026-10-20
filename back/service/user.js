// Repo
import RepositoryUser from '../repository/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SECRET = 'Arroz13'
const SALT = 13

class ServiceUser {
    async Buscar() {
        return RepositoryUser.Buscar()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Informar o ID")
        }
        return RepositoryUser.Detalhe(id)
    }

    async Criar(name, email, password) {
        if (!name || !email || !password) {
            throw new Error("Informar todes os parametres")
        }
        const cryptPass = await bcrypt.hash(password, SALT)
        await RepositoryUser.Criar(name, email, password, cryptPass)
    }

    async Alterar(id, name, email, password) {
        if (!id || !name || !email || !password) {
            throw new Error("Informar todos os parametros")
        }
        const cryptPass = !password
            ? undefined
            : await bcrypt.hash(password, SALT)

        await RepositoryUser.Alterar(id, name, email, password, cryptPass)
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Informar ID")
        }
        await RepositoryUser.Deletar(id)
    }

    async Login(email, password) {
        if (!email || !password) {
            throw new Error("Informar informações")
        }
        if (!email || !password) {
            throw new Error("Informar todes os parametres")
        }
        const user = await RepositoryUser.FindByEmail(email)
        if (!user) {
            throw new Error("Email ou Senha não achado")
        }
        if (!(await bcrypt.compare(String(password), user.password))) {
            throw new Error("Email ou Senha não achado")
        }
        return jwt.sing(
            {
                id: user.id,
                email: user.email
            }, SECRET, { expiresIn: 60 * 60 }
        )
    }
}
export default new ServiceUser()