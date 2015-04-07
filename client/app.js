$('html').css('overflow', 'hidden');


var thoughtList = [];

function Thought(text){
  this.text = text;
  this.votes = 0;
}

thoughtList.push(new Thought('When you look into the night sky, you are looking back in time.'));

thoughtList.push(new Thought("We are like butterflies who flutter for a day and think it's forever."));

thoughtList.push(new Thought("It's better to die on your feet than live on your knees."));

thoughtList.push(new Thought('There are more living organisms in a teaspoon of soil than there are people on Earth.'));

thoughtList.push(new Thought('We can know only that we know nothing. And that is the highest degree of human wisdom.'));

thoughtList.push(new Thought('The human brain is the most complex object in the known universe.'));

thoughtList.push(new Thought('Change your thoughts and you change your world.'));

var sortList = function(){
  thoughtList.sort(function(a,b){
    if (a.votes < b.votes){
      return 1;
    }
    if (a.votes > b.votes){
      return -1;
    }
    return 0;
  });
};

var renderList = function(){
  $('#formfield').remove();

  $('#ideafield').remove();
  $('body').append('<div id="ideafield"></div>');
  sortList();
  for (i=0 ; i<thoughtList.length ; i++){
    // append thoughtList
    $('#ideafield')
    .append('<div class="col-md-12" id="ideabox"></div>')
    .append(
      '<span class="col-md-2"></span>',
      '<span class="col-md-8" id="idea">' + '<p>' + thoughtList[i].text.toString() + '</p>'
        + '<a href="" class="votebutton" id=' + i + '>&#9650 VoteUp</a>' + '<span class="votecount">+' + thoughtList[i].votes + '</span>' + '</span>',
      '<span class="col-md-2"></span>'
    );
    // bind voteUp buttons
    $('#' + i).bind( "click" , {id:i}, function(event){
      event.preventDefault();
      thoughtList[event.data.id].votes++;
      renderList();
    } )
  }
}

var renderForm = function(){
  $('#ideafield').remove();
  $('body').append('<div class="col-md-12" id="formfield"></div>')
  $('#formfield').append(
    '<span class="col-md-2"></span>',
    '<span class="col-md-8" id="thoughtfield"></span>',
    '<span class="col-md-2"></span>'
    );
  $('#thoughtfield').append('<textarea type="text" id="thoughtinput">')

  $('#formfield').append(
    '<span class="col-md-8"></span>',
    '<span class="col-md-1" id="submitfield"></span>',
    '<span class="col-md-3"></span>'
    );
  $('#submitfield').append('<button id="submitbutton"><h2>submit</h2></button>');

  $('#submitbutton').on("click", function(){
    addThought();
  })
};

var addThought = function(){
  thoughtList.push(new Thought( $('#thoughtinput').val() ) );
  renderList();
}

$(document).ready(function(){

  renderList();

  $('.navbarbutton').bind("click", function(event){
    event.preventDefault();
    renderForm();
  })

})








