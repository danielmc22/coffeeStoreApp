


const authUsers = {

    verifedRol: async (req, res, next) => {

        try {


            if (req.user.rol === "admin") {
                next()
                console.log(req.user.rol);
            } else {
                console.log("no se puede acceder/Falta de autorizacion para el citio");
                res.json({ response: "no se puede acceder/Falta de autorizacion para el citio" })
            }
        } catch (err) {
            console.log(err);
        }
    },
    // isAthenticated: async (req, res, next) => {

    // }

}

module.exports = authUsers