function extractEmails(input) {
    let match = input.match(/(?<=\s)([a-z0-9]+[\._-]?\w+@([a-z]+(-?[a-z]+(\.[a-z]+)+)+))(\b|(?=\s))/gi);
    if (match) Object.values(match).forEach(email => console.log(email));
}
extractEmails('Please contact us at: support@github.com.')