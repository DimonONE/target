import React from "react";
import styled from "styled-components";

interface ButtonProps {
  className?: string;
  text?: string | object;
  icon?: string | object;
}

const Button = styled.button.attrs(
  (props: { bg: string; color: string }) => props
)`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  border: none;
  color: ${(props) => props.color || "#fff"};
  background: ${(props) =>
    props.bg ||
    "linear-gradient(255.22deg, #ff8820 10.44%, #ff7b2c 69.37%, #ff386a 89.56%)"};
  padding: 13px 30px;
  border-radius: 5px;
  text-transform: uppercase;
  align-items: center;
`;

const Icon = styled.div`
  margin-right: 11px;
`;

export const ButtonDefault: React.FC<ButtonProps> = (props) => {
  return (
    <Button className={props.className}>
      {props.icon && <Icon>{props.icon}</Icon>}
      <span>{props.text}</span>
    </Button>
  );
};
