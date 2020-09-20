const express = require ('express');
const app = express();
const pool = require("./db");

app.use(express.json())

//ROUTES

//GET all data

app.get("/district",async(req,res)=>{
    try{
        const getDistrict = await pool.query("SELECT stateid, statename, districtid, districtname from districtdata");
        res.json(getDistrict.rows);      
    }catch(err){
        console.log(err.message);
        res.json(err.message);
    }
})


//GET data by stateId
app.get("/district/:sid",async(req,res)=>{
    const {sid} = req.params;
    try{
        const getDistrict = await pool.query("SELECT statename, districtid, districtname from districtdata WHERE stateid =$1", [sid]);
        console.log(getDistrict);
        res.json(getDistrict.rows);      
    }catch(err){
        console.log(err.message);
        res.json(err.message);
    }
})


app.listen(5000, () => {
    console.log ("server is listening on port 5000 ");
})