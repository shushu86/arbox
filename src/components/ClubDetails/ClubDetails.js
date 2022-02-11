import React, { useContext } from 'react';
import DetailsHeader from './DetailsHeader';
import DetailsBody from './DetailsBody';
import { Grid, Form, Segment } from 'semantic-ui-react';
import { StoreContext } from '../../App';
import { observer } from 'mobx-react';
import { runInAction } from 'mobx';
import './style.css';

const ClubDetails = observer(() => {
    const store = useContext(StoreContext)

    const handleInputChange = (e) => {
        if(e.target.name === 'phone') {
            e.target.value = phoneValidation(e);
        }
        runInAction(() => {
            store.clubDetails = { ...store.clubDetails, [e.target.name]: e.target.value };
        });
        localStorage.setItem('arbox_details', JSON.stringify({...store,[e.target.name]: e.target.value}));
    }

    const phoneValidation = (e) => {
        const value = e.target.value;

        const validatedValue = value.replace(/[^0-9+]/g, '');

        return validatedValue;
    }

    const { name, address, open, close, phone, website, email, imgURL } = store.clubDetails;

    return (
        <Segment>
        <Grid>
            <Grid.Row>
                <Grid.Column width={10}>
                <Segment>
                    <Form>
                        <Form.Group grouped>
                            <Form.Field control="input" value={name} label="Club Name" name="name" onChange={(e) => handleInputChange(e)} />
                            <Form.Field control="input" value={email} label="Email Address" name="email" onChange={(e) => handleInputChange(e)} />
                            <Form.Field control="input" value={address} label="Address" name="address" onChange={(e) => handleInputChange(e)} />
                            <Form.Group style={{ padding: '8px' }}>
                                <Form.Field control="input" type="time" value={open} label="Opens At" name="open" onChange={(e) => handleInputChange(e)} />
                                <Form.Field control="input" type="time" value={close} label="Closes At" name="close" onChange={(e) => handleInputChange(e)} />
                            </Form.Group>
                            <Form.Field control="input" type="tel" pattern="[+]{1}[0-9]{11,14}" value={phone} label="Phone" name="phone" onChange={(e) => handleInputChange(e)} />
                            <Form.Field control="input" value={website} label="Website Address" name="website" onChange={(e) => handleInputChange(e)} />
                            <Form.Field control="input" value={imgURL} label="Image URL" name="imgURL" onChange={(e) => handleInputChange(e)} />
                        </Form.Group>
                    </Form>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={6} style={{ display: 'flex', justifyContent: 'center', paddingBottom: '10px'}}>
                    <div className="phoneFrame"></div>
                    <Segment style={{ height: '560px', backgroundColor: '#1a518f' , borderRadius: '8%', width: '75%'}}>
                         <div className="preview">
                            <DetailsHeader clubDetails={store.clubDetails} />
                            <DetailsBody clubDetails={store.clubDetails} />
                        </div>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Segment>
    )
});

export default ClubDetails;
