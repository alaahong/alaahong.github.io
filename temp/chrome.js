let shadowRoot1 = document.getElementById('keyin').attachShadow({mode: 'open'})
shadowRoot1.innerHTML = `
              <input id="actual-keyin" placeholder="yourname">
            `
let exp = ['+','-','*','/']
let mark = exp[Math.floor(Math.random() * 3)]
document.querySelector("body > div:nth-child(3) > div:nth-child(3)").id= ("id-" + Math.floor(Math.random() * 11))
document.querySelector("body > div:nth-child(3) > div > p").innerText = ((Math.floor(Math.random() * 11)+1) + mark + (Math.floor(Math.random() * 11)+1))
