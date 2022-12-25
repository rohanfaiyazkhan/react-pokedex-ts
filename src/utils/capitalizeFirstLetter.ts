export function capitalizeFirstLetter(word: string) {
    const firstLetter = word.charAt(0);
    const restOfWord = word.slice(1);

    return firstLetter.toUpperCase() + restOfWord;
}
