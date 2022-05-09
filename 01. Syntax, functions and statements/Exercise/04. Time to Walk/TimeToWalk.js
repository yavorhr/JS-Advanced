function solve(steps, stepLength, speedKmh) {
    let speedMetersPerSeconds = speedKmh * 1000 / 3600;
    const distance = steps * stepLength;
    const timeInSeconds = distance / speedMetersPerSeconds;

    const timesRested = Math.floor(distance / 500);
    const timeInSecondsPlusRestTime = timeInSeconds + (timesRested * 60);

    const hours = Math.floor(timeInSecondsPlusRestTime / 3600).toFixed(0).padStart(2, "0");
    const minutes = Math.floor(timeInSecondsPlusRestTime / 60).toFixed(0).padStart(2, "0");
    const seconds = (timeInSecondsPlusRestTime % 60).toFixed(0).padStart(2, "0");

    console.log(`${hours}:${minutes}:${seconds}`);

}

solve(4000, 0.60, 5);
