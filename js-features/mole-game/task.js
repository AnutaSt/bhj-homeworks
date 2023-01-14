const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
var time = 1000;
var place = 1;
var replaceMole = () => {
    let newPlace = Math.floor( Math.random() * 8 )+1;
    if ( newPlace == place ) {
        replaceMole();
        return;
    }
    document.getElementById(`hole${place}`).classList.remove('hole_has-mole');
    document.getElementById(`hole${newPlace}`).classList.add('hole_has-mole');
    place = newPlace;
    setTimeout( function(){replaceMole();}, time );
};

let counterDead = 0;
let counterLost = 0;
getHole = index => document.getElementById(`hole${index}`);// выбор дыры по index
for ( holeIndex = 1; holeIndex < 10; holeIndex++ ) {
    let hole = getHole(holeIndex);
    hole.addEventListener( 'click', function() {
        if ( hole.classList.contains( 'hole_has-mole')){
            counterDead++;
            dead.textContent = counterDead;
        } else {
            counterLost++;
            lost.textContent = counterLost;
        }

        if (counterDead == 10) {
            alert ('Вы выиграли');
            counterDead = 0;
            counterLost = 0;
            dead.textContent = counterDead;
        }  else if (counterLost === 5) {
            alert ("Вы проиграли");
            counterDead = 0;
            counterLost = 0;
            loct.textContent = counterLost;
            }
    });

}
replaceMole();