input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let index = 0; index < 2; index++) {
        basic.setLedColor(0x00ffff)
        basic.showString("Hallo!!!")
    }
})
