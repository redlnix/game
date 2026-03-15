//sleep function
const sleep = (ms) => Promise(resolve => setTimeout(resolve, ms));

const player = {
  x: 0,
  y: 0,
  speed: 1
}

const block = {
  x: 500,
  y: 250,
}

const player1 = document.getElementById("player")

const keys = {}

const block1 = document.getElementById("block")


//movement system
function updateplayer() { 
  player1.style.left = player.x + "px"
  player1.style.top = player.y + "px"
}  
document.addEventListener("keydown", (e) => keys[e.key] = true) 
document.addEventListener("keyup", (e) => keys[e.key] = false)
function gameloop() {
  if (keys["w"]) player.y -= player.speed
  if (keys["s"]) player.y += player.speed
  if (keys["a"]) player.x -= player.speed
  if (keys["d"]) player.x += player.speed
//  console.log(keys) only turn on for debugging!
  updateplayer()
  requestAnimationFrame(gameloop)
}
//movement system

gameloop()
