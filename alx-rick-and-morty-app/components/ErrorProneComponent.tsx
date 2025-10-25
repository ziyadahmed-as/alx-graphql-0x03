import React from "react";

const ErrorProneComponent: React.FC = () => {
  throw new Error("Testing Sentry error capture!");
};

export default ErrorProneComponent;
