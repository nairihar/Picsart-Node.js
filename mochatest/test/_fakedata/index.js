// load db



// require fake data

module.exports = {
  load: () => {
    db.Account.bulkInsert(fd.accounts),
    db.Plan.bulkInsert(fd.accounts),
    //...
  },
  unload: () => {

  }
}