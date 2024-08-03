'use strict'
let gElCanvas
let gCtx



function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.clientWidth - 10
}

function renderMeme() {
    const meme = getMeme()
    const imgUrl = getImgUrl(meme.selectedImgId)

    const elImg = new Image()
    elImg.src = imgUrl
    elImg.onload = () => {
        gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
        gCtx.drawImage(elImg, 0, 0, elImg.naturalWidth, elImg.naturalHeight)


        meme.lines.forEach(line => {
            gCtx.lineWidth = 2
            gCtx.strokeStyle = line.strokeClr
            gCtx.fillStyle = line.fillClr

            gCtx.font = `${line.size}px Arial`
            gCtx.fillText(line.txt, line.x, line.y)
            gCtx.strokeText(line.txt, line.x, line.y)
        })
    }
}

function onSelectedStrokeClr() {
    const colorValue = document.querySelector('#strokeColor').value
    selectedStrokeColor(colorValue)
}

function onSelectedFillClr() {
    const colorValue = document.querySelector('#fillClr').value
    selectedFillColor(colorValue)
}



function onSetLineText() {
    const elText = document.querySelector('#text')
    setLineTxt(elText.value)
}

function onDownloadMeme(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onIncreaseFont() {
    increaseFont()
}

function onDecreaseFont() {
    decreaseFont()
}