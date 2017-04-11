import state from './state'

var getters = {};
Object.keys(state).forEach(function(k){
  //getters[k] 等于 箭头函数的返回值 state[k]
  //k是属性 getters[k]是值
  getters[k] = (state) => state[k];
});

export default getters 