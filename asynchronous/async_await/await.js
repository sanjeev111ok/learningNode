console.log("Before")

async function displayCommits() {
  try {
    const user = await getUser(1)
    const repo = await getRepositories(user.githubName)
    const commits = await getCommits(repo[0])
    console.log(commits)
  } catch (err) {
    console.log("Error", err.message)
  }
}
displayCommits()

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
