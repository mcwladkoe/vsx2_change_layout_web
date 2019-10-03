var processAndChange = function() {
    $.ajax({
        method: "POST",
        url: "/process",
        data: $('#main-form').serialize(),
        dataType: "json"
    }).done(function( data ) {
        if ( data && data.result ) {
            $('#outputarea').val( data.result );
            return;
        }
        $.notify({
            title: 'Что-то пошло не так:(',
            message: 'Чтобы связаться нажмите тут',
            url: 'mailto:mcwladkoe@outlook.com',
            targer: '_blank'
        }, {
            type: 'danger'
        });
    }).fail(function( data ) {
        $.notify({
            title: 'Что-то пошло не так:(',
            message: 'Чтобы связаться нажмите тут',
            url: 'mailto:mcwladkoe@outlook.com',
            targer: '_blank'
        }, {
            type: 'danger'
        });
    });
};
$(document).ready(function(){
    $('.submit').on('click', processAndChange);
    $('form').on('submit', processAndChange);
    $('.copy').on('click', function(ev) {
        var self = this,
            $copyField = $('#outputarea');
        $copyField.removeAttr('disabled');
        $copyField.select();
        document.execCommand("copy");
        $copyField.attr('disabled', 'disabled');
        $.notify({
            message: $(self).data('success'),
        }, {
            type: 'success'
        });
    });
});
