function Warnbliner () {
    calliBot2E.rgbLed(C2eRgbLed.All, 16, 16, 0)
    basic.pause(1000)
    calliBot2E.rgbLed(C2eRgbLed.All, 0, 0, 0)
    basic.pause(1000)
}
let V_langsam = 10
let V_normal = 30
basic.forever(function () {
    if (calliBot2E.distance(C2eEinheit.cm) > 5) {
        calliBot2E.rgbLed(C2eRgbLed.LV, 16, 16, 16)
        calliBot2E.rgbLed(C2eRgbLed.RV, 16, 16, 16)
        calliBot2E.rgbLed(C2eRgbLed.LH, 16, 0, 0)
        calliBot2E.rgbLed(C2eRgbLed.RH, 16, 0, 0)
        if (calliBot2E.readLineSensor(C2eSensor.links, C2eSensorStatus.dunkel) && calliBot2E.readLineSensor(C2eSensor.rechts, C2eSensorStatus.dunkel)) {
            calliBot2E.motor(C2eMotor.beide, C2eDir.vorwärts, V_normal)
        } else if (calliBot2E.readLineSensor(C2eSensor.links, C2eSensorStatus.dunkel) && calliBot2E.readLineSensor(C2eSensor.rechts, C2eSensorStatus.hell)) {
            calliBot2E.motor(C2eMotor.links, C2eDir.vorwärts, V_langsam)
            calliBot2E.motor(C2eMotor.rechts, C2eDir.vorwärts, V_normal)
        } else if (calliBot2E.readLineSensor(C2eSensor.links, C2eSensorStatus.hell) && calliBot2E.readLineSensor(C2eSensor.rechts, C2eSensorStatus.dunkel)) {
            calliBot2E.motor(C2eMotor.links, C2eDir.vorwärts, V_normal)
            calliBot2E.motor(C2eMotor.rechts, C2eDir.vorwärts, V_langsam)
        } else {
            calliBot2E.motorStop(C2eMotor.beide, C2eStop.Bremsen)
            calliBot2E.motor(C2eMotor.links, C2eDir.vorwärts, V_normal)
            calliBot2E.motor(C2eMotor.rechts, C2eDir.rückwärts, V_normal)
        }
    } else {
        calliBot2E.motorStop(C2eMotor.beide, C2eStop.Bremsen)
        Warnbliner()
    }
})
