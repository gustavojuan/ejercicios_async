import { banana, papaya, fruit} from './fruits.mjs'



async function getFruit()
{
    const fruta =  await fruit();
    return (fruta == 'banana ') ? banana() : papaya()
}

const res = await getFruit();
//console.log(res);


function fiveFruits() {
    const fruits = [];

    for (let index = 0; index < 5; index++) {
        fruits.push(getFruit());        
    }
    return Promise.all(fruits);
}
//console.log(await fiveFruits())
function tenFruits() {
    try {
      let numFruits = 0
  
      function printFruits(fruits) {
        if (numFruits >= 10) return
        numFruits += fruits.length
        console.log(fruits.join('\n'))
      }
  
      for(let i = 0; i < 3; i++) {
        fiveFruits().then(printFruits)
      }
  
    } catch {
      throw new Error('Mango!')
    }
  }
  
  tenFruits()
  