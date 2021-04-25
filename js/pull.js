(function($, window, document, undefined) {

    /**
     * 点击下拉显示
     */
    $(document).on("click", ".IndexselectBox", function() {
        var ul = $(this).find("ul");
        var p = $(this).find("p");
            display = ul.css("display");

        display = display == "block" ? 0 : 1;

        $(".IndexselectBox ul").css("display", "none");
        $(".IndexselectBox p").removeClass("w_text_pullafter");

        if (display) {
            p.addClass("w_text_pullafter");
            ul.css("display", "block");
            display = 0;
            ul.find("li").each(function() {
                display += $(this).height();
            });
            ul.css("display", "none");

            if (display > 200) {
                ul.css("height",200);
                ul.css("overflow", "auto");
            }

            ul.slideDown(100);
        } else {
            p.removeClass("w_text_pullafter");
            ul.slideUp();
        }

        return false;
    });

    /**
     * 点击列表 文字和 value 上去
     */
    $(document).on("click", ".IndexselectBox ul li", function() {
        var p = $(this).parent().parent().find("p");

        p.text($(this).find("a").text());
        p.attr("value", $(this).attr("value"));
        p.css({color:"#333"});
        p.removeClass("w_text_pullafter");
        $("#searchTypeInp").val($(this).attr("value"));
    });
    $(document).on("click", function() {
        $(".IndexselectBox ul").slideUp();
        $(".IndexselectBox p").removeClass("w_text_pullafter");
    });
})(jQuery, window, document);