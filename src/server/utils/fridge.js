class Fridge {
    constructor(data) {
        var fridgeItems = data.Item.fridgeItems;
        if (fridgeItems) {
            this.fridgeItems = JSON.parse(fridgeItems);
        } else {
            this.fridgeItems = {};
        }
    }

    add(item, quantity = 1) {
        quantity = parseInt(quantity);
        if (this.fridgeItems[item]) {
            this.fridgeItems[item] += quantity;
        } else {
            this.fridgeItems[item] = quantity;
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