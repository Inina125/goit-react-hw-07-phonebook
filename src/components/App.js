import GlobalStyle from 'components/GlobalStyles';
import { AppCont, HeadingPage, HeadingSection } from './App.styled';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
import {useDispatch, useSelector} from "react-redux";
import {fetchContacts} from "../redux/operations";
import {getError, getIsLoading} from "../redux/selectors";
import {useEffect} from "react";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppCont>
      <HeadingPage>Phonebook</HeadingPage>
      <ContactForm />
      <HeadingSection>Contacts</HeadingSection>
      <Filter />
      <ContactList />
      {isLoading && !error && <b>Request in progress...</b>}
      <GlobalStyle />
    </AppCont>
  );
};

export default App;
