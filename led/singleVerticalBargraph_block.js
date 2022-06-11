/**
 * MIT License (see git repository)
 * Copyright (c) 2022 @maehw
 *
 * Configurable vertical bargraph.
 *  Usage:
 *  - Open https://makecode.com/playground in your web browser
 *  - Copy and paste this file into the left source code editor
 *  - Select 'micro:bit' from the dropdown menu on the top right
 *  - Press the 'run' button
 *  - Done, the custom block is ready to be used
 *  - Find it in the 'Led' group
 *  - You can use the test code in the *_test.js for a demo!
 */

namespace led {
    //% block="plot single vertical bargraph of %val up to %maxval with a width of %width at an x-offset of %xoffs initial clear screen: %initclear"
    //% width.min=1 width.max=5 width.defl=5
    //% xoffs.min=0 xoffs.max=4 xoffs.defl=0
    //% maxval.min=1 maxval.defl=255
    //% inlineInputMode=external
    export function singleVerticalBargraph(val: number, maxval: number, width: number, xoffs: number, initclear: boolean): void {
        let height = val/maxval
        if (initclear) {
            basic.clearScreen()
        }
        for (let x = 0; x < width; x++) {
            if (height >= 0.1) {
               led.plot(xoffs+x, 4)
            }
            if (height >= 0.3) {
               led.plot(xoffs+x, 3)
            }
            if (height >= 0.5) {
               led.plot(xoffs+x, 2)
            }
            if (height >= 0.7) {
               led.plot(xoffs+x, 1)
            }
            if (height >= 0.9) {
               led.plot(xoffs+x, 0)
            }
        }
    }
}
