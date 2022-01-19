function reverse (n) {
    let str = String(n);
    let result = '';
    for (let i = 0; i < str.length; i +=1) {
         result = `${str[i]}${result}`;
    }
    
    return parseInt(String(result));
}

module.exports = reverse;

console.log(reverse(-124))
