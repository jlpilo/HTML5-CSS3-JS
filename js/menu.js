var navbarItems = document.getElementsByClassName('nav-item');

for (var i = 0; i < navbarItems.length; i++) {
   
    navbarItems[i].addEventListener('click', function (event) {
        var sectionToGo = this.getElementsByTagName('a')[0].href.split("#");
        
        deleteActiveClass();
        this.classList.add('active');
        
        if (sectionToGo.length === 2) {
       
            
            event.preventDefault();
            var goTo = sectionToGo[sectionToGo.length - 1];
            getElementByIdAndScroll(goTo);
        }
    });
}
function deleteActiveClass() {
    for (var i = 0; i < navbarItems.length; i++) {
        navbarItems[i].classList.remove('active');
    }
}

function getElementByIdAndScroll (id) {

    var elem;
    if (id === '') {
        elem = document.getElementsByClassName('header')[0];
    } else {
        elem = document.getElementById(id);
    }
    scrollToElement(elem,0);
}

function scrollToElement (element,last) {
    
    var id_element=element.id;

    if(id_element){
        var h=document.getElementById(id_element).children[0].offsetHeight;
        var jump = parseInt((element.getBoundingClientRect().top-h) * 0.3);
    }else{
        var jump = parseInt((element.getBoundingClientRect().top) * 0.3);
    }
    //console.log(last,'last');
    //console.log(Math.abs(jump),'jump');
    //console.log(document.documentElement.scrollTop,'antes');
    var scrollingElement = document.scrollingElement || document.documentElement;
    scrollingElement.scrollTop += jump;

    if (!last || last > Math.abs(jump)) {
        last = Math.abs(jump);

        setTimeout(function() {
            scrollToElement(element,last);
        }, 40);
    } 
}


var acumulativeOffset = function (element) {
    var top = 0;

    do {
        top += element.offsetTop || 0;
        element = element.offsetParent;
    } while (element);

    return top;
}


var offsetQuienSoy = acumulativeOffset(document.getElementById('quien-soy'))-58;
var offsetFormacion = acumulativeOffset(document.getElementById('estudios'))-58;
var offsetExperiencia = acumulativeOffset(document.getElementById('experiencia'))-58;
var offsetSobreMi = acumulativeOffset(document.getElementById('sobre-mi'))-58;
var offsetContacto = acumulativeOffset(document.getElementById('contacto'))-58;
var offsetOpiniones = acumulativeOffset(document.getElementById('opiniones'))-58;
var navbar = document.getElementsByClassName('navbar')[0];

window.addEventListener('scroll', changeMenuStyle);

var previous;
function changeMenuStyle(event) {
    var pageOffset = window.pageYOffset;

    if (pageOffset >= 0 && pageOffset < offsetQuienSoy) {
        if (!previous || previous !== 1) {
            previous = 1;
        } else if (previous === 1){
            return false;
        }
        console.log(pageOffset, offsetQuienSoy,offsetFormacion, offsetExperiencia,offsetSobreMi,offsetContacto,offsetOpiniones);
        deleteActiveClass();
        document.querySelector("a[href='#']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetQuienSoy && pageOffset < offsetFormacion) {
        if (!previous || previous !== 2) {
            previous = 2;
        } else if (previous === 2){
            return false;
        }
        console.log(pageOffset, offsetQuienSoy,offsetFormacion, offsetExperiencia,offsetSobreMi,offsetContacto,offsetOpiniones);
        deleteActiveClass();
        document.querySelector("a[href$='quien-soy']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetFormacion &&  pageOffset < offsetExperiencia) {
        if (!previous || previous !== 3) {
            previous = 3;
        } else if (previous === 3){
            return false;
        }
console.log(pageOffset, offsetQuienSoy,offsetFormacion, offsetExperiencia,offsetSobreMi,offsetContacto,offsetOpiniones);
        deleteActiveClass();
        document.querySelector("a[href$='estudios']").parentNode.classList.add("active");

    } else if (pageOffset >= offsetExperiencia &&  pageOffset < offsetSobreMi) {
        if (!previous || previous !== 4) {
            previous = 4;
        } else if (previous === 4){
            return false;
        }
console.log(pageOffset, offsetQuienSoy,offsetFormacion, offsetExperiencia,offsetSobreMi,offsetContacto,offsetOpiniones);
        deleteActiveClass();
        document.querySelector("a[href$='experiencia']").parentNode.classList.add("active");

    } else if (pageOffset >= offsetSobreMi &&  pageOffset < offsetContacto) {
        if (!previous || previous !== 5) {
            previous = 5;
        } else if (previous === 5){
            return false;
        }
console.log(pageOffset, offsetQuienSoy,offsetFormacion, offsetExperiencia,offsetSobreMi,offsetContacto,offsetOpiniones);
        deleteActiveClass();
        document.querySelector("a[href$='sobre-mi']").parentNode.classList.add("active");

    } else if (pageOffset >= offsetContacto &&  pageOffset < offsetOpiniones) {
        if (!previous || previous !== 6) {
            previous = 6;
        } else if (previous === 6){
            return false;
        }
console.log(pageOffset, offsetQuienSoy,offsetFormacion, offsetExperiencia,offsetSobreMi,offsetContacto,offsetOpiniones);
        deleteActiveClass();
        document.querySelector("a[href$='contacto']").parentNode.classList.add("active");
    } 

}