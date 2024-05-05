import handleRandNbr from "./function.js";
import puzzleImg from "/0x0.png";

const hitBox = document.querySelector("#hitBox");
let hitNbr = 0;
hitBox.textContent = hitNbr;

const container = document.querySelector(".container");
let containerX = container.getBoundingClientRect().x;
let containerY = container.getBoundingClientRect().y;

const containerMask = document.querySelector(".container-mask");
containerMask.style.top = `${container.getBoundingClientRect().top - (document.querySelector("header").getBoundingClientRect().height)}px`;
addEventListener("resize", () => {
  containerX = container.getBoundingClientRect().x;
  containerY = container.getBoundingClientRect().y;
})

for (let i = 0; i < 9; i++) {
  const createContainerImg = document.createElement("div");
  createContainerImg.className = "container-img";
  createContainerImg.setAttribute("id", (i + 1));
  const image = document.createElement("img");
  image.src = puzzleImg;
  createContainerImg.appendChild(image);
  container.appendChild(createContainerImg);
}

const containerImg = document.querySelectorAll(".container-img");
const sizeContainerImg = containerImg[0].getBoundingClientRect().width;

const randNbr = handleRandNbr(containerImg.length);

const position = [
  `0px 0px`, 
  `${sizeContainerImg}px 0px`, 
  `${sizeContainerImg * 2}px 0px`, 
  `0px ${sizeContainerImg}px`, 
  `${sizeContainerImg}px ${sizeContainerImg}px`, 
  `${sizeContainerImg * 2}px ${sizeContainerImg}px`, 
  `0px ${sizeContainerImg * 2}px`, 
  `${sizeContainerImg}px ${sizeContainerImg * 2}px`, 
  `${sizeContainerImg * 2}px ${sizeContainerImg * 2}px`
];

const angle = [0, 90, 180, 270];

let toggle = false;
let idCurrent = 0;
let secondIdCurrent = 0;
let currentPosition = {
  x: 0,
  y: 0,
}
let currentSecondPosition = {
  x: 0,
  y: 0,
}

const img1 = document.getElementById("1");
const img2 = document.getElementById("2");
const img3 = document.getElementById("3");
const img4 = document.getElementById("4");
const img5 = document.getElementById("5");
const img6 = document.getElementById("6");
const img7 = document.getElementById("7");
const img8 = document.getElementById("8");
const img9 = document.getElementById("9");

let id1Style = window.getComputedStyle(img1);
let id2Style = window.getComputedStyle(img2);
let id3Style = window.getComputedStyle(img3);
let id4Style = window.getComputedStyle(img4);
let id5Style = window.getComputedStyle(img5);
let id6Style = window.getComputedStyle(img6);
let id7Style = window.getComputedStyle(img7);
let id8Style = window.getComputedStyle(img8);
let id9Style = window.getComputedStyle(img9);
console.log(id1Style);

let size = {
  id1: {
    x: img1.getBoundingClientRect().x - containerX,
    y: img1.getBoundingClientRect().y - containerY,
    rot: id1Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
  },
  id2: {
    x: img2.getBoundingClientRect().x - containerX,
    y: img2.getBoundingClientRect().y - containerY,
    rot: id2Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
  },
  id3: {
    x: img3.getBoundingClientRect().x - containerX,
    y: img3.getBoundingClientRect().y - containerY,
    rot: id3Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
  },
  id4: {
    x: img4.getBoundingClientRect().x - containerX,
    y: img4.getBoundingClientRect().y - containerY,
    rot: id4Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
  },
  id5: {
    x: img5.getBoundingClientRect().x - containerX,
    y: img5.getBoundingClientRect().y - containerY,
    rot: id5Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
  },
  id6: {
    x: img6.getBoundingClientRect().x - containerX,
    y: img6.getBoundingClientRect().y - containerY,
    rot: id6Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
  },
  id7: {
    x: img7.getBoundingClientRect().x - containerX,
    y: img7.getBoundingClientRect().y - containerY,
    rot: id7Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
  },
  id8: {
    x: img8.getBoundingClientRect().x - containerX,
    y: img8.getBoundingClientRect().y - containerY,
    rot: id8Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
  },
  id9: {
    x: img9.getBoundingClientRect().x - containerX,
    y: img9.getBoundingClientRect().y - containerY,
    rot: id9Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
  }
}

for (let index = 0; index < containerImg.length; index++) {
  containerImg[index].style.translate = position[randNbr[index]];
  containerImg[index].style.rotate = `${angle[Math.floor(Math.random() * angle.length)]}deg`;

  containerImg[index].addEventListener("click", (e) => {

    if (idCurrent === 0) {

      idCurrent = containerImg[index].getAttribute("id");
      containerImg[index].className = "container-img is-active";

      currentPosition.x = containerImg[index].getBoundingClientRect().x - containerX;
      currentPosition.y = containerImg[index].getBoundingClientRect().y - containerY;
      toggle = true;

    
    } else if (idCurrent === containerImg[index].getAttribute("id") && toggle) {
    
      let currentRotate = containerImg[index].style.rotate.replace("deg", "");
      containerImg[index].style.rotate = `${currentRotate - 90}deg`;

      toggle = false;
      idCurrent = 0;
      containerImg[index].className = "container-img";
      currentPosition.x = 0;
      currentPosition.y = 0;

      hitNbr++;
      hitBox.textContent = hitNbr;

      size = {
        id1: {
          x: img1.getBoundingClientRect().x - containerX,
          y: img1.getBoundingClientRect().y - containerY,
          rot: id1Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
        },
        id2: {
          x: img2.getBoundingClientRect().x - containerX,
          y: img2.getBoundingClientRect().y - containerY,
          rot: id2Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
        },
        id3: {
          x: img3.getBoundingClientRect().x - containerX,
          y: img3.getBoundingClientRect().y - containerY,
          rot: id3Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
        },
        id4: {
          x: img4.getBoundingClientRect().x - containerX,
          y: img4.getBoundingClientRect().y - containerY,
          rot: id4Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
        },
        id5: {
          x: img5.getBoundingClientRect().x - containerX,
          y: img5.getBoundingClientRect().y - containerY,
          rot: id5Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
        },
        id6: {
          x: img6.getBoundingClientRect().x - containerX,
          y: img6.getBoundingClientRect().y - containerY,
          rot: id6Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
        },
        id7: {
          x: img7.getBoundingClientRect().x - containerX,
          y: img7.getBoundingClientRect().y - containerY,
          rot: id7Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
        },
        id8: {
          x: img8.getBoundingClientRect().x - containerX,
          y: img8.getBoundingClientRect().y - containerY,
          rot: id8Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
        },
        id9: {
          x: img9.getBoundingClientRect().x - containerX,
          y: img9.getBoundingClientRect().y - containerY,
          rot: id9Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
        }
      }
    
    } else if (idCurrent !== 0 && secondIdCurrent === 0) {
    
      secondIdCurrent = containerImg[index].getAttribute("id");
      currentSecondPosition.x = containerImg[index].getBoundingClientRect().x - containerX;
      currentSecondPosition.y = containerImg[index].getBoundingClientRect().y - containerY;
      
      containerImg[idCurrent - 1].style.translate = `${currentSecondPosition.x}px ${currentSecondPosition.y}px`;
      containerImg[index].style.translate = `${currentPosition.x}px ${currentPosition.y}px`;
      
      containerImg[idCurrent - 1].className = "container-img";
      containerImg[index].className = "container-img";
      containerImg[idCurrent - 1].style.zIndex = 2;
      containerImg[index].style.zIndex = 2;
      hitNbr++;
      hitBox.textContent = hitNbr;
      
      setTimeout(() => {
        containerImg[idCurrent - 1].style.zIndex = 0;
        containerImg[index].style.zIndex = 0;
        idCurrent = 0;
        secondIdCurrent = 0;
        currentPosition.x = 0;
        currentPosition.y = 0;
        currentSecondPosition.x = 0;
        currentSecondPosition.y = 0;
      }, 600)

      size = {
        id1: {
          x: img1.getBoundingClientRect().x - containerX,
          y: img1.getBoundingClientRect().y - containerY,
          rot: id1Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
        },
        id2: {
          x: img2.getBoundingClientRect().x - containerX,
          y: img2.getBoundingClientRect().y - containerY,
          rot: id2Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
        },
        id3: {
          x: img3.getBoundingClientRect().x - containerX,
          y: img3.getBoundingClientRect().y - containerY,
          rot: id3Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
        },
        id4: {
          x: img4.getBoundingClientRect().x - containerX,
          y: img4.getBoundingClientRect().y - containerY,
          rot: id4Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
        },
        id5: {
          x: img5.getBoundingClientRect().x - containerX,
          y: img5.getBoundingClientRect().y - containerY,
          rot: id5Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
        },
        id6: {
          x: img6.getBoundingClientRect().x - containerX,
          y: img6.getBoundingClientRect().y - containerY,
          rot: id6Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
        },
        id7: {
          x: img7.getBoundingClientRect().x - containerX,
          y: img7.getBoundingClientRect().y - containerY,
          rot: id7Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
        },
        id8: {
          x: img8.getBoundingClientRect().x - containerX,
          y: img8.getBoundingClientRect().y - containerY,
          rot: id8Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
        },
        id9: {
          x: img9.getBoundingClientRect().x - containerX,
          y: img9.getBoundingClientRect().y - containerY,
          rot: id9Style.getPropertyValue('rotate').replace("deg", "").replace("-", "")
        }
      }
    }
    if (size.id1.x == 0 && size.id1.y == 0 && (parseInt(size.id1.rot) == 0 || parseInt(size.id1.rot) % 360 == 0) &&
        size.id2.x == 160 && size.id2.y == 0 && (parseInt(size.id2.rot) == 0 || parseInt(size.id2.rot) % 360 == 0) &&
        size.id3.x == 320 && size.id3.y == 0 && (parseInt(size.id3.rot) == 0 || parseInt(size.id3.rot) % 360 == 0) &&
        size.id4.x == 0 && size.id4.y == 160 && (parseInt(size.id4.rot) == 0 || parseInt(size.id4.rot) % 360 == 0) &&
        size.id5.x == 160 && size.id5.y == 160 && (parseInt(size.id5.rot) == 0 || parseInt(size.id5.rot) % 360 == 0) &&
        size.id6.x == 320 && size.id6.y == 160 && (parseInt(size.id6.rot) == 0 || parseInt(size.id6.rot) % 360 == 0) &&
        size.id7.x == 0 && size.id7.y == 320 && (parseInt(size.id7.rot) == 0 || parseInt(size.id7.rot) % 360 == 0) &&
        size.id8.x == 160 && size.id8.y == 320 && (parseInt(size.id8.rot) == 0 || parseInt(size.id8.rot) % 360 == 0) &&
        size.id9.x == 320 && size.id9.y == 320 && (parseInt(size.id9.rot) == 0 || parseInt(size.id9.rot) % 360 == 0)) {
      setTimeout(() => {
        for (let index = 0; index <= 900; index+=300) {
          setTimeout(() => {
            confetti({
              particleCount: 500,
              spread: 360
            })
          }, index)
        }
        setTimeout(() => {
          containerMask.style.scale = 1;
          containerMask.style.borderRadius = 0;
          const message = document.createElement("p");
          message.className = "message";
          message.textContent = "Bravo ! Clique pour rejouer.";
          containerMask.appendChild(message);
        }, 500)
        containerMask.addEventListener("click", () => {
          location.reload();
        })
      }, 500)
    }
  });
}