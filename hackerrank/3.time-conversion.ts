/**
 * Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem
 *
 * Description:
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
 *
 * Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 *
 * Output
 * string: the time in 24hour format
 */
function timeConversion(s: string): string {
    const AM = 'AM';
    const PM = 'PM';

    // @ts-ignore
    const isAM = s.includes(AM);

    // @ts-ignore
    const isPM = s.includes(PM);
    const timeArr = s.replace(AM, '').replace(PM, '').split(':');

    if (isAM && timeArr[0] === '12') {
        timeArr[0] = '00';
    }

    if (isPM && timeArr[0] !== '12') {
        timeArr[0] = `${+timeArr[0] + 12}`;
    }

    return timeArr.join(':');
}

timeConversion('07:05:45PM'); // 19:05:45
