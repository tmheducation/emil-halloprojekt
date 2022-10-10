input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0x00ffff)
    basic.showString("LOS")
    basic.showLeds(`
        . . . . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    led.stopAnimation()
})
