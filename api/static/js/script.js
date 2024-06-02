const btnSend = document.getElementsByClassName('button-10');
const tdTag = document.getElementsByTagName('td');
const novoValor = document.getElementById('valor');

btnSend[0].addEventListener('click', function(e) {
    e.preventDefault();
    var i = 0;
    Array.from(tdTag).forEach(el => {
        el.innerText = parseInt(valor.value) + i
        i ++;
    });

    valor.value = "";
})
