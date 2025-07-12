input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString("hi!")
    basic.showIcon(IconNames.Heart)
    basic.setLedColor(0x00ffff)
    music.playMelody("C5 B A G F E D C ", 120)
    music.playMelody("B E A D A F D C5 ", 120)
})
