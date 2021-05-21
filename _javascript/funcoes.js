function mudaFoto(foto){
    document.getElementById('icone').src = foto;
}

function cal_Valor(){
    var quantidade = parseInt(document.getElementById('quantidade').value);
    var total_pagar = quantidade * 1500;
    if(document.getElementById('quantidade').value.length < 1){
        document.getElementById('preco').value = 0;   
    }
    else{
        document.getElementById('preco').value = total_pagar;
    }
}