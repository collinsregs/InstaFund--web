function calcPenalties(instalment,due_weekly,DBpenalties){
   if(DBpenalties==null){
     var penalties=0

   }else{
     var penalties=DBpenalties}

    if (due_weekly==0){
         return penalties
    }else{
     
        if (due_weekly>instalment){
          
             penalties =penalties +instalment*0.1
          
        }else{
          
             penalties =due_weekly*0.1
             
        }
    }
    
return penalties
}

module.exports = calcPenalties;