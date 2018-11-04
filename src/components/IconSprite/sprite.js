const iconsNames = [
  ['arrow-left', 'arrow-up', 'calendar', 'cart', 'action'],
]

const size = 24

export const iconsMap = {}
for(let i = 0; i < iconsNames.length; i++) {
  const line = iconsNames[i]
  for(let j = 0; j < line.length; j++) {
    const name = line[j]
    const x = -size * j
    const y = -size * i

    iconsMap[name] = {x, y}
  }
}
