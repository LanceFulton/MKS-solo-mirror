var thoughtList = [];

function Thought(text){
  this.text = text;
  this.votes = 0;
}

thoughtList.push(new Thought('When you look into the night sky, you are looking back in time.'));

thoughtList.push(new Thought('The human brain is the most complex object in the known universe.'));

thoughtList.push(new Thought("It's better to die on your feet than live on your knees."));

thoughtList.push(new Thought('There are more living organisms in a teaspoon of soil than there are people on Earth.'));

thoughtList.push(new Thought('Change your thoughts and you change your world.'));

thoughtList.push(new Thought('Change your thoughts and you change your world.'));

thoughtList.push(new Thought('Change your thoughts and you change your world.'));


$(document).ready(function(){

  $('body').append('<div id="ideafield"></div>');

  for (i=0 ; i<thoughtList.length ; i++){
    $('#ideafield')
    .append('<div class="col-md-12" id="ideabox"></div>')
    .append(
      '<span class="col-md-2"></span>',
      '<span class="col-md-8" id="idea">' + '<p>' + thoughtList[i].text.toString() + '</p>'
        + '<a href="" class="votebutton">&#9650 VoteUp</a>' + '<span class="votecount">+' + thoughtList[i].votes + '</span>' + '</span>',
      '<span class="col-md-2"></span>'
    );
  }
})




/*

    <div id="ideafield">

      <div class="col-md-12" id="ideabox">
        <span class="col-md-2"></span>
        <span class="col-md-8" id="idea">
          <p>When you look into the night sky, you are looking back in time.</p>
          <a href="" class="votebutton"> &#9650 VoteUp</a><span class="votecount">+302</span>
        </span>
        <span class="col-md-2"></span>
      </div>

*/








