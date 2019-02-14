$(document).ready(function() {
  // *start*
loadInbox();
  // *end*
  });


  function loadInbox() {
  $.ajax({ url: 'json/inbox', method: "GET"})
    .done(function (response) {
      var msgArray = JSON.parse(response);
      $('#load-message').find('.messages').empty();
      $.each(msgArray,function(key, row){
      let my = row.own?'To':'From';
      // var htmlRow = $('<div class="msg '+my+'"><div class="msg-item"> <span class="msg-body">'+row.msg+'</span> <span class="msg-info">'+row.author+' - '+row.time+'</span> </div> </div>');
      var htmlRow = $('<a draggable="true" ondragstart="drag(event)" class="list-group-item list-group-item-action pb-0 pt-0" > <span class="before-circle"></span> <span class=""><span class="text-light">'+my+': </span>'+row.author+'</span><span class="float-right text-light">'+row.time+'</span><p class="pl-1"><span >'+row.title+'</span> <span class="text-light">'+row.msg+'</span><i class="icon-flag7 cursor-pointer float-right text-small"></i> </p></a>');

      $('#load-message').find('.messages').append(htmlRow);
      });
    });
};

  function loadSent() {
  $.ajax({ url: 'json/sent', method: "GET"})
    .done(function (response) {
      var msgArray = JSON.parse(response);
      $('#load-message').find('.messages').empty();
      $.each(msgArray,function(key, row){
      let my = row.own?'To':'From';
      // var htmlRow = $('<div class="msg '+my+'"><div class="msg-item"> <span class="msg-body">'+row.msg+'</span> <span class="msg-info">'+row.author+' - '+row.time+'</span> </div> </div>');
      var htmlRow = $('<a draggable="true" ondragstart="drag(event)" class="list-group-item list-group-item-action pb-0 pt-0" > <span class="before-circle"></span> <span class=""><span class="text-light">'+my+': </span>'+row.author+'</span><span class="float-right text-light">'+row.time+'</span><p class="pl-1"><span >'+row.title+'</span> <span class="text-light">'+row.msg+'</span><i class="icon-flag7 cursor-pointer float-right text-small"></i> </p></a>');

      $('#load-message').find('.messages').append(htmlRow);
      });
    });
};

    function loadDrafts() {
$.ajax({ url: 'json/drafts', method: "GET"})
  .done(function (response) {
    var msgArray = JSON.parse(response);
    $('#load-message').find('.messages').empty();
    $.each(msgArray,function(key, row){
    let my = row.own?'To':'From';
    // var htmlRow = $('<div class="msg '+my+'"><div class="msg-item"> <span class="msg-body">'+row.msg+'</span> <span class="msg-info">'+row.author+' - '+row.time+'</span> </div> </div>');
    var htmlRow = $('<a draggable="true" ondragstart="drag(event)" class="list-group-item list-group-item-action pb-0 pt-0" > <span class="before-circle"></span> <span class=""><span class="text-light">'+my+': </span>'+row.author+'</span><span class="float-right text-light">'+row.time+'</span><p class="pl-1"><span >'+row.title+'</span> <span class="text-light">'+row.msg+'</span><i class="icon-flag7 cursor-pointer float-right text-small"></i> </p></a>');

    $('#load-message').find('.messages').append(htmlRow);
    });
  });
};

  function loadJunk() {
$.ajax({ url: 'json/junk', method: "GET"})
  .done(function (response) {
    var msgArray = JSON.parse(response);
    $('#load-message').find('.messages').empty();
    $.each(msgArray,function(key, row){
    let my = row.own?'To':'From';
    // var htmlRow = $('<div class="msg '+my+'"><div class="msg-item"> <span class="msg-body">'+row.msg+'</span> <span class="msg-info">'+row.author+' - '+row.time+'</span> </div> </div>');
    var htmlRow = $('<a draggable="true" ondragstart="drag(event)" class="list-group-item list-group-item-action pb-0 pt-0" > <span class="before-circle"></span> <span class=""><span class="text-light">'+my+': </span>'+row.author+'</span><span class="float-right text-light">'+row.time+'</span><p class="pl-1"><span >'+row.title+'</span> <span class="text-light">'+row.msg+'</span><i class="icon-flag7 cursor-pointer float-right text-small"></i> </p></a>');

    $('#load-message').find('.messages').append(htmlRow);
    });
  });
};

// deep Messages

// function loadDeepMessage() {
// $.ajax({ url: 'json/inbox', method: "GET"})
//   .done(function (response) {
//     var msgArray = JSON.parse(response);
//     $('#load-message').find('.messages').empty();
//     $.each(msgArray,function(key, row){
//     let my = row.own?'To':'From';
//     // var htmlRow = $('<div class="msg '+my+'"><div class="msg-item"> <span class="msg-body">'+row.msg+'</span> <span class="msg-info">'+row.author+' - '+row.time+'</span> </div> </div>');
//     var htmlRow = $('<a draggable="true" ondragstart="drag(event)" class="list-group-item list-group-item-action pb-0 pt-0" > <span class="before-circle"></span> <span class=""><span class="text-light">'+my+': </span>'+row.author+'</span><span class="float-right text-light">'+row.time+'</span><p class="pl-1"><span >'+row.title+'</span> <span class="text-light">'+row.msg+'</span><i class="icon-flag7 cursor-pointer float-right text-small"></i> </p></a>');
//
//     $('#load-message').find('.messages').append(htmlRow);
//     });
//   });
// };
