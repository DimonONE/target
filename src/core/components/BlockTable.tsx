import React from "react";
import styled from "styled-components";

const TableBlock = styled.ul`
  box-shadow: 0px 3px 3px rgba(41, 47, 69, 0.05);
  border-radius: 30px;
  padding: 0 49px 12px 49px;
  background: #fff;

  .head-container {
    padding-top: 38px;
  }

  .block-item:last-child {
    border: none;
  }

  strong,
  .block-item {
    li:last-child {
      justify-content: flex-end;
      display: flex;
      span {
        width: 50px;
        display: block;
      }
    }
  }

  .table__head,
  .block-item {
    display: flex;
    justify-content: space-between;
    padding: 38px 50px;
    border-bottom: 2px solid #f0f2f4;

    li {
      font-size: 11px;
      text-transform: uppercase;
    }
  }

  li {
    display: block;
    width: 33.3%;
  }

  .table-mobile__head {
    display: none;
  }

  .container__li {
    display: flex;
    width: 100%;
  }

  .container-mobile {
    display: none;
  }

  @media (max-width: 576px) {
    padding: 0 29px;

    .block-item {
      border-bottom: none;
      padding: 0;
    }

    .item-li {
      display: none;
    }

    li {
      width: auto;
    }

    .table__head {
      display: none;
    }

    .table-mobile__head {
      display: block;
    }

    .block-item:last-child {
      padding-bottom: 42px;
      .container-mobile,
      .container-mobile__block:last-child {
        border-bottom: none;
      }
    }

    .container-mobile {
      width: 100%;
      display: block;
      border-bottom: 2px solid #f0f2f4;
      margin-top: 20px;
      padding: 0 29px;
    }

    .container-mobile__block {
      width: auto;
      display: flex;
      justify-content: space-between;
      padding: 16px 20px;
      border-bottom: 1px solid #f0f2f4;
    }
  }
`;

export const Table: React.FC<TableType> = (props) => {
  const dataTable = {
    arr: [1, 2, 3, 4],
  };
  return (
    <TableBlock className={`list-unstyled ${props.className}`}>
      {props.textHead ? (
        <div className="head-container">{props.textHead}</div>
      ) : (
        ""
      )}
      <strong className="table__head">
        <li className="text-start">
          <span>name</span>
        </li>
        <li className="text-center">
          <span>profit</span>
        </li>
        <li className="text-end">
          <span>ratio</span>
        </li>
      </strong>
      {dataTable.arr.map((item, index) => (
        <div className="block-item d-flex" key={index}>
          <li className="item-li text-start">
            <span>@marvin</span>
          </li>
          <li className="item-li text-center">
            <span>0.59%</span>
          </li>
          <li className="item-li text-end">
            <span>0.3</span>
          </li>

          {/* mobile */}
          <div className="container-mobile">
            <div className="container-mobile__block">
              <strong className="table-mobile__head">
                <li>
                  <span>name</span>
                </li>
              </strong>
              <li className="text-end">
                <span>@marvin</span>
              </li>
            </div>
            <div className="container-mobile__block">
              <strong className="table-mobile__head">
                <li>
                  <span>profit</span>
                </li>
              </strong>
              <li className="text-end">
                <span>0.59%</span>
              </li>
            </div>
            <div className="container-mobile__block">
              <strong className="table-mobile__head">
                <li>
                  <span>ratio</span>
                </li>
              </strong>
              <li className="text-end">
                <span>0.3</span>
              </li>
            </div>
          </div>
        </div>
      ))}
    </TableBlock>
  );
};

interface TableType {
  textHead?: object;
  className?: string;
}
