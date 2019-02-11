import React from 'react';

import Calculator from './components/Calculator';
import Game from './components/Game';

const App = () => (
    <div>
        <Calculator />
        <Game />
    </div>
);

export default App;

// zadanko do zrobienia:
// - 2 inputy -> oba number. 
// - 5 przycisków -> Plus, minus, mnożenie, dzielenie (nie dziele przez zero 😛 ) i przycisk reset

// po wpisaniu wartosci do inputow, wykonac dzialanie matematyczne i wyswietlic na erkanie

// po przycisku reset inputy maja byc wyczyszone, a na wyswietlaczu ma sie z powrotem pojawic 0