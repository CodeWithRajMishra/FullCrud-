const EmpModel= require("../models/empModel");

const empRegistration=async(req, res)=>{
  const {name, city, email, password} = req.body;
  try {
         const Data= await EmpModel.create({
            name:name,
            city:city,
            email:email,
            password:password
         })
         res.status(200).json({msg:"Your are Registered!!!"});
  } catch (error) {
       console.log(error);
  }
}

const empLogin=async(req, res)=>{
  const { email, password }= req.body;
 try {
      const Employee = await  EmpModel.findOne({email:email}); 
      
      if (!Employee)
      {
        res.status(400).send({msg:"Invalid Email!"});
      }

      if (Employee.password!=password)
      {
        res.status(400).send({msg:"Invalid Password!"});
      }
 
      res.status(200).send(Employee);

 } catch (error) {
     console.log(error);
 }
}

module.exports={
    empRegistration,
    empLogin
}