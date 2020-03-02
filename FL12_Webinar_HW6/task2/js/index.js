const $list = $('.list');
const $input = $('#add-input');
const $add = $('#add-submit');

const todos = [
  {
    text: 'Buy milk',
    done: false
  },
  {
    text: 'Play with dog',
    done: true
  }
];

$(document).ready(function() {
  $add.click(function(e) {
    e.preventDefault();
    let $newListItem = $('<li></li>')
      .addClass('item')
      .append(
        $('<span>')
          .addClass('item-text')
          .text($input.val())
      )
      .append(
        $('<button>')
          .addClass('item-remove')
          .text('Remove')
      );

    $list.append($newListItem);

    $input.val('');
  });

  $list.on('click', '.item-remove', function(e) {
    e.preventDefault();
    $(this)
      .closest('.item')
      .remove();
  });

  $list.on('click', '.item-text', function() {
    $(this).toggleClass('done');
  });
});

// Task 2
$('.listSimple').todoList();
