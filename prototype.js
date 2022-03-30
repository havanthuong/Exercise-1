let a = ['JavaScript', 'Python', 'PHP']

Array.prototype.mapA = function (callback) {
    let output = [],
        arrayLength = this.length;
    for (let i = 0; i < arrayLength; i++) {
        let result = callback(this)
        output.push(result)
    }
    console.log("hehe")
}



Array.prototype.foreachA = function (callback) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
}

a.foreachA(function (item, index, array) {
    console.log(item, index, array)
}) 
