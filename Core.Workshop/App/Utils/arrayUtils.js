"use strict";
function reduceArray(collection, field) {
    return collection.reduce((prev, curr) => {
        let memberValue = field(curr);
        prev.push(memberValue);
        return prev;
    }, []);
}
exports.reduceArray = reduceArray;
