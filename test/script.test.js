const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'creampuff.com',
    'GTCOVID-19.com',
    'boyspanking.com',
    'boysdog.com'
]

it('this is a test', () => {
    googleSearch('testtest', dbMock)
})