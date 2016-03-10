

/**
 * 让action有异步能力的中间件, 代码就下面几行
 */
export default function thunkMiddleware({ dispatch, getState }) {
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    return next(action);
  };
}
