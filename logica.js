// Ejercicio factorial
/*  function factorial(n) {
      return n == 0 || n == 1 ? 1 : n * factorial(n-1);
  }
*/
/*
function factorial (n) {
    if (n ==  0) {
        return 1;
    }
    return n * factorial (n-1);
}

  console.log(factorial(5));
*/
/*
function isAlive(playerName, points) {
    if (playerName == 'ikk' && points > 30) {
        return true;
    } else if (playerName == 'gut' && points > 10) {
        return true;
    } else {
        return false;
    }
}
*/
let isAlive2 = function(playerName, pointspo) {
    if (playerName == 'ikk' && pointspo > 30 || (playerName == 'gut' && pointspo > 10)) {
        return true;
    } else {
        return false;
    }
} 

const retorno3 =  (a, b) => {
 return a + b;
}

retorno3(1, 9);

function paradise(enigma) {
    return enigma;
}