function wait(waitTime) {
    return new Promise((resolve) => {
        setTimeout(resolve, waitTime);
    });
}


wait(1000).then(() => console.log(`You'll see this after 1 second`));
wait(3000).then(() => console.log(`You'll see this after 3 seconds`));