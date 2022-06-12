import styled from 'styled-components';

const Img = styled.img`
  width: 100px;
  height: 100px;
	box-sizing: border-box;
`

const Background = styled.div`
  color: #fff;
  border-radius: 60px;
`

export default function Photo(props: { avatar: string, index: number }) {
  return (
    <Background>
      <h3>{props.index}</h3>
      <Img src={props.avatar} alt="fake user avatar" />
    </Background>
  )
}
