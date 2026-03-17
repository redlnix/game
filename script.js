const sleep = (ms) => Promise(resolve => setTimeout(resolve, ms)); //sleep function
const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")
const player1 = document.getElementById("player")
const oldX = player.x //saving old x and y in case of collisions
const oldY = player.y

const player = {
  x: 0,
  y: 0,
  speed: 1,
  width: 30,
  height: 30
}

const walls = [
  {x: 200, y: 100, width: 20, height: 150 },
  {x: 400, y: 50, width: 150, height: 20,}
]

const keys = {}
document.addEventListener("keydown", (e) => keys[e.key] = true) 
document.addEventListener("keyup", (e) => keys[e.key] = false)
//end of constants


//new collision checker with canvas?
function checkCollision(a, b) {
  return !(
    a.x + a.width < b.x ||
    a.x           > b.x + b.width ||
    a.y + a.height < b.y ||
    a.y           > b.y + b.height 
  )
}

//movement system
function updateplayer() { 
  player1.style.left = player.x + "px"
  player1.style.top = player.y + "px"
}  

//GAMELOOP, IMPORTANT

function gameloop() {
//movement system in the gameloop 
  if (keys["w"]) player.y -= player.speed
  if (keys["s"]) player.y += player.speed
  if (keys["a"]) player.x -= player.speed
  if (keys["d"]) player.x += player.speed
//  console.log(keys) only turn on for debugging!

//check for collisions  
walls.forEach(wall => {
  if (checkCollision(player, wall)) {
    player.x = oldX
    player.y = oldY
  }
})

updateplayer()
  

requestAnimationFrame(gameloop)

}
//end of functions





gameloop()
