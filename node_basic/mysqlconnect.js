var mysql = require('mysql');

var conn = mysql.createConnection({
    host:'localhost',
    user:'manu',
    password:'1',
    database:'node_db1' // if database already created, set the database  so start specific db queries.
});

conn.connect(function(err){
    if(err){
    console.log('Error' +err);
    }else{
        console.log('Connected');
        /* apply the where clause in the query */
        var sql = 'select * from test where age= ?';
        var value =32;
        conn.query(sql,[value],function(err,result,fields){
            if(err){
                console.log("Error"+err);
            }else{
                console.log("Result: "+result[0].name);
            }
        })
        /* Select query to fetch the data form the table */
        /*var sql = 'select * from test';
        conn.query(sql,function(err,result,fields){
            console.log("Result"+result + fields);
        });*/

        /* Multiple record data saving query */
        /*var sql = 'insert into test(name,age,status) values ?';
        var values =[
            ['Manoj',32,1],
            ['Sushil',29,1],
            ['Mann',6,1],
            ['Jaanu',3,1]
        ];
        conn.query(sql,[values],function(err,result,fields){
            if(err){
                console.log('Data Insertion Error' + err);
            }else{
                console.log('Result'+result);
            }
        });*/
        /* Table creation */
        /*var sql = 'create table test(name varchar(35),age int(2),status tinyint(1))';
        conn.query(sql,function(err,result){
            if(err){
                console.log("Error"+err);
            }else{
                console.log("Table created !");
            }
        });*/
        /* Database creation */
        /*conn.query('Create database node_db1',function(err,result){
            if(err){
                console.log('Query Error'+err);
            }else{
                console.log('Query Executed !');
            }
        });*/
    }
});

