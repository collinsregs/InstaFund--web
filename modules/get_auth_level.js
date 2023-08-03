const sql_get_role="SELECT FROM STAFF Role WHERE Email =?"
function get_auth_level(){
    try{
db.all(sql_get_role,[email],(err,employee)=>{
    if(err){
        console.log(err);
        return
    }
    var role= employee.role;
    return role;
}) 
    }catch(err){
        console.log(err);
    }

}