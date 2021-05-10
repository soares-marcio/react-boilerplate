import * as Style from './styles'
export default function Main() {
  return (
    <Style.Wrapper>
      <Style.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e ao lado escrito React Avançado"
      />
      <Style.Title>React Avançado</Style.Title>
      <Style.Description>
        Typescript, ReactJS, NextJS e Styled Components
      </Style.Description>
      <Style.Illustration
        src="/img/hero-illustration.svg"
        alt="Uma imagem estilizada de um menino programador sentado em frente de um computador com uma tela com código"
      />
    </Style.Wrapper>
  )
}
