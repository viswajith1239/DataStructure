const rows = 3;
const cols = 3;
let array2D = new Array(rows);

for (let i = 0; i < rows; i++) {
    array2D[i] = new Array(cols);
    for (let j = 0; j < cols; j++) {
        array2D[i][j] = i * cols + j + 1; // Example initialization
    }
}

console.log(array2D);