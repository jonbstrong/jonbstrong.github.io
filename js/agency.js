/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

var colors = ['72,35,68', '43,81,102', '66,152,103', '250,178,67', '224,33,48'];
var RSSUrl = encodeURIComponent('http://jonbstrong.com/blog/feed');
var $feedTitle = $('#header-title');
var $posts = $('#posts');
var $btnHori = $('#btn-hori');
var $btnVert = $('#btn-vert');

// get the posts
$.ajax({
  url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=2.0&q='+RSSUrl+'&num=3',
  dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
  success: createPosts
});

function createPosts(json) {
  $feedTitle.html(json.responseData.feed.title);
  var posts = json.responseData.feed.entries;
  var j = 0;
  
  // for each post in the feed create and append the HTML
  for(var i = 0; i < posts.length; i++) {
    var $post = $(document.createElement('div'));
    var $bg = $(document.createElement('div'));
    var $content = $(document.createElement('div'));
    $bg.css({background: 'rgba('+colors[j]+',1)'});
    $bg.addClass('bg');
    $bg.html('<a class="post-link" target="_blank" href="'+posts[i].link+'"></a>');
    $content.html('<h3>'+posts[i].title+'</h3>'+ '<p class="more">read more</p>');
    $content.addClass('content');
    
    $post.append($content);
    $post.append($bg);
    $post.addClass('post');
    $posts.append($post);
    j = j == 4 ? 0 : j+1;
  }   
}