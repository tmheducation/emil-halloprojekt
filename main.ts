input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
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
