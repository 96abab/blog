const g_table = document.createElement('table');
const g_result = document.createElement('div');
let player = 'O'
let cnt = 0;

const checkWinner = (_td) => {
    let rowIndex = _td.parentNode.rowIndex;
    let colIndex = _td.cellIndex;

    if (field[rowIndex][0].textContent === player &&
        field[rowIndex][1].textContent === player &&
        field[rowIndex][2].textContent === player) {
            return true;
        }
    if (field[0][colIndex].textContent === player &&
        field[1][colIndex].textContent === player &&
        field[2][colIndex].textContent === player) {
            return true;
        } 
    if (field[0][0].textContent === player &&
        field[1][1].textContent === player &&
        field[2][2].textContent === player) {
            return true;
        } 
    if (field[0][2].textContent === player &&
        field[1][1].textContent === player &&
        field[2][0].textContent === player) {
            return true;
        }
        return false;
}

const table_event = (event) => {
    const which_td = event.target.closest('td');
    if (which_td.textContent !== '') {
        return;
    }
    which_td.textContent = player;
    cnt = cnt+1;

    if (checkWinner(which_td) === true) {
        g_result.textContent = player+'승리';
        g_table.removeEventListener('click', table_event);
        return;
    }
    if (cnt === 9) {
        g_result.textContent = '무승부';
        g_table.removeEventListener('click', table_event);
        return;
    }
    if (player === 'O') {
        player = 'X';
    }
    else {
        player = 'O';
    }
    
};
const field = []

for (let i = 0; i < 3; i++) {
    const g_tr = document.createElement('tr');
    const g_row = []

    for (let j = 0; j < 3; j++) {
        const g_td = document.createElement('td');
        g_tr.append(g_td);
        g_row.push(g_td);
    }
    field.push(g_row)
    g_table.append(g_tr);
}

document.body.append(g_table);
document.body.append(g_result);


g_table.addEventListener('click', table_event);