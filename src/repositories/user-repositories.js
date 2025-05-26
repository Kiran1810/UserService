const CrudRepository = require('./crud-repositories');
const { users } = require('../models');


class UserRepository extends CrudRepository {
    constructor() {
        super(users);
    }

    async getUserByEmail(email){
      
        const res= await users.findOne({where:{email:email}})
      
        return res
       }
}



    module.exports = UserRepository;