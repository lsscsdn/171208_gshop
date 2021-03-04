/*
包含多个基于state的getter计算属性的对象:当下面函数涉及到的state数据发生变化时，会重新计算一遍，类似于计算属性computer
下面的totalCount和totalPrice之所以不用computer,是因为如果用computer会多一次遍历全部的foods,来辨别哪些food上有count属性
 */
export default {

  totalCount (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count , 0)
  },

  totalPrice (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count*food.price , 0)
  },

  marketShop(state){
    // return [];
    return state.shops.filter((value,index)=>{return value.category==='商店超市/名酒坊'})
  },

  positiveSize (state) {
    return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType===0?1:0) , 0)
  }
}
