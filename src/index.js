

/**
 * 让action有异步能力的中间件, 代码就下面几行
 */
export default function thunkMiddleware({ dispatch, getState }) {
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    // 这里的next其实是store.dispatch(或者包装过的store.dispatch即其它中间件的action=>{}这个函数(看传入的参数都是action就好理解))
    // redux/applyMiddleware.js源码：  dispatch = compose(...chain)(store.dispatch)
    return next(action);
  };
}
