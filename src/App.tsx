import { useState, useEffect } from 'react'
import { faker } from '@faker-js/faker';
import { Photo, Info } from './components'
import styled from 'styled-components';
import default_avatar from './assets/avatar-svgrepo-com.svg';
import ReactLoading from 'react-loading';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
`

const PersonCard = styled.div`
  width: 250px;
	min-height: 350px;
	background-color: #fff;
  box-shadow: 0px 16px 12px 2px rgba(0, 0, 0, 0.3);
	color: #3a3a3a;
	border-radius: 60px;
	padding: 12px;
  margin: 20px;
  text-align: center;
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

type Person = {
  id: string,
  name: string,
  phone: string,
  address: string,
  birthdayDate: string,
  avatar: string,
}

type CreatePersonFunc = () => Person

const createPerson: CreatePersonFunc = () => ({
  id: faker.datatype.uuid(),
  name: faker.name.lastName(),
  phone: faker.phone.phoneNumber('501-###-###'),
  address: faker.address.city(),
  birthdayDate: faker.fake("{{date.birthdate}}"),
  avatar: default_avatar,
})

const createPersonCard = (person: Person, i: number) => {
  const { avatar, name, phone, address, birthdayDate } = person;
  return (
    <PersonCard key={person.id}>
      <Photo avatar={avatar} index={i+1} />
      <Info
        name={name}
        phone={phone}
        address={address}
        birthdayDate={birthdayDate}
      />
    </PersonCard>
  )
}

function App() {
  const [people, setPeople] = useState<Person[]>([]);
  let [isLoading, setIsLoading] = useState<boolean>(false);

  const appendOnPeople = () => {
    const newPeople: Person[] = [];
    for (let i = 1; i <= 10; i++) {
      newPeople.push(createPerson());
    }
    setTimeout(() => setPeople([...people, ...newPeople]), 1000);
    setIsLoading(false);
  }

  const ifScrollToBottom = (fn: () => void) => {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    if (scrollTop + windowHeight == scrollHeight) { 
      setIsLoading(true);
      fn();
    }
  }

  const onScroll = () => {
    ifScrollToBottom(appendOnPeople);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll])

  useEffect(() => {
    appendOnPeople();
  }, [])

  return (
    <>
      <CardContainer>
        {people.map((person, i) => createPersonCard(person, i))}
      </CardContainer>
      {!isLoading &&
        <LoadingContainer>
          <ReactLoading type={'spokes'} height={'100px'} width={'100px'} color={'#3a3a3a'}></ReactLoading>
        </LoadingContainer>
      }
    </>
  )
}

export default App
