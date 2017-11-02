class Fridge {
    constructor(obj) {
        if (obj) {
            this.fridgeItems = JSON.parse(obj);
        } else {
            this.fridgeItems = {};
        }
    }

    add(item) {
        if (this.fridgeItems[item]) {
            this.fridgeItems[item]++;
        } else {
            this.fridgeItems[item] = 1;
        }
    }

    remove(item) {
        if (this.fridgeItems[item]) {
            this.fridgeItems[item]--;

            if (this.fridgeItems[item] <= 0) {
                delete this.fridgeItems[item];
            }
        } else {

        }
    }

    encode() {
        return JSON.stringify(this.fridgeItems);
    }

    toText() {
        var text = "";

        for (var key in this.fridgeItems) {
            text += this.fridgeItems[key] +
                    " " +
                    key + 
                    ", ";
        }

        return text;
    }
}

module.exports = Fridge;