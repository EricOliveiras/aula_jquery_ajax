
function consultaCep() {

    const cep = document.getElementById('cep').value
    const url = `https://viacep.com.br/ws/${cep}/json/`

    $.ajax({
        url: url,
        type: 'GET',
        success: function(response) {
            $('#uf').html(response.uf)
            $('#localidade').html(response.localidade)
            $('#bairro').html(response.bairro)
            $('#logradouro').html(response.logradouro)
            $('#titulo_cep').html(`CEP : ${response.cep}`)
            $('.cep').show()
        }
    })
}

$(function() {
    $('.cep').hide()
})