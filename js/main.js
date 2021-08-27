import $ from 'jquery';

function consultaCep() {
    $.ajax({
        url: 'https://viacep.com.br/ws/67145310/json/',
        type: 'GET',
        success: function(response) {
            console.log(response)
        }
    })
}