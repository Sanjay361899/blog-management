const {check}=require("express-validatior");

exports.registerValidation=[
    check("name","please fill the name field").not().isEmpty(),
    check("email","please fill the name field").isEmail()

]