//created own testing functions instead of installing a testing library like jest

const expect = (expr) => {
    return {
        toBe: (value) => {
            let testResults = ((expr == value) == false)? 'Test Failed': 'Test Successful'
            console.log(testResults)
        }
    }
}


function it(prompt,cb) {
    console.log(prompt)
    cb()
}

export {it,expect}