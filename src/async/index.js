const hacerAlgoAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('resolve :)'), 3000)
            : reject(new Error('error:('))
    })
}

const algoAsync = async () => {
    try {
        const algo = await hacerAlgoAsync();
        console.log(algo)
    } catch (error) {
        console.error(error)
    }
}

algoAsync()