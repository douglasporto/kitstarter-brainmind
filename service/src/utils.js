const jwt = require('jsonwebtoken');

function getUserId(context) {
  const Authorizarion = context.request.get('Authorization');
  if (Authorizarion) {
    const token = Authorizarion.replace('Bearer ', '');
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    return userId;
  }

  throw new Error('Not Authenticated!');
}

module.exports = {
  getUserId
};
