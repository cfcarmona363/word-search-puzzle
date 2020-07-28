/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { PageContainer, GridContainer } from '../styledComponents/StyledContainers'
import { Title, Separator, Text } from '../styledComponents/Components'
import WordSeachPuzzle from '../components/WordSeachPuzzle'
import { getPuzzle } from '../services/puzzlesService'
import { RaisedButton } from '../components/Buttons/Button'
import WordsCounter from '../components/WordsCounter'

const Home = () => {
  const [puzzle, setPuzzle] = useState([])
  const [puzzleIndex, setPuzzleIndex] = useState(0)

  useEffect(() => {
    setPuzzle(getPuzzle(puzzleIndex))
  }, [puzzleIndex])

  return (
    <PageContainer>
      <Title>Word search puzzle</Title>
      <Separator />
      <Text>Select one of the following puzzles:</Text>
      <Separator size={3} />
      <GridContainer>
        <RaisedButton label="Puzzle #1" onClick={() => setPuzzleIndex(0)} />
        <RaisedButton label="Puzzle #2" onClick={() => setPuzzleIndex(1)} />
        <RaisedButton label="Puzzle #3" onClick={() => setPuzzleIndex(2)} />
        <RaisedButton label="Puzzle #4" onClick={() => setPuzzleIndex(3)} />
        <RaisedButton label="Puzzle #5" onClick={() => setPuzzleIndex(4)} />
      </GridContainer>
      <Separator size={3} />
      <WordSeachPuzzle puzzle={puzzle} />
      <Separator size={4} />
      <WordsCounter puzzle={puzzle} />
    </PageContainer>
  )
}

export default Home
