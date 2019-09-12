export function timeFormat(date) {
    // Must be an object of type Date
    if (!date instanceof Date) return false;

    let timeFormat = ''; 
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Get the current day
    let dateNow = new Date;
    let difference = daysBetween(dateNow, date);
    // console.log('Days between ' + difference);

    if (difference === 0) timeFormat += 'Today ';
    else if (difference === -1) timeFormat += 'Yesterday '; 
    else if (difference > -7) timeFormat += days[date.getDay()] + ' ';
    else if (difference <= -7 && difference >= -13) timeFormat += 'A week ago';
    else if (difference <= -13 && difference >= -20) timeFormat += 'Two weeks ago';
    else if (difference <= -21 && difference >= -29) timeFormat += 'Three weeks ago';
    else if (difference <= -30 && difference >= -30) timeFormat += 'A month ago';

    // Get time in hours and minutes if article was published today or yesterday
    if (difference > -7) {
        let minutes = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
        timeFormat += (date.getHours() + ':' + minutes);
    }

    return timeFormat;
}

const daysBetween = (first, second) => {
    return Math.round((second-first)/(1000*60*60*24));
}