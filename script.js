$(document).ready(onReady);

let clickCount = 0;

function onReady()  {
    console.log('jquery chickity check');
    $('button').on('click', clickHandler);
}

function clickHandler() {
    console.log('free clicks');
    clickCount++;
    $('body').append('<div>' + '<p>' + clickCount + '</p>' + 
    '<button id="swap">' + 'swap' + '</button>' + 
    '<button id="delete">' + 'delete' + '</button>' + '</div>');
    $('#swap').on('click', swapClick);
    $('#delete').on('click', deleteClick);
}

function swapClick()   {
    console.log('swap click??');
    $('div').css('background', 'yellow');
}

function deleteClick()   {
    console.log('delete click??');
}

