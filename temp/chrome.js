let shadowRoot1 = document.getElementById('keyin').attachShadow({mode: 'open'})
shadowRoot1.innerHTML = `
              <input id="actual-keyin" placeholder="yourname">
            `
document.querySelector("body > div:nth-child(2) > div:nth-child(2)").id= ("id-" + Math.floor(Math.random() * 11))
document.querySelector("body > div:nth-child(2) > div > p").innerText = ((Math.floor(Math.random() * 11)+1) +" + " + (Math.floor(Math.random() * 11)+1))
