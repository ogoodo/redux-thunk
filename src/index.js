

/**
 * 让action有异步能力的中间件, 代码就下面几行
 */
export default function thunkMiddleware({ dispatch, getState }) {
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    // 这里的next其实是store.dispatch(或者包装过的store.dispatch)
    // redux/applyMiddleware.js源码：  dispatch = compose(...chain)(store.dispatch)
    return next(action);
  };
}
