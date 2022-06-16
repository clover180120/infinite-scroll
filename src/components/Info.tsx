import styled from 'styled-components';
import { PersonProps } from '../App';

const CenterDiv = styled.div`
  text-align: center;
	padding: 0 16px;
`

const InfoName = styled.h1`
  margin-bottom: 20px;
`

const InfoBio = styled.div`
	margin: 28px 0;
`

const Info = (props: PersonProps) => {
  const { name, phone, address, birthdayDate } = props;
  return (
    <CenterDiv>
      <InfoName>
        {name}
      </InfoName>
      <InfoBio>
        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
          <li>Phone: {phone}</li>
          <li>City: {address}</li>
          <li>Birthday date: {new Date(birthdayDate).toLocaleDateString()}</li>
        </ul>
      </InfoBio>
    </CenterDiv>
  )
}

export default Info;
