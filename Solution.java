
public class Solution {

    public int rangeBitwiseAnd(int left, int right) {

        if (left == right) {
            return right;
        }

        int bitwiseAnd_forInclusiveRange = 0;

        int valueOfHighestBit_left = Integer.highestOneBit(left);
        int valueOfHighestBit_right = Integer.highestOneBit(right);

        while (valueOfHighestBit_left == valueOfHighestBit_right) {

            bitwiseAnd_forInclusiveRange += valueOfHighestBit_right;

            left -= valueOfHighestBit_right;
            right -= valueOfHighestBit_right;

            valueOfHighestBit_left = Integer.highestOneBit(left);
            valueOfHighestBit_right = Integer.highestOneBit(right);
        }

        return bitwiseAnd_forInclusiveRange;
    }
}
