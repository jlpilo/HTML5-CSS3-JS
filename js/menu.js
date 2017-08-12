var navbarItems = document.getElementsByClassName('nav-item');

for (var i = 0; i < navbarItems.length; i++) {
    navbarItems[i].addEventListener('click', function (event) {
        var sectionToGo = this.getElementsByTagName('a')[0].href.split("#");
console.log('aaa');
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
    scrollToElement(elem);
}

function scrollToElement (element,lastJump) {
    var pos =parseInt(element.getBoundingClientRect().top);
    var jump = pos*0.3;
    //posicion del elemento
    console.log(jump, 'jump');
    //distancia de la posicion actual de la wen respecto al top
    var pos_body=document.body.scrollTop;
    console.log(document.body.scrollTop, 'actual');

    document.body.scrollTop += jump;
    console.log(document.body.scrollTop,'despues');
    //console.log(lastJump, 'last');
    if (document.body.scrollTop != pos_body +pos) {
        console.log(Math.abs(jump));
        //lastJump = Math.abs(jump);

        setTimeout(function() {
            scrollToElement(element,jump);
        }, 1000);
    }
}