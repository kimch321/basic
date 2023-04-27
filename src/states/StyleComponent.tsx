import React from "react";
import styled, {css} from "styled-components";

type ButtonProps = {
    primary?: boolean;
}

const Container = styled.div`
  display: flex;
`;
const Button = styled.button<ButtonProps>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #3c5b69;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.primary &&
    css`
            background: #009cd5;
            color: white;
          `}
`
export default function StyleComponent() {

    return(
        <Container>
            <Button>Normal Button</Button>
            <Button primary>Primary Button</Button>
        </Container>
    );
}