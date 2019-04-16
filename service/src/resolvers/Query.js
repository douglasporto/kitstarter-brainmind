function user (_, args, ctx, info) {
  return ctx.db.query.user({
    where: {
      id: args.id
    }
  }, info).then(user => {
    console.log('User: ', user)
    return user
  })
}

module.exports = {
  user
}
