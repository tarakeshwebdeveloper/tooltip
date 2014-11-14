/**
 * Created by cdp on 11/14/14.
 */
(function($){
    $.toolTip = function () {
        var elements = "div,span,label,a,button,td,i,b,option,input,li";
        var _getLeftPosition = function (elementLeftPosition, ele, toolTipEle) {
            var ttW = toolTipEle.width() / 2, eleW = ele.width() / 2;
            return (elementLeftPosition + eleW) - ttW;
        }

        $(document).on("mouseover", elements, function (e) {
            if ($(this).attr("data-tool-tip") != undefined) {
                var ele = $(this),
                 txt = ele.attr("data-tool-tip"),
                 pos = ele.offset(),
                 oHeight = ele.outerHeight(),
                 div;

                if ($("div.tool-tip").length == 0) {
                    div = $("<div/>").addClass("tool-tip");
                    $("body").prepend(div);
                }
                else {
                    div = $("div.tool-tip");
                }
                div
                    .html(txt)
                    .show()
                    .offset({ left: _getLeftPosition(pos.left, ele, div), top: pos.top+2 + oHeight +2 });
                e.stopPropagation();
            }
        }).bind("mouseout", function () {
            $("div.tool-tip").offset({ left: 0, top: 0 }).hide();
        });;
    }

    $.toolTip();
})(jQuery);