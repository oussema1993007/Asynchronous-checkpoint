//---------------------------Task 1--------------------------------//

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// Example usage for Task 1
iterateWithAsyncAwait([1, 2, 3, 4, 5]).then(() => {
    console.log('Iteration complete');
});
//---------------------------Task 1--------------------------------//
//---------------------------Task 2--------------------------------//
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fetched data from API");
        }, 2000);
    });
}

async function awaitCall() {
    const data = await fetchData();
    console.log(data);
}

// Example usage for Task 2
awaitCall();
//---------------------------Task 2--------------------------------//
//---------------------------Task 3--------------------------------//

async function fetchDataWithErrorHandling() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Fetched data from API");
            } else {
                reject("Failed to fetch data from API");
            }
        }, 2000);
    });
}

async function awaitCallWithErrorHandling() {
    try {
        const data = await fetchDataWithErrorHandling();
        console.log(data);
    } catch (error) {
        console.log("An error occurred:", error);
    }
}

// Example usage for Task 3
awaitCallWithErrorHandling();
//---------------------------Task 3--------------------------------//
//---------------------------Task 4--------------------------------//

async function chainedAsyncFunctions() {
    for (let i = 0; i < 3; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Function ${i + 1} called`);
    }
}

// Example usage for Task 4
chainedAsyncFunctions().then(() => {
    console.log('Chained functions complete');
});
//---------------------------Task 4--------------------------------//
//---------------------------Task 5--------------------------------//

async function concurrentRequests() {
    const promise1 = fetchData();
    const promise2 = fetchData();
    try {
        const [result1, result2] = await Promise.all([promise1, promise2]);
        console.log("Results:", result1, result2);
    } catch (error) {
        console.log("An error occurred during concurrent requests:", error);
    }
}

// Example usage for Task 5
concurrentRequests().then(() => {
    console.log('Concurrent requests complete');
});
//---------------------------Task 5--------------------------------//












