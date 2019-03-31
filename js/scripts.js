//// business logic
var answers = ["infinity","firstName","vowels"];
var pointPerCorrect = 25;

//  UI logic
function percentage(score) {
return "Your score is " + parseInt((score / 75) * 100) + "%";
}

$(document).ready(function(){
   $("#questions").submit(function (event) {


      $('#result').text('');
      var score = 0;
      var answerOne = ($("input[type=radio][name=questionOneAnswer]:checked").val());
      var answerTwo = ($("input[type=radio][name=questionTwoAnswer]:checked").val());
      var answerThree = ($("input[type=radio][name=questionThreeAnswer]:checked").val());

      if (answerOne === undefined || answerTwo === undefined || answerThree === undefined) {
  $('#questionsIncomplete').text('Please Complete questions Before Submitting');
  $('#questionsIncomplete').fadeOut(10000);
} else {
         if (answerOne === answers[0]) {
    score += pointPerCorrect;
  }
         if (answerTwo === answers[1]) {
    score += pointPerCorrect;
  }
         if (answerThree === answers[2]) {
    score += pointPerCorrect;
  }
  $('#button').button();

$('#button').click(function() {
    $(this).button('loading');
});


        $("input[type=radio][name=questionOneChoice]:checked").prop('checked', false);
        $("input[type=radio][name=questionTwoChoice]:checked").prop('checked', false);
        $("input[type=radio][name=questionThreeChoice]:checked").prop('checked', false);
        $('#questionsIncomplete').text('');
        $('#result').text(percentage(score));
}
          event.preventDefault();
 });
});

var getGif = function() {
  var gif = [];
  $('img').each(function() {
    var data = $(this).data('alt');
    gif.push(data);
  });
  return gif;
}
var gif = getGif();

// Preload all the GIF.
var image = [];
 
$.each(gif, function(index) {
  image[index]     = new Image();
  image[index].src = gif[index];
});
$('figure').on('click', function() {
 
  var $this   = $(this),
          $index  = $this.index(),
           
          $img    = $this.children('img'),
          $imgSrc = $img.attr('src'),
          $imgAlt = $img.attr('data-alt'),
          $imgExt = $imgAlt.split('.');
           
  if($imgExt[1] === 'gif') {
      $img.attr('src', $img.data('alt')).attr('data-alt', $imgSrc);
  } else {
      $img.attr('src', $imgAlt).attr('data-alt', $img.data('alt'));
  }
 
});
