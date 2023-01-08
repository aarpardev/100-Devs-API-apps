document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let croaktail = document.querySelector('input').value
  croaktail.toLowerCase().replaceAll(` `, `-`).replaceAll(`'`,`-`)
  console.log(croaktail)
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${croaktail}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.drinks)
        let randomTails = Math.floor(Math.random() * data.drinks.length)
        document.querySelector('h2').innerText = data.drinks[randomTails].strDrink
        document.querySelector('.croak-thumb').src = data.drinks[randomTails].strDrinkThumb
        document.querySelector('.how-to').innerText = data.drinks[randomTails].strInstructions
      })
      .catch(err => {
          console.log(`error ${err}`)
          document.querySelector('h2').innerText = `Sorry. There's no drink like this.`
          document.querySelector('.croak-thumb').src = `https://www.thecocktaildb.com/images/ingredients/Cherries.png`
          document.querySelector('.how-to').innerText = ` `
      });
}