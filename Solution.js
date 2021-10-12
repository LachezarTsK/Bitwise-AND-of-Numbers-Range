
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {

    if (left === right) {
        return right;
    }

    let bitwiseAnd_forInclusiveRange = 0;

    let valueOfHighestBit_left = Math.pow(2, Math.floor(Math.log2(left)));
    let valueOfHighestBit_right = Math.pow(2, Math.floor(Math.log2(right)));

    while (valueOfHighestBit_left === valueOfHighestBit_right) {

        bitwiseAnd_forInclusiveRange += valueOfHighestBit_right;

        left -= valueOfHighestBit_right;
        right -= valueOfHighestBit_right;

        valueOfHighestBit_left = Math.pow(2, Math.floor(Math.log2(left)));
        valueOfHighestBit_right = Math.pow(2, Math.floor(Math.log2(right)));
    }

    return bitwiseAnd_forInclusiveRange;
};
