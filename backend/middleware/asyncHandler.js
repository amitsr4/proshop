const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;

// const asyncHandler = (fn) => - asyncHandler is being defined as a function that takes
//  a function fn as its argument. This fn is expected to be an Express middleware function,
//   that is, a function that takes (req, res, next) as its arguments.

// (req, res, next) => - This is the function that is returned by asyncHandler.
// It's another function that takes three arguments: req (the request),
// res (the response), and next (the next middleware function). This is the function that Express.js will call when a request is received.

// Promise.resolve(fn(req, res, next)).catch(next);
//  - Here's where fn is called with req, res, and next as its arguments.
//   Then, Promise.resolve is used to handle the result of fn,
//    which is expected to be a Promise because fn is an asynchronous function.
//    If the Promise is rejected (meaning fn threw an error),
//     .catch(next) will catch the error and call next(error),
//     passing the error to the next middleware function in Express.
