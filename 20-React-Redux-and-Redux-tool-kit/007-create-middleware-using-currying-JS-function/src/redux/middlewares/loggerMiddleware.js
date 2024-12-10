//create currying function for store, next, action

// creating logger middleware
export const actionLoggerMiddleware = (store) => {
  return function (next) {
    return function (action) {
      console.log("[Action LOG] : " + action.type);
      next(action);
    };
  };
};

// creating logger middleware
export const dataLoggerMiddleware = (store) => {
  return function (next) {
    return function (action) {
      // log actions
      console.log(
        "[Data LOG] Before: " +
          action.type +
          " " +
          new Date().toString() +
          "\n\nStore:" +
          JSON.stringify(store.getState())
      );

      // call next middleware in pipeline.
      next(action);

      // log the modified state of app.
      console.log(
        "[Data LOG] After: " +
          action.type +
          " " +
          new Date().toString() +
          "\n\nStore:" +
          JSON.stringify(store.getState())
      );
    };
  };
};
