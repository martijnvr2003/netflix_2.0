import React from 'react';
import { Container, Item, Inner, Pane, Title, SubTitle, Image } from './styles/jumbotron';

export default function Jumbotron({direction = 'row', ...restProps }) {
  return (
    <Inner direction={direction}>
       {children}
    </Inner>
  )
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
 return <Container {...restProps}>{children}</Container>;
}