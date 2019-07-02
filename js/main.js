$(document).ready(function(){
 // Implementar
 const botao = $('#input-button');
 const url = 'https://api.github.com/users/';
 let pontos = 0;
 const contarPontos = $(`#score`);

 botao.click(function(){
    let username = $('#input-user').val();
    

    $.getJSON(url+username, function(user) {
        adicionarUsuario(user)
        pontos++;
        //pontos = pontos + 1
        contarPontos.html(pontos);
    })
    .fail(function(){
        pontos--;
        contarPontos.html(pontos);
        alert("Usuário inexistente");
    });

    function adicionarUsuario(user){
        $("#add-data").append(`
        <div class="col-sm-3 mb-3">
            <div class="card" style="width: 100%;">
                <img src="${user.avatar_url}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">${user.name}<br>${user.bio}</p>
                </div>
            </div>
        </div>
        `);
    };


    

 });
});