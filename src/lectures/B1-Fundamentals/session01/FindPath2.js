let garden = [[0, 0, 0], [0, 1, 1], [0, 1, 0], [0, 1, 1], [0, 0, 0]];
const result = [];
let path = "";

function getPath(col, row, garden) {
    if (garden[col][row] === 1) {
        if (col === 4) path = [];
    } else {
        path.push(row);
        if (col === 4) {
            result.push(path.slice());
            path.pop();
        } else {
            for (let i = 0; i < 3; i++) {
                getPath(col + 1, i, garden);
            }
            path.pop();
        }
    }
}

for (let row = 0; row < 3; row++) {
    if (garden[0][row] === 0) {
        path = [];
        getPath(0, row, garden);
    }
}

console.log(result);
