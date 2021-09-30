import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button.attrs((props: Active) => props)`
  position: relative;

  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 15px;

  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: #292f45;
  padding: 17px 24px;
  text-align: left;
  width: 100%;
  background: #fff;
  border: none;
  border-bottom: 2px solid #f0f2f4;

  &::after {
    position: absolute;
    top: 50%;
    right: 24px;
    content: "";
    border-top: 0.5em solid;
    border-right: 0.5em solid transparent;
    border-bottom: 0;
    border-left: 0.5em solid transparent;
    transform: ${(props) =>
      props.active ? "rotate(180deg) translateY(50%)" : "translateY(-50%)"};
    color: ${(props) => props.active && "#FF8324;"};
  }

  &:hover {
    color: #292f45;
    background: #fff;
  }
`;

const Dropdown = styled.div.attrs((props: Active) => props)`
  width: 100%;
  padding-left: 10px;
  border: none;
  display: ${(props) => (props.active ? "block" : "none")};

  a:hover {
    background: #fff;
  }
`;

export const ItemDropdown: React.FC<ItemDropdownType> = (props) => {
  const [isActive, setActive] = useState(false);

  return (
    <div className="dropdown">
      <Button
        className="dropdown-toggle"
        type="button"
        active={isActive}
        onClick={() => setActive(!isActive)}
      >
        {props.textButton}
      </Button>
      <Dropdown
        active={isActive}
        className="dropdown-menu"
        aria-labelledby="dropdownMenuButton"
      >
        {props.itemMenu.map((textItem, index) => (
          <a key={index} className="dropdown-item" href="/">
            {textItem}
          </a>
        ))}
      </Dropdown>
    </div>
  );
};

interface ItemDropdownType {
  className?: string;
  textButton: string;
  itemMenu: Array<string | number>;
}

type Active = {
  active: boolean;
};
