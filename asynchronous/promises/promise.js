// const p = new Promise((resolve, reject) => {
//   //kick off some async work
//   //....
//   setTimeout(() => {
//    // resolve(1)
//     reject(new Error("message"))
//   }, 2000)
// })
// p.then((result) => console.log("Result", result)).catch((err) =>
//   console.log("Error", err.message)
// )

console.log("Before")

getUser(1)
  .then((user) => getRepositories(user.githubName))
  .then((repo) => getCommits(repo[0]))
  .then((commits) => console.log("Commits", commits))
  .catch((err) => console.log("Error", err.messsage))

// const r= getRepositories(user.githubName)
// r.then(())

console.log("After")

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from database")
      resolve({ id: id, githubName: "Sanjeev" })
    }, 2000)
  })
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Spying the githup repos..")

      resolve(["repo1", "repo2", "repo3"])
    }, 2000)
  })
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting github API..")
      resolve(["commit"])
    }, 2000)
  })
}
