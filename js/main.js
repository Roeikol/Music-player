$(function() {

    //load the audio file
    var $audio = $('#audio');
    $('input').on('change', function(e) {
    var target = e.currentTarget;
    var file = target.files[0];
    var reader = new FileReader();
    
    //dump the audio file in html player
    if (target.files && file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $audio.attr('src', e.target.result);
                $audio.play();
            }
            reader.readAsDataURL(file);
        }
    });

});