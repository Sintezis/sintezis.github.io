(function () {
  "use strict";

	$(document).ready(function () {

		var toggleSelection = function(type) {
			if (type == "idea") {
				$(".product-design").hide()
				$(".mvp-design").show()
			}
			else {
				$(".product-design").show()
				$(".mvp-design").hide()
			}
		}

		toggleSelection($('input[name=project-input]:checked').val())

		$('input[name=project-input]').bind("click", function(){
			toggleSelection($('input[name=project-input]:checked').val())
		})

		

		$(".snt-btn-next").bind("click", function(event){

			
		})



	})
})(jQuery);