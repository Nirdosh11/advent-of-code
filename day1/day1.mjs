import fs from 'fs'
const data = fs.readFileSync("./data.txt", "utf-8").replace(/\n|\r/g, ",").split(',,')
// --- Part One start ---
const subCalory =[]

for(const item of data){
    const itemData = item.split(',')
    let subTotal = 0
    for(const subItem of itemData){
        subTotal += +subItem
    }
   subCalory.push(subTotal) 
   subTotal = 0
}

const maxCalory = subCalory.sort((a,b) => b-a)[0]

console.log("max cal = ", maxCalory)
// --- Part One End ---
// --- Part Two Start---

let top3Total = 0
for(const itemVal of subCalory.splice(0,3)){
    top3Total += itemVal
}
console.log("Top three total val = ", top3Total)

// --- Part Two End---