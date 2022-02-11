import React, { useContext } from 'react';
import DetailsHeader from './DetailsHeader';
import DetailsBody from './DetailsBody';
import { Grid, Form, Segment } from 'semantic-ui-react';
import { Outlet } from 'react-router-dom';
import { StoreContext } from '../../App';
import { observer } from 'mobx-react';
import { runInAction } from 'mobx';
import './style.css';

const UserDetails = observer(() => {
    const store = useContext(StoreContext)

    const handleInputChange = (e) => {
        runInAction(() => {
            store.userDetails = { ...store.userDetails, [e.target.name]: e.target.value };
        });
        localStorage.setItem('arbox_details', JSON.stringify({...store,[e.target.name]: e.target.value}));
    }

    const { firstName, lastName, birthday, imgURL, bio } = store.userDetails;

    return (
        <Segment>
        <Grid>
            <Grid.Row>
                <Grid.Column width={10}>
                <Segment>
                    <Form>
                        <Form.Group grouped>
                            <Form.Field control="input" value={firstName} label="First Name" name="firstName" onChange={(e) => handleInputChange(e)} />
                            <Form.Field control="input" value={lastName} label="Last Name" name="lastName" onChange={(e) => handleInputChange(e)} />
                            <Form.Field control="input" value={bio} label="Bio" name="bio" onChange={(e) => handleInputChange(e)} />
                            <Form.Field type="date" control="input" value={birthday} label="Birthday" name="birthday" onChange={(e) => handleInputChange(e)} />
                            <Form.Field control="input" value={imgURL} label="Image URL" name="imgURL" onChange={(e) => handleInputChange(e)} />
                        </Form.Group>
                    </Form>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={6} style={{ display: 'flex', justifyContent: 'center', paddingBottom: '10px'}}>
                    <div className="phoneFrame"></div>
                    <Segment style={{ height: '560px', backgroundColor: 'rgb(95 203 128)' , borderRadius: '8%', width: '75%'}}>
                        <div className="preview">
                            <DetailsHeader userDetails={store.userDetails} />
                            <DetailsBody userDetails={store.userDetails} clubDetails={store.clubDetails} />
                        </div>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Outlet />
        </Segment>
    )
});

export default UserDetails;
