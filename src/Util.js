export const onMoveHandle = (direction) => {
  let pos;
  if (direction === "E" || direction === "W") {
    pos = document.getElementById("robo-toy").style.left;
  } else if (direction === "N" || direction === "S") {
    pos = document.getElementById("robo-toy").style.bottom;
  }

  let newPos;
  let p = pos.split("").slice(0, 3).join("");

  if (direction === "E" || direction === "N") {
    if (pos === "0px") {
      newPos = `100px`;
    } else if (p < 400) {
      newPos = `${Number(p) + 100}px`;
    }
  } else if (direction === "S" || direction === "W") {
    newPos = `${Number(p) - 100}px`;
  }

  if (direction === "E" || direction === "W") {
    document.getElementById("robo-toy").style.left = newPos;
  } else if (direction === "N" || direction === "S") {
    document.getElementById("robo-toy").style.bottom = newPos;
  }
};

export const setNewRightDirection = (currentDirection) => {
  let newDirection;

  if (currentDirection === "S") {
    newDirection = "W";
  }
  if (currentDirection === "W") {
    newDirection = "N";
  }
  if (currentDirection === "N") {
    newDirection = "E";
  }
  if (currentDirection === "E") {
    newDirection = "S";
  }
  return newDirection;
};

export const setNewLeftDirection = (currentDirection) => {
  let newDirection;

  if (currentDirection === "S") {
    newDirection = "E";
  }
  if (currentDirection === "E") {
    newDirection = "N";
  }
  if (currentDirection === "N") {
    newDirection = "W";
  }
  if (currentDirection === "W") {
    newDirection = "S";
  }
  return newDirection;
};

export const setNew = (inputValue) => {
  let newValue;
  if (inputValue < 0) {
    newValue = 0;
  } else if (inputValue > 0 && inputValue<5) {
    newValue = inputValue * 100;
  }

  return newValue;
};

export const placeToy = (x, y) => {
  document.getElementById("robo-toy").style.left = `${x}px`;
  document.getElementById("robo-toy").style.bottom = `${y}px`;
};

export const checkReport = (dir) =>{

    let x= document.getElementById("robo-toy").style.left.split("").slice(0, 3).join("");
    let y = document.getElementById("robo-toy").style.bottom.split("").slice(0, 3).join("");
    if(x=='0px'){
        x=0
    }
    if(y=='0px'){
        y=0
    }

    return `Report : ${x}, ${y}, ${dir}`
}