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
    $('.swap').on('click', swapClick); //whoops these change all of them if more than one is generated
    $('.delete').on('click', deleteClick);
}

function swapClick()   {
    console.log('swap click??');
    $(this).parent().css('background', 'yellow');
} //add if else to change back to red ??

function deleteClick()   {
    console.log('delete click??');
    $(this).parent().remove();
} //works!! add parent to swap


