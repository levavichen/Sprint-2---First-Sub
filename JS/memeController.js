'use strict'


function renderMeme() {
    const meme = getMeme()
    const currImg = drawImg(meme.selectedImgId)

    renderImg(currImg)
    renderText()
}

function renderText(){
    const meme = getMeme()
    meme.selectedLineIdx = idx


    meme.lines.forEach((line,idx) => {
        gCtx.lineWidth = 2
        gCtx.strokeStyle = line.strokeClr
        gCtx.fillStyle = line.fillClr

        gCtx.font = `${line.size}px Arial`
        gCtx.fillText(line.txt, line.x, line.y)
        console.log(line.y)
        gCtx.strokeText(line.txt, line.x, line.y)
    })
}

function renderImg(img){
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
}