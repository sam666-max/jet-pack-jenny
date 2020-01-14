enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy,
    platform,
    fuel
}
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Enemy, function (sprite, otherSprite) {
    gameover = 1
    game.over()
})
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.platform, function (sprite, otherSprite) {
    ground = 1
})
let jet = 0
let difficulty = 0
let ground = 0
let gameover = 0
music.setVolume(255)
gameover = 0
music.magicWand.play()
scene.setBackgroundImage(img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 8 8 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 8 2 2 2 1 1 1 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 1 1 1 1 1 1 1 1 1 2 2 1 1 1 1 2 2 2 2 2 2 2 2 2 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 2 2 8 8 8 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 1 1 1 1 1 1 2 2 2 2 2 2 1 1 1 2 1 1 1 1 1 1 1 1 8 8 8 8 8 2 2 2 2 2 2 1 1 1 1 1 1 2 2 2 2 1 1 1 2 2 8 8 2 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 5 8 8 8 8 2 2 1 1 1 1 2 2 8 8 8 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 2 8 8 2 2 2 2 2 2 1 1 1 1 1 1 1 1 2 2 2 2 1 1 1 2 2 8 2 2 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 1 1 1 1 2 8 8 8 8 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 2 2 2 2 1 1 1 2 2 8 2 2 2 1 1 1 1 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 1 1 1 1 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 1 1 1 8 8 8 8 8 2 2 1 1 1 1 1 1 1 1 2 2 1 1 1 1 8 2 2 2 2 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 2 2 2 2 2 1 1 1 1 1 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 1 1 1 8 8 8 8 8 2 2 1 1 1 1 1 1 2 2 2 2 1 1 1 1 2 2 2 2 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 1 1 1 2 2 2 2 1 1 1 1 1 1 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 8 8 8 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 1 1 1 8 8 8 8 8 2 1 1 1 1 1 1 1 2 2 2 2 2 1 1 1 1 2 2 2 1 1 1 1 1 2 2 2 2 2 2 2 8 8 2 2 1 1 1 2 2 1 1 1 1 1 1 1 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 1 1 1 2 2 8 8 2 1 1 1 1 1 1 1 1 2 2 2 8 2 1 1 1 1 2 2 1 1 1 1 1 2 2 2 8 8 8 8 8 8 8 2 1 1 1 1 1 1 1 1 1 1 1 1 2 2 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 1 1 1 1 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 1 1 1 2 2 2 2 1 1 1 1 1 1 1 1 1 2 2 2 8 2 2 1 1 1 2 2 1 1 1 1 2 2 2 8 8 8 8 8 8 8 8 2 1 1 1 1 1 1 1 1 1 1 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 1 1 1 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 1 1 1 2 2 2 1 1 1 1 1 1 2 1 1 1 2 2 8 8 8 2 1 1 1 2 2 1 1 1 1 2 2 2 8 8 8 8 8 8 8 8 2 1 1 1 1 1 1 1 1 1 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 1 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 1 1 1 2 2 1 1 1 1 1 1 2 2 1 1 1 2 2 8 8 8 2 1 1 1 2 2 1 1 1 2 2 2 2 8 8 2 2 2 2 2 8 2 1 1 1 1 1 1 1 1 1 1 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 8 8 2 2 2 2 2 2 1 1 1 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 1 1 1 1 1 1 1 1 1 1 2 2 2 1 1 1 2 2 2 2 2 2 1 1 1 1 2 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 2 1 1 1 1 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 2 1 1 1 1 2 2 2 2 8 8 8 8 2 2 2 2 2 1 1 1 2 2 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 8 8 8 2 2 1 1 1 1 1 1 1 1 2 2 8 2 2 1 1 1 2 2 2 2 2 2 1 1 1 1 2 1 1 1 1 2 2 2 2 2 2 1 1 1 1 2 2 1 1 1 2 2 2 2 1 1 1 1 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 2 2 1 1 1 1 1 2 8 8 8 8 2 2 2 2 8 8 2 1 1 1 2 2 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 8 8 8 2 2 1 1 1 1 1 1 1 1 2 8 8 2 2 1 1 1 2 1 1 1 1 1 1 1 1 1 2 1 1 1 1 1 2 2 2 2 1 1 1 1 1 2 2 1 1 1 2 2 2 2 1 1 1 1 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 2 2 2 2 2 1 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 1 1 1 2 2 1 1 1 1 2 2 8 8 2 1 1 1 2 2 8 8 8 8 8 2 2 2 2 1 1 1 1 1 1 2 2 8 8 2 2 1 1 1 1 1 2 2 2 8 8 8 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 1 1 1 1 1 2 2 2 1 1 1 1 1 2 2 1 1 1 2 2 2 2 1 1 1 1 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 2 2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 8 8 2 1 1 1 2 2 8 8 8 8 2 2 1 1 1 1 1 1 1 1 1 2 2 8 8 8 2 1 1 1 2 2 2 2 8 8 8 8 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 1 1 1 2 2 8 2 2 1 1 1 1 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 2 2 8 8 8 2 1 1 1 1 1 1 1 1 1 1 2 2 8 8 2 1 1 1 1 2 8 8 8 8 2 2 1 1 1 1 1 1 1 1 1 2 2 8 8 8 2 1 1 1 2 2 2 2 8 8 8 8 2 2 1 1 1 1 1 1 2 2 2 2 1 1 1 1 2 2 1 1 1 1 1 1 1 1 1 1 2 8 2 1 1 1 1 2 2 8 2 2 1 1 1 1 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 2 2 1 1 1 1 1 1 1 1 2 2 1 1 1 1 1 2 8 8 8 2 2 1 1 1 1 1 1 1 1 1 2 2 8 8 2 1 1 1 1 2 8 8 8 8 2 2 1 1 1 1 1 1 2 2 2 2 2 8 8 8 2 1 1 1 2 2 2 2 8 8 8 8 2 2 1 1 1 2 2 2 2 2 2 2 1 1 1 1 2 2 2 2 1 1 1 1 1 1 1 2 2 8 2 1 1 1 1 2 2 8 8 2 1 1 1 1 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 2 1 1 1 1 1 1 2 2 2 2 2 1 1 1 1 1 1 8 8 8 8 2 2 2 1 1 1 1 1 2 2 2 8 8 8 2 1 1 1 1 2 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 8 8 8 8 2 1 1 1 2 2 2 2 8 8 8 8 2 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 2 8 2 2 2 2 2 2 2 2 2 2 2 8 2 1 1 1 1 2 2 8 8 2 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 2 1 1 1 1 1 1 2 2 2 2 2 2 1 1 1 1 1 2 8 8 8 2 2 2 1 1 1 2 2 2 8 8 8 8 8 2 2 1 1 1 2 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 8 8 8 8 8 2 1 1 1 2 2 2 2 8 8 8 8 2 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 2 8 8 2 2 2 2 2 2 2 2 8 8 8 2 2 2 2 2 2 2 8 8 2 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 2 1 1 1 1 2 2 2 2 2 2 8 2 2 1 1 1 1 1 2 8 8 8 2 2 1 1 1 2 8 8 8 8 8 8 8 2 2 1 1 1 2 8 8 8 8 8 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 2 1 1 1 2 2 2 2 8 8 8 8 2 1 1 1 1 2 2 8 8 2 2 2 2 2 2 2 2 8 8 8 8 2 2 2 2 2 2 8 8 8 8 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 2 2 2 2 2 2 2 8 8 8 8 8 8 2 2 1 1 1 1 2 8 8 8 2 2 1 1 1 2 2 2 2 8 8 8 8 2 2 1 1 1 2 8 8 8 8 8 2 2 2 8 8 8 8 8 8 8 8 8 8 8 2 2 1 1 1 2 2 2 2 8 8 8 8 2 2 2 2 2 2 8 8 8 8 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 2 2 2 2 2 8 8 8 8 8 8 8 8 2 2 1 1 1 2 8 8 5 2 2 1 1 1 2 2 2 2 2 2 8 8 2 2 1 1 1 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 8 8 8 8 2 2 2 2 2 8 8 8 8 8 8 8 8 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 4 4 4 4 4 4 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 8 8 2 2 1 1 1 2 2 8 8 2 2 1 1 1 2 1 1 1 2 2 8 8 2 1 1 1 1 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 8 8 8 8 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 2 2 2 4 4 4 4 4 4 4 4 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 8 8 2 2 1 1 1 2 2 8 8 2 2 1 1 1 1 1 1 1 2 2 8 8 2 1 1 1 1 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 2 2 2 4 4 4 4 4 4 4 4 4 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 2 1 1 1 1 2 8 8 2 2 1 1 1 2 2 8 8 2 2 1 1 1 1 1 1 1 2 2 8 8 2 1 1 1 1 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 2 2 2 2 2 4 4 4 4 4 4 4 4 4 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 2 1 1 1 1 2 2 2 2 2 1 1 1 2 2 8 8 2 2 1 1 1 1 1 1 1 2 2 8 8 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 2 2 2 2 2 4 4 4 4 4 4 4 4 4 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 2 1 1 1 1 1 1 1 1 1 1 1 1 2 2 8 8 2 2 2 1 1 1 1 2 2 2 2 8 8 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 2 1 1 1 1 1 1 1 1 1 1 1 1 2 2 8 8 2 2 2 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 2 1 1 1 1 1 1 1 1 1 1 1 1 2 2 8 8 2 2 2 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 8 8 8 8 8 8 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 2 2 2 2 2 f f f f f f f f f f 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 8 8 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 8 8 8 8 8 9 9 9 9 8 8 8 8 8 8 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 2 2 2 f f f f f f f f f f f f 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 8 8 8 8 9 9 9 9 8 8 8 8 8 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 f f f f f f f f d d d d d d 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 9 9 9 8 8 8 8 8 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 f f f d d d d d d d d d d d 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 9 9 9 8 8 8 8 8 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 f f f d d 1 f f f d 1 f f f 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 8 8 8 8 8 9 9 9 8 8 8 8 9 9 9 9 8 8 8 8 9 9 9 9 8 8 8 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 f f f f d 1 f f f d 1 f f f 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 9 9 9 8 8 8 8 8 9 9 9 9 8 8 8 9 9 9 9 9 8 9 9 9 9 9 9 9 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 1 f f f f d 1 f f f d 1 f f f 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 8 8 9 9 9 9 a a a a 9 9 9 a a a a a 9 9 9 9 a a a a 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 f f f f d d d d d d d d d d 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 9 9 9 9 9 9 9 9 8 8 8 8 8 9 9 9 9 8 8 8 9 9 9 9 a a a a 9 9 9 a a a a a a 9 9 9 a a a a a 9 9 9 9 9 9 9 8 9 9 9 8 8 8 8 8 8 8 8 1 1 1 1 1 1 8 1 1 f f f d d d d d d d d d 1 1 8 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 8 5 8 8 8 9 9 9 9 9 9 9 9 9 8 8 8 8 8 9 9 9 8 8 8 8 8 9 9 9 a a a a 9 9 9 a a a a a a 9 9 9 a a a a a 8 9 9 9 9 9 9 8 9 9 9 8 8 8 8 8 8 8 1 1 2 2 2 2 1 1 8 1 1 1 d d d d d d d d d d 1 8 1 1 2 2 2 2 1 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 8 8 8 9 9 9 8 8 8 8 8 9 9 9 9 9 9 9 9 9 8 8 8 8 8 9 9 9 8 8 8 8 8 9 9 9 9 a a a 9 9 9 a a a a a a 9 9 9 9 a a a a 8 8 8 8 8 8 8 8 9 9 9 8 8 8 8 8 8 8 1 2 2 2 2 2 2 1 8 8 8 1 8 8 8 8 8 8 d d d d 1 8 1 2 2 2 2 2 1 1 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 8 8 8 8 9 9 9 9 8 9 9 9 9 9 8 8 8 8 8 9 9 9 8 8 8 8 8 9 9 9 9 a a a 9 9 9 a a a a a a 9 9 9 9 a a a a 8 8 8 8 8 8 8 8 9 9 9 8 8 8 8 8 8 8 1 2 2 2 2 2 2 1 8 8 8 1 8 8 8 8 8 8 8 8 8 8 1 8 1 2 2 2 2 2 2 1 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 8 8 8 8 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 9 9 9 8 8 8 8 8 8 9 9 9 a a a 9 9 9 a a a a a a 9 9 9 9 a a a a 8 8 8 8 8 8 8 8 9 9 9 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 8 8 8 1 8 8 8 8 8 8 8 8 8 8 1 8 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 8 8 8 8 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 9 9 9 8 8 8 8 8 8 9 9 9 a a a 9 9 9 a a a a a a 9 9 9 9 a a a a 8 8 8 8 8 8 8 8 9 9 9 8 8 8 8 8 8 8 1 2 2 2 2 2 2 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 1 1 1 2 2 2 2 2 2 1 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 8 8 8 8 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 9 9 9 8 8 8 8 8 8 9 9 9 a a a 9 9 9 a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 9 9 9 8 8 8 8 8 8 8 1 2 2 2 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 1 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 8 8 8 8 9 9 9 9 9 9 8 8 8 8 8 9 9 9 8 9 9 9 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 9 9 9 8 8 8 8 8 8 8 1 2 2 2 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 1 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 8 8 8 8 9 9 9 9 9 8 8 8 8 8 9 9 9 9 8 9 9 9 8 8 8 8 8 8 a a 5 5 5 a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 9 9 9 8 8 8 8 8 8 8 1 2 2 2 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 1 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 8 8 8 8 9 9 9 9 8 8 8 8 9 9 9 9 9 9 8 9 9 9 8 8 8 8 8 8 a a 5 5 5 a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 9 9 9 9 9 8 8 8 8 8 8 8 1 2 2 2 2 2 2 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 1 1 1 2 2 2 2 2 2 1 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 9 9 9 9 8 8 9 9 9 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 8 8 8 8 8 8 a a 5 5 5 a a a a a a a a a a a a a a a a a a 8 8 8 8 9 9 9 9 9 9 9 8 8 8 8 8 8 8 1 2 2 2 2 2 2 1 8 8 8 1 d d 8 8 8 8 8 8 d d 1 8 1 2 2 2 2 2 2 1 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 9 9 9 9 8 8 9 9 9 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 1 2 2 2 2 2 1 8 8 8 1 d d 8 8 8 8 8 8 d d 1 8 1 1 2 2 2 2 2 1 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 9 9 9 9 9 8 9 9 9 8 8 8 8 8 8 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 1 2 2 2 1 1 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 1 8 8 1 2 2 2 2 1 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a 5 5 5 a a a 5 5 5 a a a 5 5 5 a a a a 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a 5 5 5 a 5 5 5 a a 5 5 5 a a a a a a a 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 9 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 1 8 8 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a 5 5 5 a a a 5 5 5 a a a 5 5 5 a a a a 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a 5 5 5 a 5 5 5 a a 5 5 5 a a a a a 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 1 1 9 9 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 1 8 8 9 9 1 1 1 9 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a 5 5 5 a a a 5 5 5 a a a 5 5 5 a a a a 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a 5 5 5 a 5 5 5 a a 5 5 5 a a 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 1 1 9 9 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 1 8 8 9 9 9 1 9 9 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 1 1 9 9 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 1 8 8 9 9 9 1 9 9 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 a a 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c 9 9 9 9 9 8 8 8 8 1 1 3 3 3 1 1 3 3 3 1 1 8 8 8 9 9 9 9 9 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a 5 5 5 a a a 5 5 5 a a a 5 5 5 a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c 9 9 9 9 8 8 8 8 8 8 1 3 3 3 1 1 3 3 3 1 8 8 8 5 9 9 9 9 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a 5 5 5 a a a 5 5 5 a a a 5 5 5 a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c 9 9 9 9 8 8 8 8 8 8 1 3 3 3 1 1 3 3 3 1 8 8 8 8 8 9 9 9 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a 5 5 5 a a a 5 5 5 a a a 5 5 5 a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c 9 9 9 8 8 8 8 8 8 8 1 3 3 1 1 1 3 3 1 1 8 8 8 8 8 9 9 9 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c 9 9 8 9 8 8 8 8 8 1 1 1 1 8 1 1 1 1 8 8 8 8 8 8 9 9 9 8 9 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 5 5 a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 c c c c c c c c 9 9 c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 9 8 8 8 9 9 9 8 8 1 1 1 1 a 1 1 1 1 1 a 1 a a 1 a 1 a a a a 1 1 1 1 8 1 8 8 8 1 8 1 1 1 8 1 1 1 1 8 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 8 a a 5 5 5 a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 9 9 8 8 9 9 9 9 8 1 a a a a a a 1 a a a 1 a a 1 a 1 a a a a 1 a 8 1 8 1 8 8 8 1 8 1 8 8 8 1 8 8 1 8 1 8 8 1 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 8 8 8 8 8 a a a a a a a a a a a a 5 5 5 a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 9 9 9 9 9 9 9 8 8 1 a a a a a a 1 a a a 1 a a 1 a 1 a a a a 1 a a 1 a 1 a a a 1 a 1 a a a 1 a a 1 a 1 a 1 1 a 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 a a 5 5 5 a a a a a a a 5 5 5 a a a a a a a a a a a a a a a a a a c c c c c c c c c c 9 a a 9 9 a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 8 8 
8 9 9 9 9 9 9 9 8 8 1 1 1 1 a a a 1 a a a 1 a a 1 a 1 a a a a 1 a a 1 a 1 a a a 1 a 1 1 1 a a 1 1 a a 1 1 a 1 a 8 8 8 8 8 8 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 a a 5 5 5 a a a a a a a 5 5 5 a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 9 9 9 9 9 9 8 8 a a a 1 a a a 1 a a a 1 a a 1 a 1 a a a a 1 a a 1 a 1 a 1 a 1 a 1 a a a 1 a a 1 a 1 1 a 1 a 8 8 8 8 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 a a 5 5 5 a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 8 8 8 9 8 8 8 8 8 8 8 8 
8 8 9 9 9 9 9 8 8 8 a a a 1 a a a 1 a a a 1 a a 1 a 1 a a a a 1 a a 1 a 1 a 1 a 1 a 1 a a a 1 a a 1 a 1 a a 1 a 8 8 8 8 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c 9 c c a a 9 a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
9 9 9 9 9 8 8 8 8 8 1 1 1 1 a a a 1 a a a 1 1 1 1 a 1 1 1 1 a 1 1 1 1 a 1 1 a 1 1 a 1 1 1 a 1 1 1 1 a 1 1 1 1 a 8 8 8 8 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a 5 5 5 a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a 5 5 5 a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a 5 5 5 a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 5 5 5 a 5 5 5 a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 5 5 5 a 5 5 5 a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 5 5 5 a 5 5 5 a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a 5 5 5 a a 5 5 5 a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a 5 5 5 a a 5 5 5 a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a 5 5 5 a a 5 5 5 a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a 5 5 5 a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a 5 5 5 a a a a a 5 5 5 a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a 5 5 5 a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a 5 5 5 a a a a a 5 5 5 a a 5 5 5 a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a 5 5 5 a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a 5 5 5 a a a a a 5 5 5 a a 5 5 5 a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a 5 5 5 a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c 4 4 4 c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c 4 4 4 c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c 4 4 4 c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c 4 4 4 c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c 4 4 4 c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c 4 4 4 c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 4 4 c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 4 4 c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 4 4 c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c 4 4 4 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c b b b b b c c c c c a a a a a a a a a a a a a a a a a c c c c c c 4 4 4 c c c c c c c c c c c c c c c 4 4 4 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
c c c c 4 4 4 c c 4 4 4 c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c b b b b b c c c c c b b b b b a a a a a a a a a a a a c c c c c c 4 4 4 c c c c c c c c c c c c c c c 4 4 4 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
c c c c 4 4 4 c c 4 4 4 c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c b b b b b c c c c c b b b b b a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c 4 4 4 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
c c c c 4 4 4 c c 4 4 4 c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c b b b b b c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 4 4 c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c b b b b b c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c 4 4 4 c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c a a a a a a a a a b b b b b a a a a a c c c c c c c b b b b b c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c 4 4 4 c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b c c c c c b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c b b b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b b b c c c c c c c b b b b b c c c c c b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c b b b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b b b c c c c c c c b b b b b c c c c c b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c b b b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b b b c c c c c c c b b b b b c c c b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b c c c c c c c c c c c c c b b b b b b b b c c c c 
c b b b b 4 4 4 4 4 b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b 4 4 4 4 4 b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b c c c c c c c c c c c c c b b b b b b b b c c c c 
c b b b b 4 4 4 4 4 b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b 4 4 4 4 4 b b b b b b b b b b c c c c c b b b b b b b 4 4 4 4 4 b b b b b b b b c c c c c c c c c c b b b b c c c c c c c c c c c c c b b b b b b b b c c c c 
c b b b b 4 4 4 4 4 b b b b b b b b b b c c c c c b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 b b b b b b b b c c c c c b b b b 4 4 4 4 4 b b b b b b b b b b c c c c c b b b b b b b 4 4 4 4 4 b b b b b b b b c c c c c c c c c c b b b b c c c c c c c c c c c c c b b b b b b b b b b b b 
c b b b b 4 4 4 4 4 b b b b b b b b b b c c c c c b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 b b b b b b b b c c c c c b b b b 4 4 4 4 4 b b b b b b b b b b c c c c c b b b b b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b 
c b b b b 4 4 4 4 4 b b b b b b b b b b c c c c c b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 b b b b b b b b c c c c c b b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b 
c b b b b b b b b b b b b b b b b b b b c c c c c b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
c b b b b b b b b b b b b b b b b b b b c c c c c b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
c b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
`)
game.showLongText("Press A to Start. Avoid missiles, asteroids and electric things. Use  DPad and A to jetpack.", DialogLayout.Bottom)
info.setScore(0)
let fuel = 100
ground = 0
scene.setBackgroundImage(img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a 5 5 5 a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a 5 5 5 a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a 5 5 5 a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a 5 5 5 a a a 5 5 5 a a a 5 5 5 a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a 5 5 5 a 5 5 5 a a 5 5 5 a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a 5 5 5 a a a 5 5 5 a a a 5 5 5 a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a 5 5 5 a 5 5 5 a a 5 5 5 a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a 5 5 5 a a a 5 5 5 a a a 5 5 5 a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a 5 5 5 a 5 5 5 a a 5 5 5 a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a 5 5 5 a a a 5 5 5 a a a 5 5 5 a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a 5 5 5 a a a 5 5 5 a a a 5 5 5 a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a 5 5 5 a a a 5 5 5 a a a 5 5 5 a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a 5 5 5 a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a 5 5 5 a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a 5 5 5 a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a 5 5 5 a a a 5 5 5 a a a 5 5 5 a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a 5 5 5 a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a 5 5 5 a a a 5 5 5 a a a 5 5 5 a a a a a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a 5 5 5 a a a a a a a 5 5 5 a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a 5 5 5 a a a 5 5 5 a a a 5 5 5 a a a a a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a 5 5 5 a a a a a a a 5 5 5 a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a 5 5 5 a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a 5 5 5 a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a 5 5 5 a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a 5 5 5 a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 5 5 5 a 5 5 5 a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 5 5 5 a 5 5 5 a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 5 5 5 a 5 5 5 a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 8 8 8 8 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a 5 5 5 a a 5 5 5 a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a 5 5 5 a a 5 5 5 a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a 5 5 5 a a 5 5 5 a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a 5 5 5 a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a 5 5 5 a a a a a 5 5 5 a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a 5 5 5 a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a 5 5 5 a a a a a 5 5 5 a a 5 5 5 a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a 5 5 5 a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a 5 5 5 a a a a a 5 5 5 a a 5 5 5 a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a 5 5 5 a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c 4 4 4 c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c 4 4 4 c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c 4 4 4 c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c 4 4 4 c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c 4 4 4 c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c 4 4 4 c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 4 4 c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 4 4 c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 4 4 c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c 4 4 4 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c b b b b b c c c c c a a a a a a a a a a a a a a a a a c c c c c c 4 4 4 c c c c c c c c c c c c c c c 4 4 4 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
c c c c 4 4 4 c c 4 4 4 c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c b b b b b c c c c c b b b b b a a a a a a a a a a a a c c c c c c 4 4 4 c c c c c c c c c c c c c c c 4 4 4 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
c c c c 4 4 4 c c 4 4 4 c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c b b b b b c c c c c b b b b b a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c 4 4 4 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
c c c c 4 4 4 c c 4 4 4 c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c b b b b b c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 4 4 c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c b b b b b c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c 4 4 4 c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c a a a a a a a a a b b b b b a a a a a c c c c c c c b b b b b c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c 4 4 4 c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b c c c c c b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c b b b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b b b c c c c c c c b b b b b c c c c c b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c b b b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b b b c c c c c c c b b b b b c c c c c b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c b b b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b b b c c c c c c c b b b b b c c c b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b c c c c c c c c c c c c c b b b b b b b b c c c c 
c b b b b 4 4 4 4 4 b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b 4 4 4 4 4 b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b c c c c c c c c c c c c c b b b b b b b b c c c c 
c b b b b 4 4 4 4 4 b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b 4 4 4 4 4 b b b b b b b b b b c c c c c b b b b b b b 4 4 4 4 4 b b b b b b b b c c c c c c c c c c b b b b c c c c c c c c c c c c c b b b b b b b b c c c c 
c b b b b 4 4 4 4 4 b b b b b b b b b b c c c c c b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 b b b b b b b b c c c c c b b b b 4 4 4 4 4 b b b b b b b b b b c c c c c b b b b b b b 4 4 4 4 4 b b b b b b b b c c c c c c c c c c b b b b c c c c c c c c c c c c c b b b b b b b b b b b b 
c b b b b 4 4 4 4 4 b b b b b b b b b b c c c c c b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 b b b b b b b b c c c c c b b b b 4 4 4 4 4 b b b b b b b b b b c c c c c b b b b b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b 
c b b b b 4 4 4 4 4 b b b b b b b b b b c c c c c b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 b b b b b b b b c c c c c b b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b 
c b b b b b b b b b b b b b b b b b b b c c c c c b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
c b b b b b b b b b b b b b b b b b b b c c c c c b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
c b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
`)
let fuelicon = sprites.create(img`
. 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 . 
`, SpriteKindLegacy.fuel)
fuelicon.setPosition(10, 12)
let platform = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
b b b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b 
b b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b 
b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b b 
b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.platform)
let platform2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
b b b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b 
b b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b 
b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b b 
b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.platform)
let platform3 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
b b b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b 
b b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b 
b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b b 
b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.platform)
let platform4 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
b b b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b 
b b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b 
b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b b 
b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.platform)
let platform5 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
b b b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b 
b b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b 
b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b b 
b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.platform)
let platform6 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
b b b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b 
b b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b 
b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b b 
b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.platform)
let platform7 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
b b b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b 
b b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b 
b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b b 
b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.platform)
let platform8 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
b b b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b 
b b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b 
b b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b b 
b b 5 5 5 5 b b b b b b b b b b b b b 5 5 5 5 b b b b b b b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.platform)
let mySprite2 = sprites.create(img`
. . . . . . 4 4 4 . . . . . . . 
. . . . 2 2 4 4 4 4 . . . . . . 
. . . . 2 2 f f f f . . . . . . 
. . . . 2 f f d d d . . . . . . 
. . . . f f 1 f d 1 f . . . . . 
. 2 . . f d d d d d . . 2 . . . 
2 2 2 . f d d d d . . 2 2 2 . . 
2 2 2 . 8 8 8 8 8 8 . 2 2 2 . . 
1 1 1 2 8 8 8 8 8 8 2 1 1 1 . . 
2 2 2 2 8 8 8 8 8 8 2 2 2 2 . . 
2 2 2 . d 8 8 8 8 d . 2 2 2 . . 
2 2 2 . 8 8 8 8 8 8 . 2 2 2 . . 
. . . . 8 8 8 8 8 8 . . . . . . 
. . . . 8 8 8 8 8 8 . . . . . . 
. . . . 3 3 . . 3 3 . . . . . . 
. . . . 3 . . . 3 . . . . . . . 
`, SpriteKindLegacy.Player)
platform.x = 32
platform3.x = 96
platform5.x = 160
platform7.x = 224
platform.y = 105
platform3.y = 105
platform5.y = 105
platform7.y = 105
mySprite2.y = 60
mySprite2.x = 50
let asteroid = sprites.create(img`
. . . . . e e e e e e . . . . . 
. . . e e e e b b e e e . . . . 
. . e e e e e e e e e e e e . . 
. e e c c e e f f f c e e e e . 
e e e e e e e f c c e e e e e . 
e e e e b b e c e e e e e b e e 
e c e e e e e e e e e e e e e e 
e e e e e e e e e e f f f c e e 
e b e f c e e e e f f c c e e e 
e e e f c e e e e c c e b e e e 
e e e f f c e e e e e e b e e e 
e e e e e e e e e e b b b e e e 
. e e e e e e e e b b e e e e e 
. . . e e e c c e b e e e e . . 
. . . . e e e c e e e e e . . . 
. . . . . . e e e e . . . . . . 
`, SpriteKindLegacy.Enemy)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . b b 
. . . . . . . . . . . . b b b b 
. . . . . . . . . . . b b b 1 b 
. b b b b b b b b b b b 1 1 1 b 
b 1 1 1 1 1 1 1 1 1 b b b b b b 
. b b b b b b b b b b b 1 b b b 
. . . . . . . . . . . b b b 1 b 
. . . . . . . . . . . . b b b b 
. . . . . . . . . . . . . . b b 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.Enemy)
let electric = sprites.create(img`
. . . . . . . . 9 . . . . . . . 
. 9 . . . . . 9 . . . . . 9 . . 
9 . 9 . . . . . 9 . . . 9 9 . . 
. . . . 9 9 9 9 9 9 9 9 . . . 9 
. . . 9 9 9 9 9 9 1 9 9 9 . 9 . 
9 . 9 9 9 1 9 9 9 9 9 9 9 9 . . 
. . 9 9 1 9 9 9 9 9 9 1 9 9 . . 
. . 9 9 1 9 9 1 1 1 9 9 9 9 . . 
. 9 9 9 9 1 1 1 1 1 1 9 9 9 . 9 
. . 9 9 9 9 9 9 1 9 9 9 9 9 . . 
. . 9 9 1 9 1 9 1 9 1 9 9 9 . . 
9 . 9 9 9 9 9 9 1 9 9 9 9 9 9 . 
. . . 9 9 1 9 9 9 9 9 9 9 . . . 
. 9 . . 9 9 9 9 9 9 9 9 . 9 . . 
. . . . 9 . . . . . . . 9 . . . 
9 . . . . . . . 9 . . . . 9 . . 
`, SpriteKindLegacy.Enemy)
asteroid.x = 800
mySprite.x = 1000
electric.y = 106
electric.x = 500
forever(function () {
    if (gameover == 0) {
        if (ground == 0) {
            music.playTone(698, music.beat(BeatFraction.Sixteenth))
            mySprite2.setImage(img`
. . . . . . 4 4 4 4 . . . . . . 
. . . . 2 2 4 4 4 4 . . . . . . 
. . . . 2 2 f f f f . . . . . . 
. . . . 2 f f d d d . . . . . . 
. . . . f f 1 f d 1 f . . . . . 
. 2 . . f d d d d d . . 2 . . . 
2 2 2 . f d d d d . . 2 2 2 . . 
2 2 2 . 8 8 8 8 8 8 . 2 2 2 . . 
1 1 1 2 8 8 8 8 8 8 2 1 1 1 . . 
2 2 2 2 8 8 8 8 8 8 2 2 2 2 . . 
2 2 2 . d 8 8 8 8 d . 2 2 2 . . 
2 2 2 . 8 8 8 8 8 8 . 2 2 2 . . 
9 1 9 . 8 8 8 8 8 8 . 9 1 9 . . 
9 1 9 . 8 8 8 8 8 8 . 9 1 9 . . 
9 9 9 . 3 3 . . 3 3 . 9 9 9 . . 
. 9 . . 3 . . . 3 . . . 9 . . . 
`)
            pause(10)
            music.playTone(784, music.beat(BeatFraction.Sixteenth))
            mySprite2.setImage(img`
. . . . . . 4 4 4 4 . . . . . . 
. . . . 2 2 4 4 4 4 . . . . . . 
. . . . 2 2 f f f f . . . . . . 
. . . . 2 f f d d d . . . . . . 
. . . . f f 1 f d 1 f . . . . . 
. 2 . . f d d d d d . . 2 . . . 
2 2 2 . f d d d d . . 2 2 2 . . 
2 2 2 . 8 8 8 8 8 8 . 2 2 2 . . 
1 1 1 2 8 8 8 8 8 8 2 1 1 1 . . 
2 2 2 2 8 8 8 8 8 8 2 2 2 2 . . 
2 2 2 . d 8 8 8 8 d . 2 2 2 . . 
2 2 2 . 8 8 8 8 8 8 . 2 2 2 . . 
9 1 9 . 8 8 8 8 8 8 . 9 1 9 . . 
. 9 . . 8 8 8 8 8 8 . . 9 . . . 
. . . . 3 3 . . 3 3 . . . . . . 
. . . . 3 . . . 3 . . . . . . . 
`)
            pause(10)
        } else {
            music.playTone(349, music.beat(BeatFraction.Quarter))
            mySprite2.setImage(img`
. . . . . . 4 4 4 4 . . . . . . 
. . . . 2 2 4 4 4 4 . . . . . . 
. . . . 2 2 f f f f . . . . . . 
. . . . 2 f f d d d . . . . . . 
. . . . f f 1 f d 1 f . . . . . 
. 2 . . f d d d d d . . 2 . . . 
2 2 2 . f d d d d . . 2 2 2 . . 
2 2 2 . 8 8 8 8 8 8 . 2 2 2 . . 
1 1 1 2 8 8 8 8 8 8 2 1 1 1 . . 
2 2 2 2 8 8 8 8 8 8 2 2 2 2 . . 
2 2 2 d 8 8 8 8 8 d . 2 2 2 . . 
2 2 2 . 8 8 8 8 8 8 . 2 2 2 . . 
. . . . 8 8 8 8 8 8 . . . . . . 
. . . 3 8 8 8 8 8 8 . . . . . . 
. . . . 3 3 . . 3 3 . . . . . . 
. . . . . . . . 3 3 3 . . . . . 
`)
            fuel += 10
            pause(150)
            music.playTone(392, music.beat(BeatFraction.Quarter))
            mySprite2.setImage(img`
. . . . . . 4 4 4 4 . . . . . . 
. . . . 2 2 4 4 4 4 . . . . . . 
. . . . 2 2 f f f f . . . . . . 
. . . . 2 f f d d d . . . . . . 
. . . . f f 1 f d 1 f . . . . . 
. 2 . . f d d d d d . . 2 . . . 
2 2 2 . f d d d d . . 2 2 2 . . 
2 2 2 . 8 8 8 8 8 8 . 2 2 2 . . 
1 1 1 2 8 8 8 8 8 8 2 1 1 1 . . 
2 2 2 2 8 8 8 8 8 8 2 2 2 2 . . 
2 2 2 . d 8 8 8 8 8 d 2 2 2 . . 
2 2 2 . 8 8 8 8 8 8 . 2 2 2 . . 
. . . . 8 8 8 8 8 8 . . . . . . 
. . . . 8 8 8 8 8 8 3 . . . . . 
. . . 3 3 3 . . 3 3 . . . . . . 
. . . 3 3 . . . . . . . . . . . 
`)
            pause(150)
        }
    }
})
forever(function () {
    if (controller.right.isPressed() && mySprite2.x < 150) {
        mySprite2.x += 1
    }
})
forever(function () {
    asteroid.startEffect(effects.trail, 1000)
    asteroid.setImage(img`
. . . . . e e e e e e . . . . . 
. . . e e e e b b e e e . . . . 
. . e e e e f e e c e e e e . . 
. e e e c e f e c c e e e e e . 
e e e c e e f f c e e b e e e . 
e e e c b b e f e e e e e e e e 
e c e e e e e f e e e e e e e e 
e c e e e e e e e e e e e e b e 
e b e e e e e e e e e e e e e e 
e e e f e e e e e e e e f e e e 
e e e f f f e e e e e f f e e e 
e e e e e e f e c c f f e e e e 
. e e e e e e e e b b e e e e e 
. . . e e e c e e b e e e e . . 
. . . . e e e e e e e e e . . . 
. . . . . . e e e e . . . . . . 
`)
    pause(100)
    asteroid.setImage(img`
. . . . . e e e e e e . . . . . 
. . . e e e e e e e e e . . . . 
. . e e e e e e e e e e e e . . 
. e e c c e e f f f c e e e e . 
e e e e e e e f c c e e e e e . 
e e e e e e e c e e e e e b e e 
e c e e e e e e e e e e e e e e 
e e e e e e e e e e f f f c e e 
e e e f c e e e e f f c c e e e 
e e e f c e e e e c c e b e e e 
e e e f f c e e e e e e b e e e 
e e e e e e e e e e b b b e e e 
. e e e e e e e e b b e e e e e 
. . . e e e c c e b e e e e . . 
. . . . e e e c e e e e e . . . 
. . . . . . e e e e . . . . . . 
`)
    pause(100)
    asteroid.setImage(img`
. . . . . e e e e e e . . . . . 
. . . e e e e b b e e e . . . . 
. . e e e e e e e e e e e e . . 
. e e e e e e e e e c e e e e . 
e e e e e e f f f c e e e e e . 
e e e e b b f c e e e e e b e e 
e c c c e e f e e e e e e e e e 
e e e c e e e e e e e e e e e e 
e b e f e e e e e e e e e e e e 
e e e f e e e e e e e e f e e e 
e e e f f b b e e e e e f e e e 
e e e e b b e e e e e f f e e e 
. e e e b e e e e e e e e e e e 
. . . e e e e e e e e e e e . . 
. . . . e e e e e e e e e . . . 
. . . . . . e e e e . . . . . . 
`)
    pause(100)
})
forever(function () {
    if (info.score() > 0) {
        difficulty = 0
    }
    if (info.score() > 20) {
        difficulty = 1
    }
    if (info.score() > 40) {
        difficulty = 2
    }
    if (info.score() > 60) {
        difficulty = 3
    }
    if (info.score() > 80) {
        difficulty = 4
    }
    if (info.score() > 100) {
        difficulty = 6
    }
})
forever(function () {
    if (jet == 1) {
        ground = 0
        fuel += -1
        pause(20)
        mySprite2.startEffect(effects.spray, 50)
        mySprite2.vy += -30
    } else {
        if (ground == 1) {
            mySprite2.vy = 0
        } else {
            mySprite2.vy = 100
        }
    }
})
forever(function () {
    mySprite.startEffect(effects.warmRadial, 100)
    mySprite.x += -4 - difficulty
    if (mySprite.x < -10) {
        pause(Math.randomRange(0, 2000))
        mySprite.x = Math.randomRange(300, 600)
        mySprite.y = Math.randomRange(20, 110)
    }
})
forever(function () {
    electric.setImage(img`
. . . . . . . . 9 . . . . . . . 
. 9 . . . . . 9 . . . . . 9 . . 
9 . 9 . . . . . 9 . . . 9 9 . . 
. . . . 9 9 9 9 9 9 9 9 . . . 9 
. . . 9 9 9 9 9 9 1 9 9 9 . 9 . 
9 . 9 9 9 1 9 9 9 9 9 9 9 9 . . 
. . 9 9 1 9 9 9 9 9 9 1 9 9 . . 
. . 9 9 1 9 9 1 1 1 9 9 9 9 . . 
. 9 9 9 9 1 1 1 1 1 1 9 9 9 . 9 
. . 9 9 9 9 9 9 1 9 9 9 9 9 . . 
. . 9 9 1 9 1 9 1 9 1 9 9 9 . . 
9 . 9 9 9 9 9 9 1 9 9 9 9 9 9 . 
. . . 9 9 1 9 9 9 9 9 9 9 . . . 
. 9 . . 9 9 9 9 9 9 9 9 . 9 . . 
. . . . 9 . . . . . . . 9 . . . 
9 . . . . . . . 9 . . . . 9 . . 
`)
    pause(100)
    electric.setImage(img`
. . . . . . . . . . 9 9 . . . . 
. . . . 9 . . . . 9 . . . . . . 
. . 9 . . 9 . . . 9 . . 9 . . . 
. . 9 . 9 9 9 9 9 9 9 9 . . . . 
9 . . 9 9 9 9 1 9 9 9 9 9 . . 9 
. 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 
. . 9 9 9 1 9 9 9 9 9 1 1 9 . . 
. 9 9 1 9 9 9 1 1 9 9 1 9 9 . . 
9 . 9 1 9 9 1 1 1 9 9 9 9 9 . . 
. . 9 1 9 9 9 9 9 9 9 9 1 9 . . 
9 . 9 9 9 1 9 9 9 9 9 9 9 9 9 . 
. 9 9 9 9 9 9 9 9 1 9 9 9 9 . . 
. 9 . 9 9 9 9 9 9 9 9 9 9 . . . 
. . . . 9 9 9 1 9 9 9 9 9 . . 9 
. . . 9 9 . . . 9 . . . 9 9 . . 
. . . 9 . . . 9 . . . . . . . . 
`)
    pause(100)
    electric.setImage(img`
9 . . . . . . . . . . . . . 9 . 
. . . . . 9 . . 9 9 . . 9 9 . . 
. 9 . . . . . . 9 . . . 9 9 . . 
. 9 9 . 9 9 9 9 9 9 9 9 . . . . 
. . 9 9 9 9 1 9 9 9 9 1 9 . 9 . 
. . 1 9 9 9 1 1 9 9 9 9 9 9 . . 
. 9 9 9 9 9 9 9 9 9 9 1 9 9 9 . 
. 9 1 9 9 1 9 9 1 1 9 9 9 9 . . 
9 . 9 9 9 9 9 1 9 1 9 1 1 9 . . 
. . 9 1 9 9 9 9 9 9 9 9 1 9 . . 
. . 9 9 9 9 1 9 9 9 1 9 9 9 . . 
9 . 9 9 9 1 1 9 9 1 9 1 9 9 . . 
. . . 9 9 9 9 9 9 1 9 9 9 . 9 . 
. 9 9 . 9 9 9 9 9 9 9 9 9 . . 9 
9 9 . 9 . 9 9 . . . . 9 . . . . 
. . . . . 9 . . . . . . 9 . . . 
`)
    pause(100)
})
forever(function () {
    if (fuel > 100) {
        fuel = 100
    }
    if (fuel < 0) {
        fuel = 0
    }
})
forever(function () {
    if (fuel <= 0) {
        fuelicon.setImage(img`
. 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 . 
`)
    }
    if (fuel > 0) {
        fuelicon.setImage(img`
. 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 
1 1 1 2 2 1 1 1 
1 1 1 2 2 1 1 1 
1 1 1 2 2 1 1 1 
1 1 1 2 2 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 2 2 1 1 1 
1 1 1 2 2 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 1 
1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 . 
`)
    }
    if (fuel > 10) {
        fuelicon.setImage(img`
. 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 
1 1 1 2 2 1 1 1 
1 1 1 2 2 1 1 1 
1 1 1 2 2 1 1 1 
1 1 1 2 2 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 2 2 1 1 1 
1 1 1 2 2 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 1 
1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 . 
`)
    }
    if (fuel > 20) {
        fuelicon.setImage(img`
. 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 1 
1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 . 
`)
    }
    if (fuel > 30) {
        fuelicon.setImage(img`
. 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 . 
`)
    }
    if (fuel > 40) {
        fuelicon.setImage(img`
. 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 . 
`)
    }
    if (fuel > 50) {
        fuelicon.setImage(img`
. 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 . 
`)
    }
    if (fuel > 60) {
        fuelicon.setImage(img`
. 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 . 
`)
    }
    if (fuel > 70) {
        fuelicon.setImage(img`
. 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 . 
`)
    }
    if (fuel > 80) {
        fuelicon.setImage(img`
. 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 . 
`)
    }
    if (fuel > 90) {
        fuelicon.setImage(img`
. 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 . 
`)
    }
    if (fuel >= 100) {
        fuelicon.setImage(img`
. 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 1 
1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 . 
`)
    }
})
forever(function () {
    electric.x += -1 - difficulty
    pause(12 / difficulty)
    if (electric.x < 0) {
        electric.x = Math.randomRange(300, 500)
    }
})
forever(function () {
    platform2.setPosition(platform.x + 31, platform.y)
    platform4.setPosition(platform3.x + 31, platform3.y)
    platform6.setPosition(platform5.x + 31, platform5.y)
    platform8.setPosition(platform7.x + 31, platform7.y)
    platform.x += -1
    platform3.x += -1
    platform5.x += -1
    platform7.x += -1
    pause(10)
})
forever(function () {
    if (controller.left.isPressed() && mySprite2.x > 10) {
        mySprite2.x += -1
    }
})
forever(function () {
    for (let index = 0; index < 4; index++) {
        asteroid.x += -1
    }
    asteroid.y += 1
    pause(12 / difficulty)
    if (asteroid.x < -200) {
        asteroid.x = Math.randomRange(800, 1000)
        asteroid.y = Math.randomRange(-100, -150)
    }
})
forever(function () {
    if (controller.A.isPressed() && (fuel > 0 && mySprite2.y > 10)) {
        jet = 1
    } else {
        jet = 0
    }
})
forever(function () {
    if (info.score() == 100) {
        effects.confetti.startScreenEffect(100)
    }
    if (info.score() == 200) {
        effects.confetti.startScreenEffect(200)
    }
    if (info.score() == 300) {
        effects.confetti.startScreenEffect(300)
    }
    if (info.score() == 400) {
        effects.confetti.startScreenEffect(400)
    }
    if (info.score() == 500) {
        effects.confetti.startScreenEffect(500)
    }
})
forever(function () {
    if (platform.x < -50) {
        platform.x = 172
    }
    if (platform3.x < -50) {
        platform3.x = 172
    }
    if (platform5.x < -50) {
        platform5.x = 172
    }
    if (platform7.x < -50) {
        platform7.x = 172
    }
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
