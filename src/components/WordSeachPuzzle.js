import React from 'react'
import styled from 'styled-components'
import { lightGrey } from '../constants/constants'

const Puzzle = styled.div`
  padding: 1px;
  border: solid 1px ${lightGrey};
  width: max-content;
`

const PuzzleRow = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
  display: flex;
`

const PuzzleItem = styled.div`
  padding: 5px;
  border: solid 1px ${lightGrey};
  color: ${lightGrey};
  font-size: 20px;
  width: 25px;
  text-align: center;
`

const WordSeachPuzzle = ({ puzzle }) => {
  function renderPuzzle(data) {
    return data.map((item, index) => (
      <PuzzleRow key={index} cols={item.length}>
        {item.map((subItem, index) => (
          <PuzzleItem key={subItem + index}> {subItem}</PuzzleItem>
        ))}
      </PuzzleRow>
    ))
  }

  return <Puzzle>{renderPuzzle(puzzle)}</Puzzle>
}

export default WordSeachPuzzle
