import styled from 'styled-components';

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 20px;
	box-sizing: border-box;
`

const Photo = (props: { avatar: string }) => {
  const { avatar } = props;
  return (
    <Img src={avatar} alt="fake user avatar" />
  )
}

export default Photo;
