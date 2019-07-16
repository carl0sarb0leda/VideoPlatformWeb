function BrowserDetection (){
    const browserrr = {
        webkit: navigator.userAgent.toLowerCase().indexOf('chrome') > -1,
        moz: navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
        edge: navigator.userAgent.toLowerCase().indexOf('safari') > -1
    }
    if(browserrr.webkit) return"chrome"
    else if(browserrr.moz) return "mozilla"
    else if(browserrr.edge) return "safari"
}

export default BrowserDetection