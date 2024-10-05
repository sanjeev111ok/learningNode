console.log("Before")
getUser(1, (user) => {
  getRepositories(user.githubName, (repo) => {
    console.log("Repo", repo)
  })
})
console.log("After")

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from database")
    callback({ id: id, githubName: "Sanjeev" })
  }, 2000)
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Spying the githup repos..")

    callback(["repo1", "repo2", "repo3"])
  }, 2000)
}
