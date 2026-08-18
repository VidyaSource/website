/**
 * Frontmatter dates are date-only values, and YAML parses those as midnight UTC.
 * Formatting them in the build machine's local zone rolls the calendar back a day
 * anywhere west of Greenwich, so every display format pins the zone to UTC.
 */
const postDateFormat = new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric"
});

export const formatPostDate = (date: Date): string => postDateFormat.format(date);

export const toDateAttribute = (date: Date): string => date.toISOString();
