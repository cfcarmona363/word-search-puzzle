import React from 'react'
import { StrongText, Text } from '../styledComponents/Components'

const WordsCounter = ({ puzzle }) => {
  const horizontalCheck = (i, j, forwards, arr) => {
    const j1 = j + forwards * 1
    const j2 = j + forwards * 2

    return (
      arr[i][j] === 'O' && j1 >= 0 && j2 >= 0 && arr[i][j1] && arr[i][j1] === 'I' && arr[i][j2] && arr[i][j2] === 'E'
    )
  }

  const verticalCheck = (i, j, down, arr) => {
    const i1 = i + down * 1
    const i2 = i + down * 2
    return (
      arr[i][j] === 'O' &&
      i1 >= 0 &&
      arr[i1] &&
      arr[i2] &&
      i2 >= 0 &&
      arr[i1][j] &&
      arr[i1][j] === 'I' &&
      arr[i2][j] &&
      arr[i2][j] === 'E'
    )
  }

  const diagonalCheck = (i, j, up, forwards, arr) => {
    const i1 = i + up * 1
    const i2 = i + up * 2
    const j1 = j + forwards * 1
    const j2 = j + forwards * 2
    return (
      arr[i][j] === 'O' &&
      i1 >= 0 &&
      arr[i1] &&
      arr[i2] &&
      i2 >= 0 &&
      arr[i1][j1] &&
      arr[i1][j1] === 'I' &&
      arr[i2][j2] &&
      arr[i2][j2] === 'E'
    )
  }

  const counter = arr => {
    let count = 0
    arr.forEach((item, i) =>
      item.forEach((element, j) => {
        if (horizontalCheck(i, j, -1, arr)) count++
        if (horizontalCheck(i, j, 1, arr)) count++
        if (verticalCheck(i, j, -1, arr)) count++
        if (verticalCheck(i, j, 1, arr)) count++
        if (diagonalCheck(i, j, 1, 1, arr)) count++
        if (diagonalCheck(i, j, 1, -1, arr)) count++
        if (diagonalCheck(i, j, -1, 1, arr)) count++
        if (diagonalCheck(i, j, -1, -1, arr)) count++
      })
    )
    return count
  }

  return (
    <Text>
      You can find the word OIE
      <StrongText>{` ${counter(puzzle)} `}</StrongText>
      times in this puzzle
    </Text>
  )
}

export default WordsCounter
