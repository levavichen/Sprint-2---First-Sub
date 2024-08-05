'use strict'


function renderMeme() {
    const meme = getMeme()
    const currImg = drawImg(meme.selectedImgId)

    renderImg(currImg)
    renderText()
}

function renderText() {
    const meme = getMeme()

    meme.lines.forEach((line) => {
        gCtx.lineWidth = 2
        gCtx.strokeStyle = line.strokeClr
        gCtx.fillStyle = line.fillClr
        gCtx.font = `${line.size}px Arial`

        gCtx.fillText(line.txt, line.x, line.y)
        gCtx.strokeText(line.txt, line.x, line.y)
    })
}

function renderImg(img) {
    const elImg = new Image()
    elImg.src = img.url
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, elImg.width, elImg.height)
}

function onSelectedStrokeClr() {
    const colorValue = document.querySelector('#strokeColor').value
    selectedStrokeColor(colorValue)
    renderMeme()
}

function onSelectedFillClr() {
    const colorValue = document.querySelector('#fillClr').value
    selectedFillColor(colorValue)
    renderMeme()
}


function onSetLineText() {
    const elText = document.querySelector('#text')
    setLineTxt(elText.value)
    renderMeme()
}

function onDownloadMeme(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onIncreaseFont() {
    increaseFont()
    renderMeme()
}

function onDecreaseFont() {
    decreaseFont()
    renderMeme()
    renderFrame()

}

function onAddLine() {
    addLine()
    renderMeme()
}

function onSwitchLine() {
    switchLine()
    renderMeme()
    renderFrame()
}

function renderFrame() {
    const { selectedLineIdx, lines } = gMeme
    const { startPosX, startPosY, textHeight, textWidth, txt } = getTextDimensions(lines[selectedLineIdx])

    if (txt === '') return

    gCtx.strokeStyle = 'red'
    gCtx.strokeRect(startPosX, startPosY - textHeight, textWidth, textHeight + 10)
}