import styled from "styled-components";

export const StyledSidebar = styled.div`
  border-radius: 0.4rem;
  background-color: #000000;
  background-image: linear-gradient(315deg, #141414 0%, #414141 74%);
  padding: 1rem;
  ul {
    list-style: none;
    li {
      background-color: #f11a7b;
      margin-bottom: 1rem;
      border-radius: 0.4rem;
      padding: 0.5rem 1rem;
      color: white;
      cursor: pointer;
    }
    li:hover {
      background-color: #f11a7bcc;
    }
  }
`;
