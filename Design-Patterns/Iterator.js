
const items = [1,2,3,4,5];

function Iterator(arr) {
    this.arr = arr;
    this.index = 0;
}

Iterator.prototype = {
    hasNext: function() {
        return this.index < this.arr.length
    },
    next: function() {
        return this.arr[this.index++]
    }
}

const iter = new Iterator(items);
while(iter.hasNext()) {
    console.log(iter.next())
}