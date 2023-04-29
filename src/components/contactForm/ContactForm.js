import { AddBtn, Field, FormCont } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import {addContact} from "../../redux/operations";


const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contacts.filter(item => item.name === name).length > 0) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <FormCont onSubmit={handleSubmit}>
      <Field type="text" name="name" title="Enter contact name" />
      <Field
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <AddBtn type="submit">Add contact</AddBtn>
    </FormCont>
  );
};

export default ContactForm;
