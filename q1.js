var data = [10, 1000, 1, 59, 10, 120, 4, -1, 30]
let big = 0
let small = 0
for (let i = 0; i < data.length; i++) {
    if (big < data[i]) {
        big = data[i]
    }
}
for (let i = 0; i < data.length; i++) {
    if (small > data[i]) {
        small = data[i]
    }
}
console.log(big, small)