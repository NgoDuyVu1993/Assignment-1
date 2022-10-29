import express from 'express';

const Logger = (
  request: express.Request,
  response: express.Response,
  next: Function
): void => {
  const URL = request.url;
  console.log(`Connected to ${URL}!`);
  next();
};

export default Logger;
