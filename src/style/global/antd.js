import { css } from "styled-components";

const antd = css`
  .calendar {
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0 0 0 5px;
    cursor: pointer;

    .ant-picker-input input {
      display: none;
    }

    .anticon-close-circle {
      display: none;
    }
  }
`;

export default antd;
