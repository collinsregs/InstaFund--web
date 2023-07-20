function penalties(){
    var instalment
    var due_weekly
    if (due_weekly==0){
        var penalties =0
    }else{
        if (due_weekly>instalment){
            var penalties =instalment*0.1
        }else{
            var penalties =due_weekly*0.1
        }
    }
return penalties
}

module.exports = penalties;