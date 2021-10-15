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
        image.src = '../pictures/cara.jpg';
        image.alt = 'Heads'
      }
      if(side === 'Heads'){
        image.src = '../pictures/coroa.jpg';
        image.alt = 'Tails';
      }

      return image;
    },
  };