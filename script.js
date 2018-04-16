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
    '<button class="swap">' + 'swap' + '</button>' + 
    '<button class="delete">' + 'delete' + '</button>' + '</div>');
    $('.swap').on('click', swapClick);
    $('.delete').on('click', deleteClick);
}

function swapClick()   {
    console.log('swap click??');
    $('div').css('background', 'yellow');
} //will need an if else

function deleteClick()   {
    console.log('delete click??');
} //will need an if else

