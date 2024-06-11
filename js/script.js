$(document).ready(function() {
  // Add item functionality
  $('#add-item').on('click', function() {
    let newItem = $('#new-item').val();
    if (newItem !== '') {
      $('#list').append(`<li><span class="item">${newItem}</span><span class="delete">X</span></li>`);
      $('#new-item').val('');
    }
  });
  // Cross out item functionality
  $('#list').on('click', '.item', function() {
    $(this).toggleClass('completed');
  });
  // Delete item functionality
  $('#list').on('click', '.delete', function() {
    $(this).parent('li').remove();
  });
  // Reorder items functionality
  $('#list').sortable();
});