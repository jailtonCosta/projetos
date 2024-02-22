function carregar(){
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours()
    if (hora >= 0 && hora <= 12 ){
        msg.innerHTML= ` Bom Dia! Agora são ${hora} horas da manhã ! `;
        img.src = 'assets/fotomanha.jpg';
        document.body.style.background = '#e2cd9f';

    }else if (hora >= 12 && hora <= 18 ){ 
        //Boa tarde
        msg.innerHTML= ` Boa Tarde ! Agora são ${hora} horas da tarde ! `;
        img.src = 'assets/fototarde.jpg';
        document.body.style.background = '#b9846f';

    }else{
        //Boa noite
        msg.innerHTML= ` Boa Noite ! Agora são ${hora} horas da noite ! `;
        img.src = 'assets/fotonoite.jpg';
        document.body.style.background = '#515154';
    }
}