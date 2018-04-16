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
    if( $(this).css('background', 'red') )    {
    $(this).parent().css('background', 'yellow');
    }
    else if ($(this).css('background', 'red')){
        $(this).parent().css('background', 'yellow');
    }
} //add if else to change back to red ??
//whooooops messed this function up, last SWAP BUTTON commit at least worked for first switch

function deleteClick()   {
    console.log('delete click??');
    $(this).parent().remove();
} //works!! add parent to swap


