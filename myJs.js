function start() {
  const getSongAsyncAwait = async (resource) => {
    const response = await fetch(resource)
    const data = await response.json()

    if (!response.ok) {
      throw new Error('cannot fetch data')
    }

    return data
  }
  getSongAsyncAwait(
    'https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json',
  )
    .then((data) => {
      console.log('resolved:', data)

      document.getElementById('title-song').innerHTML = data['name']
      document.getElementById('artist-song').innerHTML =
        data['artists'][0]['name']
      document.getElementById('album-song').innerHTML = data['album']['name']
    })
    .catch((err) => {
      console.log('rejected:', err.message)
      alert('cannot fetch data!')
    })
}

document.getElementById('btn-submit').onclick = function () {
  alert('click!')
}
