function formatMoney(num) {
    let splits = String(num).split(".");
    let integerString = splits[0];
    let result = '';
    for (let count = 0, i = integerString.length - 1; i >= 0; i--) {
        result = integerString[i] + result;
        count++;
        if ((i !== 0) && (count === 3)) {
            result = "," + result;
            count = 0;
        }
    }
    if (splits[1]) result = result + "." + splits[1];
    return result;
}

function formatMoney2(money) {
    return Intl.NumberFormat('en-US').format(money)
}

function formatNumber3(num) {
    return Number(num).toLocaleString("en");
}

function formatCoin(money, separated = ",", decimal = ".", fixed = 3) {
    const splitStr = ("" + Number(money)).split(".");
    const integerArr = splitStr[0].split("");
    const decimalStr = splitStr[1] || "";
    let index = integerArr.length;
    while ((index -= 3) > 0) {
        integerArr.splice(index, 0, separated);
    }
    if (decimalStr.slice(0, fixed) != 0) {
        integerArr.push(decimal, decimalStr.slice(0, fixed));
    }
    return integerArr.join("");
}

function formatWallet(money, digits) {
	const moneyTypes = ["", "K", "M", "B"];
    let index = 0;
    for (index = 0; index < moneyTypes.length; index++) {
		if (money <= Math.pow(10, 3 * index)) break;
    }
	return (money / Math.pow(10, 3 * index)).toFixed(digits) + moneyTypes[index];
}
console.log(formatWallet(1001, 2));

const factoryCache = {};
function factorial(n) {
    if (factoryCache[n]) return factoryCache[n];
    factoryCache[n] = n < 2 ? 1 : n * factorial(n - 1);
    return factoryCache[n];
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function pickOutRandomElement(array) {
    return array.splice(Math.floor(Math.random() * array.length), 1);
}

function findMissingElements(arr1, arr2) { // o(mxn)
    return arr2.filter(item => !arr1.includes(item));
}

function findMissingElements2(array1, array2) {
    const map = {}; 
    array1.forEach(element => {
        map[element] = true;
    });
    return array2.filter(num => !map1[num]);
}

// I:1, V:5, X:10, L:50, C:100, D:500