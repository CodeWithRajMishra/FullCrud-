const EmpModel= require("../models/empModel");


const empInsert=async(req, res)=>{
    const { empno, name, designation, salary }= req.body;
      await EmpModel.create({
        empno:empno,
        name:name,
        designation:designation,
        salary:salary
      })
      res.json({msg:"Data Succesfulllly Saveeee!"});
}

const empDisplay=async(req, res)=>{
     const EmpData = await  EmpModel.find();
     res.send(EmpData);
}


const empSearch=async(req, res)=>{
        const { empno} = req.body;
        const Data= await EmpModel.find({empno:empno});
        res.send(Data);

}

const empDelete=async(req, res)=>{
  const { empid} = req.query;
    await EmpModel.findByIdAndDelete(empid);
    res.send("Data deleted!!!");
}

const empEditShow=async(req, res)=>{
  const { empid }= req.body;
   const Data = await EmpModel.findById(empid);
   res.send(Data);
}


const empEditSave=async(req, res)=>{
  const {_id } =req.body;
  await EmpModel.findByIdAndUpdate(_id, req.body);
  res.send("Data succesfully updated!!!");
}
module.exports={
       empInsert,
       empDisplay,
       empSearch,
       empDelete,
       empEditShow,
       empEditSave
}