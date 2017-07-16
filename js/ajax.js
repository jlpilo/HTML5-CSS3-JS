var opinions = [];

var drawOpinions = function() {
	$('#opinionContainer').empty();

	if (opinions.length == 0) {
		$('#opinionContainer').append("<li>No hay comentarios</li>");
	} else {
		var contentToAdd = '';
		for (var i = 0; i < opinions.length; i++) {
            var backg;
            if(i%2==0)
                backg='impar';
            else
                backg='par';

			contentToAdd += '<li class="opinion-item '+backg+'">' + opinions[i].name +': ' + opinions[i].opinion + '<button class="deleteOpinion" data-opinion-id="' + opinions[i].id + '">Eliminar</button></li>'
		}
		$('#opinionContainer').append(contentToAdd);
	}
}

var getOpinions = function () {
    var XHR = new XMLHttpRequest();
    XHR.open("GET", "http://localhost:8000/api/opinions", true);
    XHR.setRequestHeader("Content-Type", "application/json");

    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4) {
            opinions = JSON.parse(XHR.responseText);
            drawOpinions();
        } else if (XHR.readyState === 4 && XHR.status === 404) {
            console.log("Página no encontrada");
        }
    }

    XHR.send();
}

var createOpinion = function (name,opinion) {
    var XHR = new XMLHttpRequest();
    XHR.open("POST", "http://localhost:8000/api/opinions", true);
    XHR.setRequestHeader("Content-Type", "application/json");

    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4) {
            opinions.push(JSON.parse(XHR.responseText));
            drawOpinions();
        } else if (XHR.readyState === 4 && XHR.status === 404) {
            console.log("Página no encontrada");
        }
    }

    XHR.send(JSON.stringify({"name": name,"opinion": opinion}));
}

var deleteOpinion = function (id) {
    var XHR = new XMLHttpRequest();
    XHR.open("DELETE", "http://localhost:8000/api/opinions/" + id, true);
    XHR.setRequestHeader("Content-Type", "application/json");

    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4) {
            getOpinions();
        } else if (XHR.readyState === 4 && XHR.status === 404) {
            console.log("Página no encontrada");
        }
    }

    XHR.send();
}

document.getElementById("sendNewOpinion").addEventListener("click", function (event) {
    event.preventDefault();
    createOpinion(document.getElementById("nombre-opinion").value,document.getElementById("newOpinionName").value);
})


getOpinions();

$(document).on('click', '.deleteOpinion', function(){
	var id = $(this).data('opinion-id');
	deleteOpinion(id);
});