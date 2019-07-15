function leftPad (number) {
    const pad = '00'
    return pad.substring(0, pad.length - number.length) + number
}

function formatTime (sec) {
    const minutes = parseInt(sec / 60, 10)
    const seconds = parseInt(sec % 60, 10)
    return (`${leftPad(minutes.toString())} : ${leftPad(seconds.toString())}`)
}

export default formatTime