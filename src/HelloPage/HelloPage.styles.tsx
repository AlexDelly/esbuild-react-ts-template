import styled, { css } from "styled-components";

const animate = css`
  animation: App-logo-spin infinite 20s linear;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const imageStyles = css`
  width: 100px;
  height: 100px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  gap: 2rem;
`;

export const RotateImage = styled.img`
  width: 140px;
  height: 140px;
  ${animate}
  cursor: pointer;
`;

export const Image = styled.img`
  ${imageStyles}
  cursor: pointer;
`;

export const ESBuild = styled.img`
  width: 500px;
  padding: 5rem;
  cursor: pointer;
`;

export const Title = styled.span`
  color: #fff;
  font-size: 3rem;
  font-weight: 300;
`;
