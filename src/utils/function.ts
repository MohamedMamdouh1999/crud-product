/**
 * Truncates a given text to a specified maximum length and appends an ellipsis (`...`)
 * if the text exceeds that length.
 *
 * @param {string} txt - The input text to be truncated.
 * @param {number} [max=50] - The maximum allowed length of the text before truncation.
 *                            Defaults to 50 if not specified.
 * @returns {string} The truncated text with an ellipsis appended if it exceeds the maximum length,
 *                   otherwise the original text.
 *
 * @example
 * txtSlice("Hello, world!", 5); // "Hello..."
 * txtSlice("Short text");       // "Short text"
 */
export function txtSlice(txt: string, max: number = 50): string {
    if (txt.length > max) {
        return txt.slice(0, max) + '...';
    } else {
        return txt;
    }
}