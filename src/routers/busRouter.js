const express = require('express')

const BOOKBUS = require('../model/booking')

const router = express.Router()


//create bus schema
router.post("/createBusSchema",(req,res)=>{
    const {          //--------------postman la irunthu call panroom, then anga kodutha values laam apdiye
        busName,      //                            inga vanthu assign aaikum
        route,
        time,
        price,
        seat
    } = req.body      

    if(!busName || !route || !time || !price || !seat){
        return res.json({msg:"Fill All The Fields"})
    }

    const busSchema = new BOOKBUS({                               //BOOKBUS has been imported and postman la iruntu save panna 
        busName,                          // busName : busName                            values laam intha BOOKBUS la irukura 
        route,                             //route  : route                              schema format la save panroom , then atha 
        time,                               //----------                                  "bookschema" variable la save panrom...
        price,                               //--------
        seat
    })

    busSchema.save().then((data)=>{
        res.json({                         //--bookSchema variable vechu database la intha values laam save panroom 
            post:data  // POSTMAN la keela console la post nu heading la antha data laam show aagum
        })
        return res.json({msg:"Bus data saved"})
    })

})


//display All bus details
router.get('/allBusData',(req,res)=>{
    BOOKBUS.find()                        // .get frontend la get panni kaattum...
    .then((data)=>{                       // .find() all values um yeduthu kaaattum
        res.status(202).json({
            busData:data                    // find aachunaa then busData heading la all the data vum yeduthu kaattum
        })
    })
})

//Update
router.patch("/updateBusDetails/:id",(req,res)=>{
    BOOKBUS.findByIdAndUpdate(req.params.id,req.body,{   //syntax : BOOKBUS la id vechu find panni
        new:true
    }).then((data)=>{
        if(!data){
        return res.status(404).send();
        }
        res.send(data)

    })
})

module.exports = router