function calculateSpare(input, currentPlayIndex, sumWithNextPlay) {
  const previousPlay = input[currentPlayIndex - 1] 
  const nextPlay = input[currentPlayIndex + 1]
  let sparePoints = 0

  if (sumWithNextPlay) {
    if (nextPlay === 'X') {
      sparePoints += (10 - previousPlay) + 10
    } else {
      sparePoints += (10 - previousPlay) + Number(nextPlay)
    }
  } else {
    sparePoints += (10 - previousPlay)
  }
  return sparePoints
}

function calculateStrike(input, currentPlayIndex) {
  const nextPlay = input[currentPlayIndex + 1]
  const followingPlay = input[currentPlayIndex + 2]
  let strikePoints = 10

  if (nextPlay === 'X') {
    strikePoints += 10
  } else {
    strikePoints += Number(nextPlay)
  }

  if (followingPlay === 'X') {
    strikePoints += 10
  } else if (followingPlay === '/') {
    strikePoints += calculateSpare(input, currentPlayIndex + 2, false)
  } else {
    strikePoints += Number(followingPlay)
  }
  return strikePoints
}

function calculateBowlingScore(input) {
  let finalScore = 0
  for (let i = 0; i < input.length; i++) {
      const currentPlay = input[i]
      const currentPlayIndex = i
      const isOneOfTheTwoLastPlays = (input.length - currentPlayIndex) <= 2

      if (currentPlay === '/') {
        if (isOneOfTheTwoLastPlays) {
          finalScore += calculateSpare(input, currentPlayIndex, false)
        } else {
          finalScore += calculateSpare(input, currentPlayIndex, true)
        }
      } else if(currentPlay === 'X') {    
        finalScore += calculateStrike(input, currentPlayIndex)
      } else {
        finalScore += Number(currentPlay)
      }
  }
  return finalScore
}

module.exports = {
  calculateBowlingScore
}
