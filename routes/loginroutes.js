const connection=require('../connection.js')
const jwt=require('jsonwebtoken');
exports.register = function(req,res){
    console.log("req",req.body);
    var users={
      "first_name":req.body.username,
      "student_id":req.body.studentid,
      "password":req.body.password,
    }
    console.log(users);
    connection.query("INSERT INTO Student SET ?",{student_name:users.first_name,actual_id:users.student_id,student_password:users.password}, function (error, results, fields) {
    if (error) {
      console.log("error ocurred",error);
      res.send({
        "code":400,
        "message":"error ocurred"
      })
    }else{
      console.log('The solution is: ', results);
      res.send({
        "code":200,
        "message":"user registered sucessfully"
          });
    }
    });
  }

  exports.login = function(req,res,next){
    var username= req.body.username;
    var password = req.body.password;
    connection.query('SELECT * FROM Student WHERE student_name = ?',[username], function (error, results, fields) {
    if (error) {
      res.send({
        "code":400,
        "message":"error ocurred"
      })
    }else{
      console.log(results[0]);
      if(results.length >0){
        console.log(results[0].student_password);
        if(results[0].student_password == password){
          const token=jwt.sign({
            username:results[0].student_name,
            userId:results[0].student_id
          },
          process.env.JWT_KEY,
          {
            expiresIn:300*60*60
          }
          );
          res.send({
            "code":200,
            "message":"login sucessfull",
            "token":token
          });
        }
        else{
          res.send({
            "code":204,
            "message":"username and password does not match"
              });
        }
      }
      else{
        res.send({
          "code":204,
          "message":"Username does not exits"
            });
      }
    }
    });
  }