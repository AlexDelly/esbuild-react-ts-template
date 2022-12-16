import * as S from "./HelloPage.styles";
import reactLogo from "../../public/reactLogo.svg";
import tsLogo from "../../public/tsLogo.png";
import styledLogo from "../../public/styledLogo.png";
import esLogo from "../../public/esLogo.png";

interface HelloPageProps {
  title: string;
}

export const HelloPage = ({ title }: HelloPageProps) => {
  return (
    <S.Container>
      <S.Row>
        <a href="https://esbuild.github.io/" target="_blank">
          <S.ESBuild src={esLogo} />
        </a>
      </S.Row>
      <S.Row>
        <S.Title>{title}</S.Title>
      </S.Row>
      <S.Row>
        <a href="https://reactjs.org" target="_blank">
          <S.RotateImage src={reactLogo} />
        </a>
      </S.Row>
      <S.Row>
        <a href="https://www.typescriptlang.org" target="_blank">
          <S.Image src={tsLogo} />
        </a>
        <a href="https://styled-components.com" target="_blank">
          <S.Image src={styledLogo} />
        </a>
      </S.Row>
    </S.Container>
  );
};
