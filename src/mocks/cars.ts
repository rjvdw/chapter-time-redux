export type Car = {
  brand: string,
  model: 'hatchback' | 'station' | 'sedan' | 'truck' | 'sports',
  mpg: number,
}

export function fetchCarsOk(): Promise<Car[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { brand: 'Peugeot', model: 'station', mpg: 20 },
        { brand: 'Porsche', model: 'sports', mpg: 18 },
        { brand: 'Range Rover', model: 'truck', mpg: 12 },
      ])
    }, 2500)
  })
}

export function fetchCarsNok(): Promise<Car[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('504: Gateway Timeout'))
    }, 2500)

  })
}
