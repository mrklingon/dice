input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 1; index++) {
        D1.showImage(0)
        D2.showImage(0)
        D3.showImage(0)
        D4.showImage(0)
        D5.showImage(0)
        D6.showImage(0)
    }
    Die[randint(0, 5)].showImage(0)
})
let Die: Image[] = []
let D6: Image = null
let D4: Image = null
let D5: Image = null
let D3: Image = null
let D2: Image = null
let D1: Image = null
basic.showIcon(IconNames.Giraffe)
D1 = images.createImage(`
    . . . . .
    . . # # .
    . . # # .
    . . . . .
    . . . . .
    `)
D2 = images.createImage(`
    . . . # #
    . . . # #
    . . . . .
    # # . . .
    # # . . .
    `)
D3 = images.createImage(`
    # . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . #
    `)
D5 = images.createImage(`
    # . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . #
    `)
D4 = images.createImage(`
    # # . # #
    # # . # #
    . . . . .
    # # . # #
    # # . # #
    `)
D6 = images.createImage(`
    # . . . #
    . . . . .
    # . . . #
    . . . . .
    # . . . #
    `)
for (let index = 0; index < 2; index++) {
    D1.showImage(0)
    D2.showImage(0)
    D4.showImage(0)
    D5.showImage(0)
    D6.showImage(0)
    D3.showImage(0)
    basic.showIcon(IconNames.Giraffe)
}
Die = [D1, D2, D4, D5, D3, D6]
