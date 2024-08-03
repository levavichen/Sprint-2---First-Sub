'use strict'

var gImgs = [
    { id: 1, url: 'IMAGES/meme-imgs (square)/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'IMAGES/meme-imgs (square)/2.jpg', keywords: ['funny', 'cat'] }
]
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 40,
            color: '#dcad2e',
            x: 100,
            y: 100,

        }
    ]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function getMeme() {
    return gMeme
}

function getImages() {
    return gImgs
}

function getImgUrl(idx) {
    const img = gImgs.find(img => img.id === idx)
    return img.url
}

function setImg(idx) {
    const meme = getMeme()
    meme.selectedImgId = idx
}

function setLineTxt(text) {
    const meme = getMeme()
    const { selectedLineIdx, lines } = meme
    lines[selectedLineIdx].txt = text

    renderMeme()
}

function selectedColor(clr) {
    const meme = getMeme()
    const { selectedLineIdx, lines } = meme
    lines[selectedLineIdx].color = clr

    renderMeme()
}