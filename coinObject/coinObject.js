const coin = {
    state: 0,
  
    flip: function randomThis() {
        let randomNumber = Math.random();
        return  this.state= Math.round(randomNumber);
    },
  
    toString: function coinSide() {
        if(this.state === 0){
            return "Heads";
        }else{
            return "Tails"
        }
    },
  
    toHTML: function createImage(side) {
      const image = document.createElement("img");
      
      if(side === 'Heads'){
        image.src = 'images/cara.jpg'
        image.alt = 'Heads'
      }
      if(side === 'Tails'){
        image.src = 'images/coroa.jpg';
        image.alt = 'Tails';
      }

      return image;
    },
  };

  function display20Flips() {
    const results = [];

    for(let i = 0; i < 20; i++){
      coin.flip();
      
      let status = coin.toString();
      
      results.push(status);

    }
    

    const body = document.getElementById('body')
    const div = document.createElement('div');

    div.innerText = 'Jogar Moeda 20 Vezes (string): '

    const p = document.createElement('p');

    for(let i = 0; i < results.length; i++ ){
      let contador = i + 1;
  
      p.innerText += contador + ': ' + results[i] + ' , ';
    }

    div.appendChild(p);

    body.appendChild(div);

    return results;
  }
  display20Flips();

  
  function display20Images() {
    const results = [];

    for(let i = 0; i < 20; i++){
      coin.flip();
      
      let status = coin.toString();
      
      let img = coin.toHTML(status);

      results.push(img);
    }

    const body = document.getElementById('body')
    const div = document.createElement('div');

    div.innerText = 'Jogar Moeda 20 Vezes (image): '

    for(let i = 0; i < results.length; i++ ){
      let contador = i + 1;
      let imgCoinSide = results[i];

      imgCoinSide.classList.add('coinSide');

      const divImg = document.createElement('div');

      divImg.innerText += contador + ': '
      divImg.appendChild(imgCoinSide);
    
      div.appendChild(divImg);
    }

    body.appendChild(div);

    return results;
  }

  display20Images()