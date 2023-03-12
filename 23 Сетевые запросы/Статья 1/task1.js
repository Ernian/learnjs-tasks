async function getUsers(names) {
  let jobs = [];

  for (let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      successResponse => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      failResponse => {
        return null;
      }
    );
    jobs.push(job);
  }

  let results = await Promise.all(jobs);

  return results;
}

async function getUsers2(names) {
  const response = await Promise.all(names.map(name => (
    fetch(`https://api.github.com/users/${name}`)
      .then(
        response => {
          if (!response.ok) return null
          return response.json()
        },
        error => null
      )
  )))
  return response
}

const res = getUsers(['jhon', 'joe', 'kit', 'dan', 'never ever         ----------------ever'])
console.log(res)
const res2 = getUsers2(['jhon', 'joe', 'kit', 'dan', 'never ever         ----------------ever'])
console.log(res2)
