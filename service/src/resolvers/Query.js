const { getUserId } = require('./../utils');

function user(_, args, ctx, info) {
  const userId = getUserId(ctx);

  return ctx.db.query
    .user(
      {
        where: {
          id: userId
        }
      },
      info
    )
    .then(user => {
      console.log('User: ', user);
      return user;
    });
}

module.exports = {
  user
};
