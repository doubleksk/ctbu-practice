// pages/results/results.js
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrayObj: [{
      "code": "11",
      "name": "北京"
    }, {
      "code": "12",
      "name": "天津"
    }, {
      "code": "13",
      "name": "河北"
    }, {
      "code": "14",
      "name": "山西"
    }, {
      "code": "15",
      "name": "内蒙"
    }, {
      "code": "21",
      "name": "辽宁"
    }, {
      "code": "22",
      "name": "吉林"
    }, {
      "code": "23",
      "name": "黑龙江"
    }, {
      "code": "31",
      "name": "上海"
    }, {
      "code": "32",
      "name": "江苏"
    }, {
      "code": "33",
      "name": "浙江"
    }, {
      "code": "34",
      "name": "安徽"
    }, {
      "code": "35",
      "name": "福建"
    }, {
      "code": "36",
      "name": "江西"
    }, {
      "code": "37",
      "name": "山东"
    }, {
      "code": "41",
      "name": "河南"
    }, {
      "code": "42",
      "name": "湖北"
    }, {
      "code": "43",
      "name": "湖南"
    }, {
      "code": "44",
      "name": "广东"
    }, {
      "code": "45",
      "name": "广西"
    }, {
      "code": "46",
      "name": "海南"
    }, {
      "code": "51",
      "name": "四川"
    }, {
      "code": "50",
      "name": "重庆"
    }, {
      "code": "52",
      "name": "贵州"
    }, {
      "code": "53",
      "name": "云南"
    }, {
      "code": "54",
      "name": "西藏"
    }, {
      "code": "61",
      "name": "陕西"
    }, {
      "code": "62",
      "name": "甘肃"
    }, {
      "code": "63",
      "name": "青海"
    }, {
      "code": "64",
      "name": "宁夏"
    }, {
      "code": "65",
      "name": "新疆"
    }],
    index: 0,
    subjects: [{
      "code": "1",
      "name": "理科"
    }, {
      "code": "2",
      "name": "文科"
    }],
    subIndex: 0,
    yearArr: ['2020', '2019', '2018', '2017', '2016', '2015', '2014'],
    yearIndex: 0,
    info:[],
    subjectsNull:null,
    flag:true
  },
  bindPickerChange(e) {
    var that = this;
    that.setData({ //设置index
      index: e.detail.value,
      subjects: [{"code": "1","name": "理科"}, {"code": "2","name": "文科"}]
    })
    that.getdata();
   
    
  },
  bindSubChange(e) {
    var that = this;
    if(that.data.flag){
    that.setData({ //设置index
      subIndex: e.detail.value
    })
    that.getdata();
  }
  },
  bindYearChange(e) {
    var that = this;
    that.setData({ //设置index
      yearIndex: e.detail.value
    })
    
    that.getdata();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'ZJYBZ-XTHWQ-3VF53-GAA3V-DZLWS-HJB7U'
    });
    wx.getLocation({
      success(res) {
        console.log(res);
        qqmapsdk.reverseGeocoder({
          //Object格式
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (res) {
            //成功后的回调
            //console.log(res.result.address_component.province);
            var province=res.result.address_component.province;
            for(var i=0;i<that.data.arrayObj.length;i++){
              if(province.includes(that.data.arrayObj[i].name)){
                that.setData({
                  index:i
                })
              }
            }
            that.getdata();
          }
        })
      }
    })
  },

getdata(){
  var that=this;
  app.wxRequest("POST",that.data.arrayObj[that.data.index].code,that.data.subjects[that.data.subIndex].code,that.data.yearArr[that.data.yearIndex],(res)=>{
    // console.log(res);
    if(res.data.item.length!=0){
      that.setData({
        subjects: [{"code": "1","name": "理科"}, {"code": "2","name": "文科"}],
        info:res.data.item,
        flag:true
      })
    }else{
      app.wxRequest("POST",that.data.arrayObj[that.data.index].code,3,that.data.yearArr[that.data.yearIndex],(res)=>{
        if(res.data.item){
          that.setData({
            subjects:[{"code":"3","name":"综合"}],
            info:res.data.item,
            flag:false,
          })
        }else{
          that.setData({
            subjectsNull:"暂无数据"
          })
        }
      })
    }
    
    // console.log(that.data.info);
     },(err)=>{
      //  console.log(err);
     } 
     )
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})