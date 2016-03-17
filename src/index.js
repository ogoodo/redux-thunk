

/**
 * 让action有异步能力的中间件, 代码就下面几行
 */
export default function thunkMiddleware({ dispatch, getState }) {
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    // 调用其它中间件(即其他中间件的action=>{}这个函数), 如果是最后一个中间件next其实就是store.dispatch(看下面源码就知道)
    // redux/applyMiddleware.js源码：  dispatch = compose(...chain)(store.dispatch)
    return next(action);
  };
}
