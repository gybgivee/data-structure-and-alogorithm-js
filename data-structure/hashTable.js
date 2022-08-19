/*
insert ,search,look up, delete : O(1)
O(n) for search => when collision occurs
*/

let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function () {
        console.log('ahhhhhh!');
    }
};

user.age;
user.spell = 'abra kadabra';
user.scream()

//Map --> Gives you some order and anything can be key, with object you only allow string to be key
//Set --> No duplicate keys
class HashTable {
    constructor(size) {
        this.data = new Array(size);
        // this.data = [];
    }
    //O(1)    
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    //O(1)   
    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    //O(1) if no collision / if is collision O(n)
    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address]
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined;
    }
    keys() {
        if (!this.data.length) {
            return undefined
        }
        let result = []
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
                // but also loop through all the potential collisions
                if (this.data.length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        result.push(this.data[i][j][0])
                    }
                } else {
                    result.push(this.data[i][0])
                }
            }
        }
        return result;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
myHashTable.keys();

//O(n^2) slow
function RecurringCharacterWithArray(input) {
    let characters;
    let index;
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                if(characters&&index>j ||!characters){
                    characters= input[i];
                    index = j;
                }
            }
        }
    }
    return characters;
}

//O(n) 
const RecurringCharacterWithHash = (array) => {
    const character = {}
    for (let i = 0; i < array.length; i++) {
        if (character[array[i]]) {
            return array[i];
        } else {
            character[array[i]] = array[i];
        }
    }
    return undefined;
}
console.log(RecurringCharacterWithArray([1, 5, 5, 1, 3, 4, 6]));