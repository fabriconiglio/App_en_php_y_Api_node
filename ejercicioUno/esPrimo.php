<?php

// Función para verificar si un número es primo
function esPrimo($numero) {
    if ($numero <= 1) {
        return false;
    }
    for ($i = 2; $i <= sqrt($numero); $i++) {
        if ($numero % $i == 0) {
            return false;
        }
    }
    return true;
}

// Bucle para imprimir los números del 1 al 100
for ($numero = 1; $numero <= 100; $numero++) {

    echo $numero;

    if (esPrimo($numero)) {
        echo " [ES PRIMO]";
    }

    echo "\n";
}

?>
