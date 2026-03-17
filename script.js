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

//check for collisions
const walls = document.querySelectorAll(".wall")
walls.forEach(wall => {
  if (checkCollision(player1, wall)) {
    player.x = oldX
    player.y = oldY
    updateplayer()
  }
})
//
//not letting player leave the general hub area
const room = document.getElementById("hub")
if (player.x < 0) player.x = 0
if (player.y < 0) player.y = 0
if (player.x > hub.offsetWidth - 30) player.x = room.offsetWidth - 30
if (player.y > hub.offsetHeight - 30) player.y = room.offsetHeight - 30

  requestAnimationFrame(gameloop)
//
}

gameloop()
