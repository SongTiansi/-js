
//返回首页

home()
sleep(500)

//打开微信
//app.launch('com.tencent.mm')
//app.launchApp(微信)
text('微信').findOne().click()
sleep(3000)
//打开通讯录
click(402,2270)
sleep(200)

//打开公众号
click(310,890)
sleep(1000)

//打开搜索
click(900,150)
sleep(1000)

setText("青春山东")
//打开青春山东
sleep(1000)
click(500,405)

//进入大学习
sleep(1000)
click(610,2250)

//点击跳过
sleep(6000)
text('立即开始学习').findOne().click()

//开始学习
sleep(1500)
click(546,1344)

sleep(4000)

if(text('我来自山东临沂')){
    //开始学习
    click(555,1720)
}else{
    //点击修改
    click(1000.280)
    //点击选择1
    sleep(1000)
    click(550,1045)
    sleep(1000)
    //选山东
    text('山东省').click()
    //选择2
    sleep(1000)
    click(546,1150)
    sleep(1000)
    text('临沂市').click
    sleep(1000)
    //点击确定
    click(552,1538)
    sleep(1000)
    //开始学习
    click(555,1720)
    sleep(300)
}
//上一步
sleep(9000)
back()

//点击我的
sleep(1000)
click(890,2275)

//点击我的
sleep(1000)
click(540,725)
sleep(400)
//截图
gestures([350,[300,400],[300,1400]],
        [350,[600,400],[600,1400]],
        [350,[900,400],[900,1400]])

     sleep(300)
toast('程序结束')