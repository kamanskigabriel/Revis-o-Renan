import database from "../config/database.js";
class User {
    constructor() {
        this.model = database.db.define("users", {
            id: {
                type: database.db.Sequelize.INTEGER,
                autoIncriment : true,
                primaryKey : true
            },
            name: {
                type: database.db.Sequelize.STRING,
                allowNull : false
            },
            email: {
                type: database.db.Sequelize.STRING,
                unique : true
            },
            password: {
                type: database.db.Sequelize.STRING,
            }
        })
    }
}
export default new User().model
// com contructor é inicializado com o banco sem ele so quando o usuario buscar