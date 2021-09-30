import React from "react";
import styled from "styled-components";
import { LogoWhite as Logo, Container } from "core/atoms/index";
import { BlockIconLinks } from "core/components/BlockIconLinks";

const FooterBlock = styled.footer`
  display: block;
  background: #292f45;
  padding: 37px 0;

  @media (min-width: 768px) {
    height: 191px;
  }

  a {
    color: #fff;

    &&:hover {
      color: #0d6efd;
      text-decoration: none;
    }
  }
`;

const Span = styled.span`
  display: flex;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  text-decoration: none;
`;
const PoliciBlock = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 420px) {
    flex-direction: column;
    .pos {
      max-width: max-content;
      margin: 0 auto;
    }
  }
`;

export const Footer: React.FC<FooterType> = (props) => {
  return (
    <FooterBlock className={props.className}>
      <Container className="d-flex flex-column">
        <div className="d-md-flex justify-content-between align-items-center">
          <Logo className="m-auto" />
          <BlockIconLinks className="col-md-5 mt-5 mb-4 mt-md-0 mb-md-0" />
        </div>
        <PoliciBlock className="mt-auto">
          <Span className="pos mb-3 mb-sm-0 ">XX Trade Platform © 2021</Span>
          <a className="pos" href="/">
            <Span>Privacy policy</Span>
          </a>
        </PoliciBlock>
      </Container>
    </FooterBlock>
  );
};

interface FooterType {
  className?: string;
}
