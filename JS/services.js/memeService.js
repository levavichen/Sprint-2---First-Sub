'use strict'

var gImgs = [
    { id: 1, url: 'IMAGES/meme-imgs (square)/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'IMAGES/meme-imgs (square)/2.jpg', keywords: ['funny', 'cat'] }
]
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    selectedImg: null,
    lines: [
        {
            id: 0,
            txt: 'Enter Text',
            size: 40,
            width: 2,
            strokeClr: '#000000',
            fillClr: '#ffffff',
            x: 175,
            y: 100,
            isClicked: false,

        },
        {
            id: 1,
            txt: '',
            size: 40,
            width: 2,
            strokeClr: '#000000',
            fillClr: '#ffffff',
            x: 175,
            y: 450,
            isClicked: false,
        }
    ]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function getMeme() {
    return gMeme
}

function drawImg(imgId) {
    const img = gImgs.find(img => img.id === imgId)

    return img
}

function getImages() {
    return gImgs
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function setLineTxt(text, lineIdx) {
    const { lines } = gMeme

    lines[lineIdx].txt = text
}

function selectedStrokeColor(clr) {
    const { selectedLineIdx, lines } = gMeme

    lines[selectedLineIdx].strokeClr = clr
}

function selectedFillColor(clr) {
    const { selectedLineIdx, lines } = gMeme

    lines[selectedLineIdx].fillClr = clr
}

function increaseFont() {
    const { selectedLineIdx, lines } = gMeme
    lines[selectedLineIdx].size += 5
}

function decreaseFont() {
    const { selectedLineIdx, lines } = gMeme
    lines[selectedLineIdx].size += -5
}

function addLine() {
    const { lines } = gMeme


    lines[1].txt = 'Enter Text'
}

function switchLine() {
    const { selectedLineIdx, lines } = gMeme

    gMeme.selectedLineIdx = selectedLineIdx === 0 ? 1 : 0
}

function getTextDimensions(currLine) {
    const { x: startPosX, y: startPosY, size, txt } = currLine
    const { width: textWidth } = gCtx.measureText(txt)
    const textHeight = size

    const txtDimensions = {
        startPosX,
        startPosY,
        textHeight,
        textWidth,
        txt
    }

    return txtDimensions
}

function checkIsClicked(ev) {
    const { offsetX: posX, offsetY: posY } = ev
    const { lines } = gMeme

    const clickedLine = lines.find(line => {
        const { width: textWidth } = gCtx.measureText(line)
        return (
            posX > line.x && posX < line.x + textWidth &&
            posY > line.y - line.size && posY < line.y
        )
    })

    if (clickedLine !== undefined) {
        return clickedLine.id
    }
}
