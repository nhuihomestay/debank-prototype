// ex 1
// let n = 100
// while (n >= 0.5) console.log((n -= 0.5).toFixed(1))

// ex 2
// let n2 = 1
// while (n2 <= 100) {
//     console.log(n2)
//     n2 += 2
// }

// ex 3
// const n = 5
// let i = 1
// while (i <= n) {
//     process.stdout.write(`[${i}] `)
//     i++
// }

// ex 4
// let n = 19
// let sum = 0;
// let number1 = 1;

// while (number1 <= n) {
//     sum += number1;
//     number1++;
// }
// console.log(`n = ${n} sum = ${sum}`)

const data = [{
        name: 'foo',
        age: 10,
        address: [{
                email: 'fooexample',
                twitter: 'foo',
                facebook: 'foo lert'
            },
            {
                email: 'foo@example2',
                twitter: 'foo2',
                facebook: 'foo lert2'
            }
        ]
    },
    {
        name: 'sunvo',
        age: 10,
        address: [{
                email: 'foo@example',
                twitter: 'foo',
                facebook: 'foo lert'
            },
            {
                email: 'fooexample2',
                twitter: 'foo2',
                facebook: 'foo lert2'
            }
        ]
    }
]

const error = []
for (const d of data) {
    for (let i = 0; i < data.length; i++) {
        console.log(d.address[i].email)
        if (!d.address[i].email.includes('@')) {
            error.push(d.address[i].email)
        }
    }
}
console.log('wrong format ', error.join(', '))

const body = {
    id: 1,
    name: 'sunvo'
}

const queryData = []
if (body.id) queryData.push(`users.id = ${body.id}`)
if (body.name) queryData.push(`users.name = '${body.name}'`)
console.log(queryData)
const db = `
    SELECT
        users.id,
        users.name
    FROM users
    WHERE ${queryData ? queryData.join(' AND ') : 'users.id = 1'}
`
console.log(db)