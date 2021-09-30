import React from "react";
import styled from "styled-components";

const Link = styled.a`
  cursor: pointer;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  text-decoration: none;
`;

export const TextLink: React.FC<TextLinkType> = (props) => {
  return (
    <Link href={props.href} className={props.className}>
      {props.content}
    </Link>
  );
};

interface TextLinkType {
  className?: string;
  href: string;
  content: string | object;
}
