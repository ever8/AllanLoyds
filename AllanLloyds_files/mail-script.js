



  // $('.context-menu-list').addClass('z-index90');
  function containerHeight() {
      var availableHeight = $(window).height() - $('.page-container').offset().top - $('.navbar-fixed-bottom').outerHeight();
      var item2 = availableHeight - $('.top-bar-list').find('ul').outerHeight(true) - $('.side-topbar').outerHeight() - $('.sort').outerHeight() - 8;
      var item1 = availableHeight/2;
      var top = availableHeight - 300;
      // $('.grid').attr('style', 'min-height:' + availableHeight + 'px');
      // $('.grid-search').attr('style', 'min-height:' + availableHeight + 'px');

      // $('.content-box').attr('style', 'max-height:' + item1 + 'px');
      // $('body').find('.vdpComponent').attr('style', 'top:' + top + 'px');

      // $('.grid-message').attr('style', 'height:' + availableHeight + 'px');

      // $('.folder-box').attr('style', 'max-height:' + item1 + 'px');
      // var item3 = availableHeight - $('.top-bar-list').outerHeight() - $('.show-message-topbar').outerHeight();
      // var item3 = availableHeight - $('#top-list-height').find('ul').outerHeight(true) - $('.show-message-topbar ').outerHeight() - 4;
      // console.log(availableHeight-$('.top-bar-list').height());
      // console.log();
      // console.log($('#top-list-height').find('ul').height());
      // console.log($('.show-message-topbar ').outerHeight());

      // console.log($('.item-4').outerHeight());
      // console.log($('.item-4').height());


      // console.log($('.show-message-topbar').height());
      // $('#load-message').attr('style', 'height:' + item2 + 'px');
      // $('.show-message').attr('style', 'height:' + item3 + 'px');
  }
$( document ).ready(function() {
  // containerHeight();



  $.ui.plugin.add("resizable", "alsoResizeReverse", {

    start: function() {
        var that = $(this).resizable( "instance" ),
            o = that.options;

        $(o.alsoResizeReverse).each(function() {
            var el = $(this);
            el.data("ui-resizable-alsoresizeReverse", {
                width: parseInt(el.width(), 10), height: parseInt(el.height(), 10),
                left: parseInt(el.css("left"), 10), top: parseInt(el.css("top"), 10)
            });
        });
    },

    resize: function(event, ui) {
        var that = $(this).resizable( "instance" ),
            o = that.options,
            os = that.originalSize,
            op = that.originalPosition,
            delta = {
                height: (that.size.height - os.height) || 0,
                width: (that.size.width - os.width) || 0,
                top: (that.position.top - op.top) || 0,
                left: (that.position.left - op.left) || 0
            };

        $(o.alsoResizeReverse).each(function() {
            var el = $(this), start = $(this).data("ui-resizable-alsoresize-reverse"), style = {},
                css = el.parents(ui.originalElement[0]).length ?
                    [ "width", "height" ] :
                    [ "width", "height", "top", "left" ];

            $.each(css, function(i, prop) {
                var sum = (start[prop] || 0) - (delta[prop] || 0);
                if (sum && sum >= 0) {
                    style[prop] = sum || null;
                }
            });

            el.css(style);
        });
    },

    stop: function() {
        $(this).removeData("resizable-alsoresize-reverse");
    }
});
  // $('.mailbox-new  .ui-droppable a').after('<span class="submenu-folder-link"></span>');
});

// Context menu subscript
// $(function() {
//   $.contextMenu({
//       selector: '.mailbox-new .ui-droppable .submenu-folder-link,.context-menu-star',
//       zIndex: 99,
//       trigger: 'left',
//       callback: function(key, options) {
//     var m = "clicked: " + key;
//     window.console && console.log(m) || alert(m);
// },
//       items: {
//           "edit": {name: "Edit", icon: "edit"},
//           "cut": {name: "Cut", icon: "cut"},
//          copy: {name: "Copy", icon: "copy"},
//           "paste": {name: "Paste", icon: "paste"},
//           "delete": {name: "Delete", icon: "delete"},
//           "sep1": "---------",
//           "quit": {name: "Quit", icon: function(){
//               return 'context-menu-icon context-menu-icon-quit infolders';
//           }}
//       }
//   });
// });
//
// $(function() {
//   $.contextMenu({
//       selector: '.category-title',
//       zIndex: 99,
//       callback: function(key, options) {
//     var m = "clicked: " + key;
//     window.console && console.log(m) || alert(m);
// },
//       items: {
//           "edit": {name: "Edit", icon: "edit"},
//           "cut": {name: "Cut", icon: "cut"},
//          copy: {name: "Copy", icon: "copy"},
//           "paste": {name: "Paste", icon: "paste"},
//           "delete": {name: "Delete", icon: "delete"},
//           "sep1": "---------",
//           "quit": {name: "Quit", icon: function(){
//               return 'context-menu-icon context-menu-icon-quit';
//           }}
//       }
//   });
// });
// !Context menu subscript
