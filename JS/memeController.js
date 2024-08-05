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
        gCtx.lineWidth = line.width
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
    renderFrame()
}

function onSelectedFillClr() {
    const colorValue = document.querySelector('#fillClr').value
    selectedFillColor(colorValue)
    renderMeme()
    renderFrame()
}


function onSetLineText() {
    const { selectedLineIdx, lines } = gMeme
    const elText = document.querySelector('#text')
    setLineTxt(elText.value, selectedLineIdx)
    renderMeme()
    renderFrame()
}

function onDownloadMeme(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onIncreaseFont() {
    increaseFont()
    renderMeme()
    renderFrame()
}

function onDecreaseFont() {
    decreaseFont()
    renderMeme()
    renderFrame()
}

function onAddLine() {
    const elText = document.querySelector('#text')
    gMeme.selectedLineIdx = 1
    const { selectedLineIdx, lines } = gMeme
    let currText = lines[selectedLineIdx].txt
    elText.value = currText

    addLine()
    renderMeme()
    renderFrame()
}

function onSwitchLine() {
    const elText = document.querySelector('#text')
    switchLine()
    const { selectedLineIdx, lines } = gMeme
    let currText = lines[selectedLineIdx].txt
    elText.value = currText

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

function onMouseClick(ev) {
    const { lines } = gMeme
    lines.forEach(line => { line.isClicked = false })

    let clickedLineIdx = checkIsClicked(ev)
    if (clickedLineIdx === undefined) return

    lines[clickedLineIdx].isClicked = true
    renderIsClickedline([clickedLineIdx])
    renderFrame()
}

function renderIsClickedline(lineIdx) {
    gMeme.selectedLineIdx = lineIdx
    const { lines } = gMeme
    const { txt, strokeClr, fillClr } = lines[lineIdx]
    const elText = document.querySelector('#text')
    const fillColorValue = document.querySelector('#fillClr')
    const strokeColorValue = document.querySelector('#strokeColor')

    elText.value = txt
    fillColorValue.value = fillClr
    strokeColorValue.value = strokeClr
}