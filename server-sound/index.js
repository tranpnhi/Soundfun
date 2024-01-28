const express=require("express")
const app=express()
const port=3002
const morgan=require("morgan")
app.use(morgan("combined"))
const bodyParser=require("body-parser")
app.use(bodyParser.json())
//create default API
app.get("/",(req,res)=>{
res.send("Hello Restful API") 
})
app.listen(port,()=>{
console.log(`My Server listening on port ${port}`)
})
const cors=require("cors")
app.use(cors())
let database=[
    {"id":"1","name":"Horizon Flare","author":"Alexander Nakarada","image":"1.png","sound":"a_ad.wav","genre":"music","premium":"premium","soundpremium":"a.wav"},
    {"id":"2","name":"Singing Bird","author":"Mary","image":"2.png","sound":"a.wav","genre":"naturesound","premium":"","soundpremium":"a.wav"},
    {"id":"1","name":"Horizon Flare","author":"Alexander Nakarada","image":"1.png","sound":"a_ad.wav","genre":"music","premium":"premium","soundpremium":"a.wav"},
    {"id":"2","name":"Singing Bird","author":"Mary","image":"2.png","sound":"a.wav","genre":"naturesound","premium":"","soundpremium":"a.wav"}
]
app.get("/sounds",cors(),(req,res)=>{
    res.send(database)
    })
app.get("/sounds/:id",cors(),(req,res)=>{
    id=req.params["id"]
    let p=database.find(x=>x.id==id)
    res.send(p)
    })
app.get("/genres/:genre",cors(),(req,res)=>{
    genre=req.params["genre"]
    let p=database.find(x=>x.genre==genre)
    res.send(p)
    })
app.post("/sounds",cors(),(req,res)=>{ 
    database.push(req.body);
    res.send(database)
    })
app.put("/sounds",cors(),(req,res)=>{
    sound=database.find(x=>x.id==req.body.id)
    if(sound!=null)
    {
    sound.name=req.body.name
    sound.premium=req.body.premium
    sound.sound=req.body.sound
    }
    res.send(database)
    })
app.delete("/sounds/:id",cors(),(req,res)=>{
    id=req.params["id"]
    database = database.filter(x => x.id !== id);
    res.send(database) 
    })
        

let databaseBanner=[ 
    {'id':'1','image':'sale.svg'},
    {'id':'2','image':'function.svg'},
]  
app.get("/banners",cors(),(req,res)=>{
    res.send(databaseBanner)
    })
    app.get("/banners/:id",cors(),(req,res)=>{
    id=req.params["id"]
    let p=databaseBanner.find(x=>x.id==id)
    res.send(p)
    })
app.post("/banners",cors(),(req,res)=>{ 
    databaseBanner.push(req.body);
    res.send(databaseBanner)
    })
app.put("/banners",cors(),(req,res)=>{
    banner=databaseBanner.find(x=>x.id==req.body.id)
    if(banner!=null)
    {
        banner.image=req.body.image
    }
    res.send(databaseBanner)
    })
app.delete("/banners/:id",cors(),(req,res)=>{
    id=req.params["id"]
    databaseBanner = databaseBanner.filter(x => x.id !== id);
    res.send(databaseBanner) 
    })