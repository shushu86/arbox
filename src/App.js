import React from 'react';
import UserDetails from './components/UserDetails/UserDetails';
import ClubDetails from './components/ClubDetails/ClubDetails';
import AppHeader from './components/AppHeader';
import { Container } from  'semantic-ui-react';
import { Routes, Route } from 'react-router-dom';
import { useLocalObservable } from 'mobx-react';
import './style.css';

export const StoreContext = React.createContext();

const ls = localStorage.getItem('arbox_details');

const parsedData = JSON.parse(ls);

let StoreProvider;

!ls ? ( StoreProvider = (({ children }) => {
        const store = useLocalObservable(() => ({
          clubDetails: {
            name: '',
            address: '',
            open: '',
            close: '',
            phone: '',
            website: '',
            email: '',
            imgURL: ''
          },
          userDetails: {
              firstName: '',
              lastName: '',
              birthday: '',
              phone: '',
              bio: '',
              imgURL: ''
          }
        }));

        //store.userDetails.myClubs = store.clubDetails;
        return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
      })
    ) : ( StoreProvider = (({ children }) => {
            const store = useLocalObservable(() => (parsedData));
            return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
          })
        );

const App = () => {
  return (
    <StoreProvider>
    <Container className="appContainer">
      <AppHeader />
      <Routes>
        <Route path="/" element={<UserDetails />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/club-details" element={<ClubDetails />} />
      </Routes>
    </Container>
    </StoreProvider>
  );
}

export default App;
