/*
countdown timer section 
*/
function getTimeRemaining(endTime){
    let t = Date.parse(endTime) - Date.parse(new Date());
    let secs = Math.floor((t / 1000) % 60);
    let mins = Math.floor((t / 1000 / 60)  % 60);
    let hrs = Math.floor((t / (1000 * 60 * 60)));

    return{
        'total': t,
        'hours': hrs,
        'minutes': mins,
        'seconds' :secs
    };
}

    function initializeTimer(id, endTime){
        let timer = document.getElementById(id);
        let hrsSpan = timer.querySelector('.hour');
        let minuteSpan = timer.querySelector('.minute');
        let secondSpan = timer.querySelector('.second');

        function updateTimer(){
            let t = getTimeRemaining(endTime);
            hrsSpan.innerHTML = ('0' + t.hours).slice(-2);
            minuteSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if(t.total <= 0 ){
                alert(" 抢购结束啦！")
                clearInterval(timeinterval);
            }
        }
        updateTimer();
        let timeinterval = setInterval(updateTimer, 1000);
    }
    
let finalTime = new Date(Date.parse(new Date()) + 10 * 60 * 60 * 1000);
initializeTimer('countdown-timer', finalTime);

/*
switch cards section 
*/
var products =[
    {
        image:'https://img.alicdn.com/tps/i1/O1CN017Sk3a029zFhpTsInH_!!2-juitemmedia.png_180x180q90.jpg_.webp',
        title:"小米9年度旗舰 现货开售",
        infor:"4800万超广角三摄",
        percent: "0%",
        number: 0,
        curPrice: 2999,
        oriPrice: "￥2999.00"
    },

    {
        image:"https://img.alicdn.com/tps/i2/O1CN01XpLair1PMo8dWO5jD_!!0-juitemmedia.jpg_180x180q90.jpg_.webp",
        title:"【低至1249元】华为HONOR/荣耀",
        infor: "4+64GB限时优惠150",
        percent: "6%",
        number: "已抢45件",
        curPrice: 1299,
        oriPrice: "￥1399.00"
    },

    {
        'image':"https://img.alicdn.com/tps/i3/O1CN01LgvbaO23VaMMQVFFw_!!0-juitemmedia.jpg_180x180q90.jpg_.webp",
        title:"真皮包头单鞋女2019春新款韩版",
        infor:"软羊皮！质量三包",
        percent:"49%",
        number: "已抢735件",
        curPrice: 68,
        oriPrice: "￥588.00"
    },

    {
        image:"https://img.alicdn.com/tps/i4/2172213002/TB2PJMOn9tYBeNjSspkXXbU8VXa_!!0-juitemmedia.jpg_180x180q90.jpg_.webp",
        title: "名仁苏打水 碱性水整箱24瓶",
        infor: "前1小时 第2件半价",
        percent: "18%",
        number: "已抢216件",
        curPrice: 65,
        oriPrice: "￥85.00"
    },

    {
        image: "https://img.alicdn.com/tps/i1/O1CN01FnfyUD1kfDzVmx8Us_!!0-juitemmedia.jpg_180x180q90.jpg_.webp",
        title:"红糖小麻花80根甜香脆",
        infor: "下仅12.9元",
        percent:"5%",
        number:"已抢481件",
        curPrice:24.8,
        oriPrice: "￥78.00"
    },

    {
        image:"https://img.alicdn.com/tps/i4/O1CN01wBUB3f1QpUYNBYMwy_!!0-juitemmedia.jpg_180x180q90.jpg_.webp",
        title:"现摘海南木瓜5斤",
        infor: "前120分钟2件19.8",
        percent:"13%",
        number:"已抢903件",
        curPrice: 16.8,
        oriPrice: "￥69.00"
    }
];

let n = 0;
function listProducts(products){
    
    if(n >= products.length){
        document.getElementsByClassName("changeGroup")[0].style.cursor = "auto";
        return;
    }

    let cardList = document.getElementsByClassName("singleInfo");
    for(let i = 0; i < cardList.length; i++){
        cardList[i].querySelector('img').src = products[n].image;
        cardList[i].querySelector('h4').innerHTML = products[n].title;
        cardList[i].querySelector('.moreInfo').innerHTML = products[n].infor;
    
        if(products[n].percent == '0%'){ 
            cardList[i].querySelector('.meter').style.display = "none";
            cardList[i].querySelector('.descri').style.display = "none";
        }else{
            cardList[i].querySelector('.meter').style.display = "block";
            cardList[i].querySelector('.descri').style.display = "block";
            let style = "width:"+ products[n].percent;
            cardList[i].querySelector('.progress-bar').setAttribute("style",style);
            cardList[i].querySelector('.percent').innerHTML = products[n].percent;
            cardList[i].querySelector('.actualNum').innerHTML = products[n].number;
        }
        cardList[i].querySelector('.cur').innerHTML = products[n].curPrice;
        cardList[i].querySelector('.before').innerHTML = products[n].oriPrice;
        n++;
    }
}

