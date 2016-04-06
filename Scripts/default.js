$(document).ready(function () {
    initGalleryCards();
});

function initGalleryCards() {
    $(".card-set.gallery li").each(function () {
        if ($(this).children("img").length > 0) {
            var imgsrc = $(this).children("img").attr("src");
            $(this).css("background-image", "url(" + imgsrc + ")");
            $(this).children("img").remove();

            $(this).on("click", function () { document.location.href = imgsrc; });
        }
    });
}
