const postOperations = require('../operations/postOperations');



module.exports = {
    registration: async (req, res) => {
        try {
            const { user_name, email } = req.body;

            const requiredFields = ['user_name', 'email'];
            for (const fields of requiredFields) {
                if (!req.body[fields]) {
                    return res.status(404).json({ status: 404, message: `${fields.replace('_', ' ')} is required` });
                }
            }
            const registrationResult = await postOperations.registration(user_name, email);
            if (!registrationResult) {
                return res.status(404).json({ status: false, message: `Data not found`, data: registrationResult });
            }
            return res.status(200).json({ status: true, message: `Registration successful`, data: registrationResult });

        } catch (error) {
            console.error('Error in registration:', error);
            return res.status(500).json({ status: false, message: `Internal server error. ${error}` });
        }
    }
}