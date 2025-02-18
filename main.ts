controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    for (let index = 0; index < 4; index++) {
        mySprite.y += -5
    }
    mySprite.setVelocity(0, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(mySprite, effects.disintegrate, 500)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . . 5 5 5 f 5 5 5 . . . . 
    . . . . 5 5 5 5 5 5 4 4 4 4 . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.scale = 3
let mySprite2 = sprites.create(img`
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    `, SpriteKind.Enemy)
mySprite2.scale = 13
info.setLife(1)
music.play(music.createSong(hex`0078000408020100001c00010a006400f4016400000400000000000000000000000000050000041a0004000800012a1000140002272a1c002000012a28002c0002272a`), music.PlaybackMode.LoopingInBackground)
info.setScore(0)
