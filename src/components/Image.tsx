import styled from 'styled-components';

const StyledImage = styled.div.attrs((props: any) => ({ ...props }))`
  margin: ${({ margin }: any) => margin};
  padding: ${({ padding }: any) => padding};
  width: ${({ width }: any) => (width ? `${width}px` : '')};
  height: ${({ height }: any) => (height ? `${height}px` : '')};
  border-radius: ${({ round }: any) => (round ? '50%' : 'none')};
  overflow: hidden;

  img {
    margin: 0 auto 0 auto;
    //height: inherit;
    width: inherit;
  }
`;

const Image = ({
  src = '',
  name = '',
  margin = [],
  padding = [],
  color = '',
  size = 'sm',
  width,
  height,
  round,
}: any) => {
  return (
    <StyledImage
      margin={
        margin.length > 0 &&
        `${margin.map((m: string | number) => (Number(m) ? `${m}px` : m)).join(' ')};`
      }
      padding={
        padding.length > 0 &&
        `${padding.map((p: string | number) => (Number(p) ? `${p}px` : p)).join(' ')};`
      }
      color={color}
      size={size}
      width={width}
      height={height}
      round={round}
    >
      <img src={src} alt={name} />
    </StyledImage>
  );
};

export default Image;
