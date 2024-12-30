let comparr = ["./images/rock.png",
  "./images/paper.jpeg",
  "./images/scissor.jpg"

]


const forRock = (ran) => {

  let win = document.getElementById("winner");

  if (comparr[ran] === "./images/rock.png") {
    win.innerHTML = `<h2> TIE!!</h2>`
  }
  else if (comparr[ran] == "./images/paper.jpeg") {
    win.innerHTML = `<h2> YOU LOST!!</h2>`
  }
  else {
    win.innerHTML = `<h2> YOU Won!!</h2>`
  
  }

}
const forPaper = (ran) => {

  let win = document.getElementById("winner");


  if (comparr[ran] === "./images/paper.jpeg") {
    win.innerHTML = `<h2> TIE!!</h2>`
  }
  else if (comparr[ran] === "./images/scissor.jpg") {
    win.innerHTML = `<h2> YOU LOST!!</h2>`
  }
  else {
    win.innerHTML = `<h2> YOU Won!!</h2>`
    celeb();
  }

}
const forScissors = (ran) => {

  let win = document.getElementById("winner");
 


  if (comparr[ran]=== "./images/scissor.jpg") {
    win.innerHTML = `<h2> TIE!!</h2>`
  }
  else if (comparr[ran]==="./images/rock.png") {
    win.innerHTML = `<h2> YOU LOST!!</h2>`
  }
  else {
    win.innerHTML = `<h2> YOU Won!!</h2>`
    celeb();
  }
}

const celeb = () => {
  const count = 200,
    defaults = {
      origin: { y: 0.7 },
    };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

let response = (choice) => {
  let s = "";
  let ran = Math.floor(Math.random() * 3);

  let logo = document.getElementById('compchoice');
  s = s + ` <img src=${comparr[ran]} alt="">`
  logo.innerHTML = s;
  setTimeout(()=>{
    logo.innerHTML=`<img src="./images/robot.jpg" alt="">`;

  },2000)
  if (choice == 'rock') {
    forRock(ran);
  }
  else if (choice == 'paper') {
    forPaper(ran);
  }
  else {
    forScissors(ran);
  }

};
