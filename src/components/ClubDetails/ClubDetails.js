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
            store.clubDetails[0] = { ...store.clubDetails[0], [e.target.name]: e.target.value };
        });
        localStorage.setItem('arbox_details', JSON.stringify({...store,[e.target.name]: e.target.value}));
    }

    const phoneValidation = (e) => {
        const value = e.target.value;

        const validatedValue = value.replace(/[^0-9+]/g, '');

        return validatedValue;
    }

    const { name, description, phone, website, email, imgURL } = store.clubDetails[0];

    return (
        <Segment className="mainSegment">
        <Grid>
            <Grid.Row>
                <Grid.Column width={10}>
                <Segment>
                    <Form>
                        <Form.Group grouped>
                            <Form.Field control="input" value={name} label="Club Name" name="name" onChange={(e) => handleInputChange(e)} />
                            <Form.Field control="input" value={email} label="Email Address" name="email" onChange={(e) => handleInputChange(e)} />
                            <Form.Field control="input" value={description} label="Description" name="description" onChange={(e) => handleInputChange(e)} />
                            <Form.Field control="input" type="tel" pattern="[+]{1}[0-9]{11,14}" value={phone} label="Phone" name="phone" onChange={(e) => handleInputChange(e)} />
                            <Form.Field control="input" value={website} label="Website Address" name="website" onChange={(e) => handleInputChange(e)} />
                            <Form.Field control="input" value={imgURL} label="Image URL" name="imgURL" onChange={(e) => handleInputChange(e)} />
                        </Form.Group>
                    </Form>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={6} className="phoneColumn">
                    <div className="phoneFrame"></div>
                    <Segment className="previewSegment club">
                         <div className="preview">
                            <DetailsHeader clubDetails={store.clubDetails[0]} />
                            <DetailsBody clubDetails={store.clubDetails[0]} />
                        </div>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Segment>
    )
});

export default ClubDetails;
