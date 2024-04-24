import db from '../../config/config-db';
import User from '../../Dto/UserDto';

class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO usuarios (email, nombres, apellidos, contrasenia, telefono) VALUES (?, ?, ?, ?, ?)';
        const values = [user.email, user.nombres, user.apellidos, user.password, user.telefono];
        return db.execute(sql, values);
    }

    static async auth(email: string){

        const sql = 'SELECT contrasenia FROM usuarios WHERE email = ?';
        const values = [email];
        return await db.execute(sql, values);

    }

}

export default UserRepository;