import Info from './Info';
import Photo from './Photo';
import { PersonProps } from '../App';

const Person = (person: PersonProps) => {
  const { avatar, name, phone, address, birthdayDate } = person;
  return (
    <>
      <Photo
        avatar={avatar}
      />
      <Info
        {...person}
      />
    </>
  )
}

export default Person;
