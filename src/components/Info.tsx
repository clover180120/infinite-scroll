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

const Bio = ({ phone, address, birthdayDate }: PersonProps) => {
  return (
  <InfoBio>
    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
      <li>Phone: {phone}</li>
      <li>City: {address}</li>
      <li>Birthday date: {new Date(birthdayDate).toLocaleDateString()}</li>
    </ul>
  </InfoBio>
  )
}

const Info = (props: PersonProps) => {
  const { name } = props;
  return (
    <CenterDiv>
      <InfoName>
        {name}
      </InfoName>
      <Bio
        {...props}
      />
    </CenterDiv>
  )
}

export default Info;
