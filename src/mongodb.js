const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/LoginFormPractice")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    key:{
        type:String,
        required:true

    },
        itperson:{
            type: Boolean,
            required:[true,"Please provide a if person belongs to IT Department."]
        },
        department_id:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Department",
        },

    
})



const locationSchema= new mongoose.Schema({

 id:{
    type:String,
    required:true
},
 name:{
    type:String,
    required:true
}
})

const complaintTypeSchema=new mongoose.Schema({

    id:{
       type:String,
       required:true
   },
    type:{
       type:String,
       required:true
   }
   })
   const department=new mongoose.Schema({

    id:{
       type:String,
       required:true
   },
    departmentName:{
       type:String,
       required:true
   }
   })
   

   const callStatus=new mongoose.Schema({

    id:{
       type:String,
       required:true
   },
    callStatusName:{
       type:String,
       required:true
   }
   })
   
   const complaintLog=new mongoose.Schema({

    date:{
       type:String,
       required:true
   },
   complaintType:{
    type:String,
    required:true
   },
   department:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   },
   location:{
     type:String,
    required:true
   },
 name:{
    type:String,
   required:true
  }
   })

   const complaintLogLine=new mongoose.Schema({

    id:{
       type:String,
       required:true
   },
   complaintLog_Id:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "complaintLog",
   },
   dateOfAttend:{
    type:String,
    required:true
   },
   attendedBy:{
    type:String,
    required:true
   },
   remarkByAttendee:{
    type:String,
    required:true
   },
   timeOfAttend:{
    type:String,
    required:true
   },
   verifiedBy:{
    type:String,
    required:true
    },
    ok:{
        type:String,
        required:true
    }

   })


   const complaintLogOfAttendee=new mongoose.Schema({

    date:{
       type:String,
       required:true
   },
   time:{
    type:String,
    required:true
},
complaintAttendedBy:{
    type:String,
    required:true
},
   callStatus:{
    type:String,
    required:true
   },
   department:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   },
   faultFinding:{
    type:String,
    required:true
   },
   correctiveAction:{
    type:String,
    required:true
   },
   location:{
     type:String,
    required:true
   }

   })

   const endRemarkByAttendee=new mongoose.Schema({

    date:{
       type:String,
       required:true
   },
   time:{
    type:String,
    required:true
},
remark:{
    type:String,
    required:true
},
   Status:{
    type:String,
    required:true
   }
  

   })


 


 
   
const Location=new mongoose.model('Location',locationSchema)
const CallStatus=new mongoose.model('CallStatus',callStatus)
const ComplaintType=new mongoose.model('ComplaintType', complaintTypeSchema)
const Department=new mongoose.model('Department',department)
const LogInCollection=new mongoose.model('LogInCollection',logInSchema)
const Log=new mongoose.model('Log',complaintLog)
const LogLine=new mongoose.model('LogLine',complaintLogLine)
const LogLineOfAttendee=new mongoose.model('LogLineOfAttendee',complaintLogOfAttendee)
const EndRemark=new mongoose.model('EndRemark',endRemarkByAttendee)

module.exports={LogInCollection,Location,ComplaintType,Department,CallStatus,Log,LogLine,LogLineOfAttendee,EndRemark}
