// const express = require('express')
// const app = express();
const request = require('request');

// app.get('/', (req, res) => {
    
    let zz = {"2":"Bc","10":"B","18":"D","23":"B","25":"A","31":"F","43":"A","48":"B","49":"A","69":"A","72":"F","74":"T","79":"T","80":"B","85":"A","91":"B","98":"B","104":"A","111":"T","122":"B","130":"C","131":"D","133":"C","134":"A","147":"B","162":"B","167":"A","168":"B","176":"C","184":"B","185":"B","207":"B","217":"A","222":"C","226":"C","227":"A","231":"T","236":"T","247":"B","248":"A","256":"C","280":"B","283":"B","292":"B","315":"T","321":"D","324":"B","332":"A","349":"T","357":"T","username":"cs"}

    // request('http://101.37.77.161:8080/exam_3', function (error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         console.log(body) // Show the HTML for the baidu homepage.
    //     } else {
    //         console.log(response, body);

    //     }
    // })
    let num = 0;
let fas = function(){
    // zzs()
    request({
        url: 'http://47.101.150.193/exam_4/ex/submits.action',
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: zz
    }, function(error, response, body) {
        // console.log(error);
        if(error){
            // return  console.log("失败" + num);
        }
        if (!error && response.statusCode == 200) {
            console.log(`成功  ${num}次`+ body.user.exam_time)
            num++
        }
        
    }); 
    // fas()
    // console.log("+++++++++++++++++++");
    
}
function jsq(){
    for(let i = 0;i<10000;i++){
        fas()
    }
}
setInterval(function(){
    jsq()
},1000)
// setInterval(function(){
//     jsq()
// },1000)
// setInterval(function(){
//     jsq()
// },1000)
// setInterval(function(){
//     jsq()
// },1000)
// setInterval(function(){
//     jsq()
// },1000)
    // res.send("dsd")
 
// })

// app.listen(80, () => {
//     console.log("http://127.0.0.1:80");

// })
