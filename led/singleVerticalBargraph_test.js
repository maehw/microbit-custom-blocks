let sound_energy = 0
basic.forever(function () {
    led.singleVerticalBargraph(
    input.soundLevel(),
    128,
    1,
    0,
    true
    )
    led.singleVerticalBargraph(
    sound_energy,
    128,
    3,
    2,
    false
    )
    if (input.soundLevel() > 30) {
        sound_energy = sound_energy + input.soundLevel() / 51
        if (sound_energy > 128) {
            basic.showIcon(IconNames.StickFigure)
            music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
            basic.pause(5000)
            sound_energy = 0
        }
        basic.pause(100)
    }
})
