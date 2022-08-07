const escolher_Area = prompt('Qual área você pretende seguir, Front-End ou Back-End? digite "f" para Front-End ou "b" para Back-End.')

//Area front-end

if(escolher_Area == "f" | "F") {

    const escolhe_front = prompt('vejo que você escolheu Front-end, o que pretende aprender em front React ou Vue? digite "r" para React ou "v" para Vue')
    
    if (escolhe_front == 'r' | 'R' ) {

        const react_full = prompt('Você escolheu React, que Legal, agora responda gostaria de de se especializar em React ou pretende se tonar fullstack? Caso queira se especializar em Front digite "e" ou "s" para fullstack')

        if(react_full == 'e' | 'E'){
            alert('Legal, muito sucesso na sua carreira Front-End React')
            }
        if(react_full == 's' | 'S'){
            alert('Legal, muito sucesso na sua carreira Full-Stack')
            }
    }
    if(escolhe_front == 'v' | 'V') {
        const vue_full = prompt('Você escolheu Vue, que Legal, agora responda gostaria de de se especializar em Vue ou pretende se tonar fullstack? Caso queira se especializar em Front digite "e" ou "s" para fullstack')
        
        if(vue_full == 'e' | 'E'){
            alert('Legal, muito sucesso na sua carreira Front-End Vue')
            }
        if(vue_full == 's' | 'S'){
            alert('Legal, muito sucesso na sua carreira Full-Stack')
            }
    }
}

//Area front-end

//--------------------------------------------------------------------------------------//

//Area back-end

if (escolher_Area == 'b' | 'B') {

    const escolhe_back = prompt('Vejo que você escolheu Back-End, o que pretende aprender em Back C# ou Java? digite "c" para C# ou "j" para java')

    if(escolhe_back == 'c' | 'C') {
        const c_f = prompt('Você escolheu C#, que Legal, agora responda gostaria de de se especializar em C# ou pretende se tonar fullstack? Caso queira se especializar em C# digite "e" ou "s" para fullstack')
        if(c_f == 'e' | 'E'){
            alert('Legal, muito sucesso na sua carreira em c#')
            }
        if(c_f == 's' | 'S'){
            alert('Legal, muito sucesso na sua carreira Full-Stack')
            }
    }
    if(escolhe_back == 'j' | 'J') {
        const j_f = prompt('Você escolheu java, que Legal, agora responda gostaria de de se especializar em java ou pretende se tonar fullstack? Caso queira se especializar em java "e" ou "s" para fullstack')
        if(j_f == 'e' | 'E'){
            alert('Legal, muito sucesso na sua carreira java')
            }
        if(j_f == 's' | 'S'){
            alert('Legal, muito sucesso na sua carreira Full-Stack')
            }
    }
}

//Area back-end

//--------------------------------------------------------------------------------------//

//Liguagens que o usuario dejesa aprender

var tec = [];

do {
    tec.push(prompt('quais são as tecnologias nas quais gostaria de se especializar ou de conhecer?'))
    var mais_tec = prompt('Tem mais alguma tecnologia que você gostaria de aprender? digite "s" para confirmar')
    
}while(mais_tec == 's')
    
alert('liguagens: ' +tec)

//Liguagens que o usuario dejesa aprender

//--------------------------------------------------------------------------------------//