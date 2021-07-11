const studentModel = require('../models/student.model')

add =async (req,res)=>{

        const addStudentData=new studentModel(req.body)
      try{
        await addStudentData.save()
        res.status(200).send({
            apiStatus: true,
            message: " data inserted",
            data: userData
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            message: "error inserting data",
            data: e
        })
    }

}
module.exports ={add}