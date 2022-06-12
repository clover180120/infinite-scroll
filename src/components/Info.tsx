import styled from 'styled-components';

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

function Name(props: { name: string }) {
  return (
    <InfoName>
      {props.name}
    </InfoName>
  )
}

function Bio(props: { phone: string, address: string, birthdayDate: string }) {
  return (
    <InfoBio>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        <li>Phone: {props.phone}</li>
        <li>City: {props.address}</li>
        <li>Birthday date: {new Date(props.birthdayDate).toLocaleDateString()}</li>
      </ul>
    </InfoBio>
  )
}

export default function Info(props: { name: string, phone: string, address: string, birthdayDate: string }) {
  return (
    <CenterDiv>
      <Name name={props.name} />
      <Bio phone={props.phone} address={props.address} birthdayDate={props.birthdayDate} />
    </CenterDiv>
  )
}
