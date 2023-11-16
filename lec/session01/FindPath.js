const matrix = [
    ["JP", 1, "JP"],  
    [1, "JP", 1],    
    ["JP", "JP", 1], 
    ["JP", 1, "JP"], 
    ["JP", 1, 1]     
];
["JP", 1, "JP"],  // 0 =>  [ 01000,01020,01100,01120 ] + [ 21000,21020,21100,21120 ]
    [1, "JP", 1],    // 1 => [ 1000,1020,1100,1120 ]
    ["JP", "JP", 1], // 0, 1 => [000, 020] + [ 100, 120 ] => [ 000,020,100,120 ]
    ["JP", 1, "JP"], // 0, 2 => [00] + [20] => [00,20]
    ["JP", 1, 1]     // 0  => [0]

function getPaths(matrix) {
    let results = [];
    matrix[4].forEach((value, row) => { if (value === "JP") results.push(`${row}`); });
    for (let col = 3; col >= 0; col--) {
        let newPaths = [];
        matrix[col].forEach((value, row) => {
            if (value === "JP") {
                let paths = results.map(path => row + path); 
                newPaths = newPaths.concat(paths);
            }
        })
        results = newPaths;
    }
    return results;
}
console.log(getPaths(matrix));

