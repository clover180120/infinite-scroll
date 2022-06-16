import Info from './Info';
import Photo from './Photo';
import { PersonProps } from '../App';

const Person = (props: PersonProps) => {
  const { avatar } = props;
  return (
    <>
      <Photo
        avatar={avatar}
      />
      <Info
        {...props}
      />
    </>
  )
}

export default Person;
