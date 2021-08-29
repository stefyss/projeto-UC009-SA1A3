//função para totalizar valor de assinatura mensal
function totaliza()
{
    total = 0.00;
    //plano mensal
    if(document.form.planos[0].checked)
        total = total + 85.00;
    //plano quadrimestral
    if(document.form.planos[1].checked)
        total = total + 300.00 / 4;
    //plano anual
    if(document.form.planos[2].checked)
        total = total + 600.00 / 12;
    //Premiere econômico
    if(document.form.premiere[0].checked)
        total = total + 60.00;
    //Premiere controle
    if(document.form.premiere[1].checked)
        total = total + 80.00;
    document.form.total.value = total.toFixed(2);
}

function validacao() {
    var vLogin = document.getElementById("login").value;
    var vSenha = document.getElementById("senha").value;
    var vDados = '{"login": "Usuario","senha":"Abc$123"}';

    var vObjeto = JSON.parse(vDados);

    if (vLogin==vObjeto.login && vSenha==vObjeto.senha) {
        return true;

    } else {
        
        return false;
    }
     
    

}


    function validar_tudo() {

        if(validacao()) {

            if(document.getElementById("butassin").disabled) {
                document.getElementById("butassin").disabled = false;
                return false;
            } else {
                return true;
            }

        } else {
            alert("Login ou senha inválidos!")
            return false;
        }
    }

function contador() {
    var vData = new Date();
    var vCont = document.getElementById("contador");
    var vConta = 0;

    setInterval(function() {vCont.innerHTML = vData + ' ' + vConta++;}, 1000);
    
}

// function assinar(){

// if (validacao()) {
    // document.getElementById("butassin").disable=false;
// }

// }
