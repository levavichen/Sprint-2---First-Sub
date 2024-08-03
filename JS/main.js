'use strict'

let isGallery
let isEditor

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'none'



    renderGallery()
    renderMeme()
}