// OpenWhyd API Test
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const country = document.querySelector('#country').value
  // Get some data!!
  const url = `https://date.nager.at/api/v3/publicholidays/2022/${country}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        for (let i = 0;i < data.length;i++) {
          if (data[i].global == false) {
            const li = document.createElement('li')
            li.textContent = JSON.stringify(data[i].name)
            document.querySelector('ul').appendChild(li)
          }
        }
          
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}