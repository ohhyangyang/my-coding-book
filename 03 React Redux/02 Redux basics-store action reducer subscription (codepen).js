/*
https://codepen.io/ohhyangyang/pen/zYoqrXg?editors=0011
*/


//引入createStore
const {createStore} = Redux;

//设置初始state
const initState={
  todos:[],
  posts:[]
}

//定义reducer函数，制定store中的规则⚠️⚠️
function reducer(state=initState,action){
  console.log(action)
  console.log(state)
  /*添加了新todo之后，action等于Object { todo: "buy milk", type: "ADD_TODO"}
                    state等于 Object { todos:[],posts:[]}*/
  
  if(action.type==="ADD_TODO"){  //如果新todo为add_todo，则如下更新state
    return{
      ...state, //植入原有state
      todos:[...state.todos,action.todo]  //重写更改的部分
    }
  }
  
  if(action.type==="ADD_POST"){  //如果新todo为post_todo，则如下更新state
    return{
      ...state, //植入原有state
      posts:[...state.posts,action.post]  //重写更改的部分
    }
  }
  
}

//通过redux创建store对象⚠️
const store = createStore(reducer);

//获取更新后的state
store.subscribe(()=>{
  //每次state变化之后都会执行该函数
  console.log('state updated');
  console.log(store.getState());
})


//dispatch()   添加新todo到store⚠️
store.dispatch({type:'ADD_TODO', todo: 'buy milk'})
store.dispatch({type:'ADD_TODO', todo: 'sleep some more'})
store.dispatch({type:'ADD_POST', post: 'Egg hunt with yoshi'})