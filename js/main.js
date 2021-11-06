let page = 'content.html';
let body = $('body');
let content = $('.content');
let delay = 1000;

// Load content after 1 second
setTimeout(function(){
    content.load(page);
}, delay);

// When URL contain ?fixed
if (location.search === '?fixed'){
    body.addClass('fixed');
}
