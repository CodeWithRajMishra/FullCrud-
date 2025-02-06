const express = require("express");
const route= express.Router();
const EmpController= require("../controllers/empController");

route.post("/insert", EmpController.empInsert );
route.get("/display", EmpController.empDisplay);
route.post("/search", EmpController.empSearch);
route.get("/empdelete", EmpController.empDelete);
route.post("/editdatashow", EmpController.empEditShow);
route.post("/editdatasave", EmpController.empEditSave);



module.exports= route;