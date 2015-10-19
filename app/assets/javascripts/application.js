$('document').ready(function(){
    $('nav-activities').click(function(event){
        event.preventDefault();
        $(this).tab('show');
    });

    var resizeBody = function(){
        widthWindow = $(window).outerWidth();
        widthPanel = $('#panel').outerWidth();
        heightWindow = $(window).outerHeight();
        heightPanel = $('#panel').outerHeight();

        widthNew = (widthWindow > widthPanel)? widthWindow : widthPanel;
        heightNew = (heightWindow > heightPanel)? heightWindow : heightPanel;

        $('body, #veil').css({width: widthNew, height: heightNew});
    }

    $(window).resize(resizeBody);

    resizeBody();
})