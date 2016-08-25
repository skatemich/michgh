/**
 * Created by mich on 7/22/16.
 */
//loader
var contenido = document.getElementById('Loader');
var activo = "myDIV";
setTimeout(function() {
    contenido.classList.add('close');
    document.body.style.overflowY= "visible";// despueés de cargar le devolvemos el scroll
}, 130);
//random text
'use strict';
var resolver = {
    resolve: function resolve(options, callback) {
        var resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
        var combinedOptions = Object.assign({}, options, { resolveString: resolveString });
        function getRandomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        ;
        function randomCharacter(characters) {
            return characters[getRandomInteger(0, characters.length - 1)];
        }
        ;
        function doRandomiserEffect(options, callback) {
            var characters = options.characters;
            var timeout = options.timeout;
            var element = options.element;
            var partialString = options.partialString;
            var iterations = options.iterations;
            setTimeout(function () {
                if (iterations >= 0) {
                    var nextOptions = Object.assign({}, options, { iterations: iterations - 1 });
                    if (iterations === 0) {
                        element.textContent = partialString;
                    } else {
                        element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
                    }
                    doRandomiserEffect(nextOptions, callback);
                } else if (typeof callback === 'function') {
                    callback();
                }
            }, options.timeout);
        }
        ;
        function doResolverEffect(options, callback) {
            var resolveString = options.resolveString;
            var characters = options.characters;
            var offset = options.offset;
            var partialString = resolveString.substring(0, offset);
            var combinedOptions = Object.assign({}, options, { partialString: partialString });
            doRandomiserEffect(combinedOptions, function () {
                var nextOptions = Object.assign({}, options, { offset: offset + 1 });
                if (offset <= resolveString.length) {
                    doResolverEffect(nextOptions, callback);
                } else if (typeof callback === 'function') {
                    callback();
                }
            });
        }
        ;
        doResolverEffect(combinedOptions, callback);
    }
};
var strings = [
    '_',
    '0%',
    '10%',
    '40%',
    '100%',
    'FRONT-END',
    'UI',
    '.....',
    'IvI1<}{',
];
var counter = 0;
var options = {
    offset: 0,
    timeout: 7,
    iterations: 5,
    characters: [
        '$',
        '3',
        '8',
        'd',
        '_',
        'f',
        'g',
        '!',
        '5',
        'j',
        'k',
        'l',
        '2',
        'n',
        '_',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'x',
        'y',
        'x',
        '#',
        '%',
        '&',
        '-',
        '+',
        '_',
        '?',
        '/',
        '\\',
        '='
    ],
    resolveString: strings[counter],
    element: document.querySelector('[data-target-resolver]')
};
function callback() {
    setTimeout(function () {
        counter++;
        if (counter >= strings.length) {
            counter = 0;
        }
        var nextOptions = Object.assign({}, options, { resolveString: strings[counter] });
        resolver.resolve(nextOptions, callback);
    }, 1000);
}
resolver.resolve(options, callback);

//nav javascript

$(window).scroll(function(){
if($(window).scrollTop() > $(document).height()*0.2){
        $('.Nav').css({
        "color": "black",
    })
    }else{
        $('.Nav').css({
            'color': 'white'
        })
    }
});

//menu

'use strict';
var openButton = document.querySelector('#open');
var closeButton = document.querySelector('.Menu-close');
var menu = document.querySelector('.Menu');
var menuLines = document.querySelectorAll('.Menu-line');
openButton.addEventListener('click', function () {
    menu.classList.add('Menu--active');
    menuLines.forEach(function (line, i) {
        setTimeout(function () {
            line.classList.add('Menu-line--active');
        }, 50 * i);
    });
});
closeButton.addEventListener('click', function () {
    menu.classList.remove('Menu--active');
    menuLines.forEach(function (line, i) {
        line.classList.remove('Menu-line--active');
    });
});
function desplegar(elemento) {

  
  var contenidos = ["myDIV", "Loran", "Conmu"];

  if (elemento == "siguiente") {
    var indice = contenidos.indexOf(activo);
    indice = indice == (contenidos.length - 1) ? 0 : indice + 1;
    elemento = contenidos[indice];
  } else if (elemento == "anterior") {
    var indice = contenidos.indexOf(activo);
    indice = indice == 0 ? (contenidos.length - 1) : indice - 1;
    elemento = contenidos[indice];
  }
    document.getElementById(elemento).style.display = 'block';
    for (var i = 0; i < contenidos.length; i++) {
      if (contenidos[i] == elemento)
        continue;
      var x = document.getElementById(contenidos[i]);
      x.style.display = 'none';
    }

    activo = elemento;
}
//video
var vid = document.getElementById("bgvid");
function vidFade() {
    vid.classList.add("stopfade");
}
vid.addEventListener('ended', function()
{
// to capture IE10
    vidFade();
});