import { useState, useEffect } from 'react'
import { faker } from '@faker-js/faker';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import Person from './components/Person';

const delay = (seconds: number) => new Promise((resolve) => setTimeout(() => resolve(true), seconds * 1000));

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
`

const PersonCard = styled.div`
  width: 250px;
	min-height: 400px;
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
  margin: 20px;
`

export type PersonProps = {
  id: string,
  name: string,
  phone: string,
  address: string,
  birthdayDate: string,
  avatar: string,
};

type CreatePersonFunc = () => PersonProps;

const createPerson: CreatePersonFunc = () => ({
  id: faker.datatype.uuid(),
  name: faker.name.lastName(),
  phone: faker.phone.phoneNumber('501-###-###'),
  address: faker.address.city(),
  birthdayDate: faker.fake("{{date.birthdate}}"),
  avatar: faker.image.avatar(),
})

const createPersonCard = (person: PersonProps, i: number) => {
  return (
    <PersonCard key={person.id}>
      <h1>{i + 1}</h1>
      <Person
        {...person}
      />
    </PersonCard>
  )
}

function App() {
  const [people, setPeople] = useState<PersonProps[]>([]);
  let [isLoading, setIsLoading] = useState<boolean>(true);

  const appendOnPeople = async () => {
    const newPeople: PersonProps[] = [];
    for (let i = 1; i <= 10; i++) {
      newPeople.push(createPerson());
    }
    await delay(1);
    setPeople([...people, ...newPeople]);
    setIsLoading(false);
  }

  const ifScrollToBottom = (fn: () => void) => {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    if (scrollTop + windowHeight >= scrollHeight - 20) { 
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
      {isLoading &&
        <LoadingContainer>
          <ReactLoading type={'bubbles'} height={'100px'} width={'100px'} color={'#514e4e'}></ReactLoading>
        </LoadingContainer>
      }
    </>
  )
}

export default App
