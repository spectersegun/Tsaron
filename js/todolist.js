(function ($) {
  "use strict";
  $(function () {
    var todoListItem = $(".todo-list");
    var todoListInput = $(".todo-list-input");
    $(".todo-list-add-btn").on("click", function (event) {
      event.preventDefault();

      var item = $(this).prevAll(".todo-list-input").val();

      if (item) {
        todoListItem.append(
          "<li><div className='form-check'><label className='form-check-label'><input className='checkbox' type='checkbox'/>" +
            item +
            "<i className='input-helper'></i></label></div><i className='remove ti-close'></i></li>"
        );
        todoListInput.val("");
      }
    });

    todoListItem.on("change", ".checkbox", function () {
      if ($(this).attr("checked")) {
        $(this).removeAttr("checked");
      } else {
        $(this).attr("checked", "checked");
      }

      $(this).closest("li").toggleClass("completed");
    });

    todoListItem.on("click", ".remove", function () {
      $(this).parent().remove();
    });
  });
})(jQuery);
