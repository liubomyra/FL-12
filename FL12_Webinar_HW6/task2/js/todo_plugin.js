(function($) {
  $.fn.todoList = function() {
    let $list = this;
    this.find('li').each(function() {
      let text = $(this).text();
      $(this)
        .empty()
        .addClass('item')
        .append('<span class="item-text">' + text + '</span>')
        .append('<button class="item-remove">Remove</button>');
    });

    this.on('click', '.item-remove', function(e) {
      e.preventDefault();
      $(this)
        .closest('.item')
        .remove();
    });

    this.on('click', '.item-text', function() {
      $(this).toggleClass('done');
    });

    $('<form><label for="add-input2">New task: </label></form>')
      .insertBefore(this)
      .append('<input type="tex" id="add-input2" /> ')
      .append('<button id="add-submit"> Add </button>')
      .on('click', '#add-submit', function(e) {
        e.preventDefault();

        let $addInput = $(this).siblings('#add-input2');

        let value = $addInput.val();

        $list.append(
          '<li class="item"><span class="item-text"> ' +
            value +
            ' </span> <button class="item-remove"> Remove </button> </li>'
        );
        $addInput.val('');
      });
  };
})(jQuery);

// $input.val('');
