let menuVisible = false;

function MostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distacia = window.innerHeight - skills.getBoundingClientRect().top ;
    if(distacia>=300){
        let habilidades=document.getElementsByClassName("progreso");
        habilidades[0].classList.add("python");
        habilidades[1].classList.add("powerbi");
        habilidades[2].classList.add("linux");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("gns3");
        habilidades[5].classList.add("adaptabilidad");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("integridad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("disponibilidad");
    }
}
window.onscroll=function(){
    efectoHabilidades();
}