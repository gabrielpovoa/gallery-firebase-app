import React from 'react'
import { Container } from './style'

interface Props {
    url: string,
    name:string
}

export const PhotoItem = ({url, name}: Props) => {
  return (
    <Container>
        <img src={url} alt={name} />
        <p>{name}</p>
    </Container>
  )
}
