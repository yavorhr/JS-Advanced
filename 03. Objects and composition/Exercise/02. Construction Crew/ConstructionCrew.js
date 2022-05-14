function solve(worker) {
  if (worker.dizziness) {
    worker.levelOfHydrated += (worker.weight * 0.1) * worker.experience;
    worker.dizziness = false;
  }

  return worker;
}

console.log(solve({
  weight: Number,
  experience: Number,
  levelOfHydrated: Number,
  dizziness: Boolean
}));
