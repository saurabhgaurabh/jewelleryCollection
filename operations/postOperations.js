const connection = require('../config/database');

module.exports = {
    registration: async (user_name, email) => {
        return new Promise((resolve, reject) => {
            const query = `insert into registration (user_name, email) values (?, ?)`;
            const values = [user_name, email];
            connection.execute(query, values, (insertError, insertResult) => {
                if (insertError) {
                    console.log(insertError, "error");;
                    return reject(' Error While inserting the Data.');
                }
                resolve({status: true, message: 'Data Inserted Successfully.', data: insertResult});
            })
        })
    }
}