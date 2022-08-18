/**
 *
 * @returns Current UNIX time in seconds
 */
export default function getCurrentTimeStamp() {
    return Math.floor(Date.now() / 1000);
}
