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
      console.log("[Date LOG] : " + new Date().toString());

      // call next middleware in pipeline.
      next(action);
    };
  };
};
