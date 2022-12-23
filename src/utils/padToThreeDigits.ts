/**
 * Returns string representation of number with zeroes added at the beginning to ensure atleast three digits
 */
export function padToThreeDigits(input: number) {
    let stringInput = input.toString();

    while (stringInput.length < 3) {
        stringInput = "0" + stringInput;
    }

    return stringInput;
}
