const genericErrorHandler = (error) => {
  // log error
  throw new Error(error);
};

export { 
  genericErrorHandler 
};

export default {
  genericErrorHandler
};