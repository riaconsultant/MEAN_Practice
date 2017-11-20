var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/mydb';

mongoClient.connect(url,function(err,db){
    if(err){
        console.log('Error'+err);
    }else{
        console.log('Database created !!');
        db.createCollection("customers",function(err,res){
            if(err){console.log(err);}else{
                //console.log("Collection Created !!");
                /* insert one record in the collection */
                /*var doc={name:"Manoj",age:32,status:1};
                db.collection('customers').insertOne(doc,function(err,res){
                    if(err) 
                        console.log(err);
                    else
                        console.log("Data Inserted");
                });*/
                /* Many records inserted */
                // var docs=[{name:"Manoj",age:32,status:1},{name:"Meera",age:30,status:1},{name:"Manvi",age:6,status:1},{name:"Janvi",age:3,status:1}];
                // db.collection('customers').insertMany(docs,function(err,res){
                //     if(err){console.log(err)}else{
                //         console.log(res);
                //     }
                // });
                /* find one record */
                // db.collection('customers').findOne({},function(err,res){
                //     if(err){console.log(err)}else{
                //         console.log(res);
                //     }
                // });
                /* find all record */
                // db.collection('customers').find({},{_id:false,name:true,age:true}).toArray(function(err,res){
                //     if(err){console.log(err)}else{
                //         console.log(res);
                //     }
                // });
                /* apply the query parameters */
                /*var query={ age:30 };
                db.collection('customers').find(query,{_id:false}).toArray(function(err,res){
                    if(err){console.log(err)}else{
                        console.log(res);
                        db.close();
                    }
                });*/
                /* Sorting */
                /*var mySort={ name: 1 }; // val is 1 or -1 Accsending or Decending.
                db.collection('customers').find().sort(mySort).toArray(function(err,res){
                    if(err){console.log(err)}else{
                        console.log(res);
                        db.close();
                    }
                });*/

                /* Delete doc */

               /* var myDel={ name:'Manoj' }; 
                db.collection('customers').deleteOne(myDel,function(err,res){
                    if(err){console.log(err)}else{
                        console.log(res);
                        db.close();
                    }
                });*/
                /* Update record */
                /*var myquery = { age: 32 };
                var newvalues = { name: "Manoj Kumar Chaurasiya", age: 33 };
                db.collection("customers").updateOne(myquery, newvalues, function(err, res) {
                  if (err) throw err;
                  console.log("1 document updated");
                  db.close();
                });*/
                /* Limit */
                db.collection("customers").find().limit(5).toArray(function(err, result) {
                    if (err) throw err;
                    console.log(result);
                    db.close();
                  });
            }
        });
    }
});