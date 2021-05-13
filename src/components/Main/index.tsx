import * as Style from './styles'
export default function Main({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) {
  return (
    <Style.Wrapper>
      <Style.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e ao lado escrito React Avançado"
      />
      <Style.Title>{title}</Style.Title>
      <Style.Description>{description}</Style.Description>
      <Style.Illustration
        src="/img/hero-illustration.svg"
        alt="Uma imagem estilizada de um menino programador sentado em frente de um computador com uma tela com código"
      />
    </Style.Wrapper>
  )
}
