let miao = 0;
let flgTime = null;
let fnFlgTime = function(){
    flgTime = setInterval(function(){
        miao++
        console.log(`${miao}s.....`);
        
        if(miao >= 30){
            clearInterval(flgTime)
            flgTime = null;
        }
    },1000)
}

fnFlgTime()