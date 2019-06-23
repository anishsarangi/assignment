const mysql= require('mysql');
const morgan = require("morgan")
const connection= require("./connection");
const express= require('express');
var session=require('express-session')
var login = require('./routes/loginroutes');
var app=express();
var bodyParser = require('body-parser');
const jwt=require('jsonwebtoken');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static(__dirname+'/files'))
const checkAuth=require('./middleware/checkauth');
//hbs setup
require('dotenv').config();
app.set('view engine', 'hbs');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var router = express.Router();
// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});
//route to handle user registration


app.use('/api', router);
app.post('/login',login.login);
app.post('/register',login.register);

app.get('/',checkAuth,(req,res)=>{
    res.render('index');
});

app.listen(process.env.PORT,()=>{
    console.log("expess is running at port number:" + process.env.PORT)
})

// app.use(session({
//     name:SESS_NAME,
//     secret:SESS_SECRET,
//     resave:false,
//     saveUninitialized:false,
//     cookie:{
//         maxAge:LIFETIME,
//         sameSite:true,
//         secure:IN_PROD
//     }
// }))
// app.listen(3000,()=>{
//     console.log("expess is running at port number:3000")
// })

// app.get('/dashboard',(req,resp)=>{

// });
// app.get('/login',(req,resp)=>{

// });
// app.get('/register',(req,resp)=>{

// });
// app.post('/login',(req,resp)=>{

// });
// app.post('/register',(req,resp)=>{

// });
// app.post('/logout',(req,resp)=>{

// });