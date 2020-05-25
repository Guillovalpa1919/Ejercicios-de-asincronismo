const promesa1 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('resolve1')
        } else {
            reject('reject1')
        }
    })
}
promesa1()
    .then(response => console.log(response))
    .catch(err => console.error(err))

const promesa2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve('resolve2')
            } else {
                const error = new Error('reject2')
                reject(error)
            }
        }, 3000)
    })
}

promesa2()
    .then(response => console.log(response))
    .catch(err => console.error(err))

Promise.all([promesa1(), promesa2()])
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.error(err)
    })