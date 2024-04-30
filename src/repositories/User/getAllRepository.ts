import db from '../../config/config-db';
import User from '../../Dto/UserDto';

export class getAllUser{

    static async getAllUser(user: User){
        const sql = `SELECT * FROM users`;
        const values = [user.email, user.nombres, user.apellidos, user.telefono];
        return db.execute(sql, values);
    }

}