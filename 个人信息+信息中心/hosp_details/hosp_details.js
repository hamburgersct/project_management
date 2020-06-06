// page/component/details/details.js
Page({
  data:{
    hospital: {
      id: 1,
      image: '/image/hospital.png',
      title: '人民医院',
      tel:'100-200-300',
      detail: '人民医院是什么呢，简单来说，人民医院就是人民的医院',
      parameter: '位置：XX区XX路XX号',
      service: '支持支付宝预约挂号'
    }
  },
  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }
 
})