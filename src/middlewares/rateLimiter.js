const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    status: 'error',
    code: 429,
    message: 'Too many requests, please try again later.'
  },
  headers: true, // Send rate limit info in the response headers
});

module.exports = limiter;