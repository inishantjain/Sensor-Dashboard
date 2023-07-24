import styled from "styled-components";

export const StyledLatestDataComponent = styled.div`
  border-radius: 0.5rem;
  padding: 1.5rem;
  background-color: #fff;
  width: fit-content; //!!
  & > h2 {
    margin: 0 0 1.5rem;
  }
  & > div {
    display: grid;
    grid-template-columns: repeat(2, minmax(250px, 300px));
    gap: 1.8rem;
  }

  .parameter-card {
    z-index: 0;
    position: relative;
    & > div {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
    }

    display: flex;
    justify-content: space-between;
    background-color: white;
    border-radius: 1.25rem;
    padding: 1.25rem;
    aspect-ratio: 2/1;

    h3 {
      color: var(--white, #fff);
      font-family: Manrope;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    p {
      color: var(--blur-grey, #f0f0f0);
      font-family: Manrope;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    .tlintersectIcon {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -10;
    }
    .brintersectIcon {
      z-index: -10;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`;
