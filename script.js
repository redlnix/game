//sleep function
const sleep = (ms) => Promise(resolve => setTimeout(resolve, ms));

const player = {
  x: 0,
  y: 0,
  speed: 1
}

const player1 = document.getElementById("player")

const keys = {}

const rect = player1.getBoundingClientRect()

//barriers (checking for collisions)
function checkCollision(e1, e2) { 
  const a = e1.getBoundingClientRect()
  const b = e2.getBoundingClientRect()

  return!(
    a.right < b.left ||
    a.left > b.right ||
    a.bottom < b.top ||
    a.top > b.bottom 
  )
}

//movement system
function updateplayer() { 
  player1.style.left = player.x + "px"
  player1.style.top = player.y + "px"
}  
document.addEventListener("keydown", (e) => keys[e.key] = true) 
document.addEventListener("keyup", (e) => keys[e.key] = false)
//


//GAMELOOP, IMPORTANT

function gameloop() {
//saving old coordinates to teleport back to if collision with wall is met
  const oldX = player.x
  const oldY = player.y
//

//movement system in the gameloop 
  if (keys["w"]) player.y -= player.speed
  if (keys["s"]) player.y += player.speed
  if (keys["a"]) player.x -= player.speed
  if (keys["d"]) player.x += player.speed
//  console.log(keys) only turn on for debugging!
//  
//updating player
  updateplayer()
//  



  requestAnimationFrame(gameloop)
}

gameloop()
