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
            txt: 'Enter Text',
            size: 40,
            strokeClr: 'black',
            fillClr: 'white',
            x: 175,
            y: 100,

        },
        {
            txt: '',
            size: 40,
            strokeClr: 'black',
            fillClr: 'white',
            x: 175,
            y: 450,
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

function setLineTxt(text) {
    const { selectedLineIdx, lines } = gMeme

    lines[selectedLineIdx].txt = text
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
    const { selectedLineIdx } = gMeme

    gMeme.selectedLineIdx = selectedLineIdx === 0 ? 1 : 0
}

function getTextDimensions(currLine) {
    console.log(currLine)
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
