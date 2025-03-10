import { banana, papaya } from './fruits.mjs'


// -----------------------------------------
// Apartado 1
// -----------------------------------------

async function timedExecution(task) {
  const start = performance.now()
  const item = await task()
  const end = performance.now()
  return {
    result: item,
    time: end - start
  }
}

console.log(await timedExecution(banana))

// -----------------------------------------
// Apartado 2
// -----------------------------------------

async function quickFruits(fruitName, times) {
  const task = fruitName === 'banana' ? banana : papaya

  const promises = []
  for(let i = 0; i < times; i++) { promises.push(timedExecution(task)) }

  const fruits =  await Promise.all(promises)

  return fruits.map(({ result, time }) => ({ fruit: result, time }))
}

console.log(await quickFruits('banana', 3))

// -----------------------------------------
// Apartado 3
// -----------------------------------------

async function fruitRace() {

  try {
    return await Promise.any([
      quickFruits('banana', 5),
      quickFruits('papaya', 5)
    ])
  } catch {
    throw new Error('¡Piña!')
  }

}

console.log(await fruitRace())
