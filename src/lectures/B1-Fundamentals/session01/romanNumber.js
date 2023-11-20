// I:1, V:5, X:10, L:50, C:100, D:500
const numberMap = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], 
]
function getRomanNumber(num) {
    const numString = String(num).split("").reverse();
    let result = "";
    numString.forEach((digit, index) => result = numberMap[index][digit] + result);
    return result;
}