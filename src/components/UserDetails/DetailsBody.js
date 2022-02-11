import React from 'react';
import { Icon,Menu } from 'semantic-ui-react';

const DetailsBody = ({ userDetails, clubDetails }) => {
    
    const isActive = () => {
        const timeNowH = new Date().getHours().toString();
        const timeNowM = new Date().getMinutes().toString();
        
        const timeNow = timeNowH + ':' + timeNowM;
        
        if(clubDetails.open.replace(/^0+/, '') <= timeNow && clubDetails.close.replace(/^0+/, '') >= timeNow) 
            return true;
        
        return false;
    }

    const timeHelper = isActive();

    return (
        <div className="detailsBody">
            <div>
                <h4>My Clubs</h4>
            </div>
            <div className="userClubDetails">
                <div>{clubDetails.imgURL ? <img className="clubImg" src={clubDetails.imgURL} alt="Club" /> : 'N/A'}</div>
                <div style={{ flexGrow: '1' }}>
                    <div>{clubDetails.name}</div>
                    <div style={{ fontWeight: 'bold' }}>{timeHelper ? <span style={{ color: 'green' }}>Active</span> : <span style={{ color: 'red' }}>Closed</span>}</div>
                </div>
                <div>
                    { clubDetails.phone && 
                            <Menu.Item
                                href={'tel:' + clubDetails.phone}
                                position="right"
                                target="_blank"
                                    >
                                <Icon name="phone" rotated="clockwise" size="big" color="grey" />
                            </Menu.Item>
                    }
                    {!clubDetails.phone && <Icon name="phone" rotated="clockwise" size="big" color="grey" disabled />}
                </div>
                <Icon corner="top right" name="arrow right" style={{ marginLeft: '-10px', marginTop: '-15px' }} color="grey"/> 
                <Icon name="chevron right" size="big" style={{ marginRight: '-15px' }} color="grey"/>    
            </div>
            <div className="detailsBodyHeader">
                <div><h4>Personal Details</h4></div>
                <div><Icon name="pencil" color="grey" /></div>
                <div>Edit</div>
            </div>
            <div className="userPersonalDetails">
                <div><Icon name="birthday cake" color="grey" size="large" /></div>
                <div style={{ flexGrow: '1' }}>
                    <div>Birthday</div>
                    <div>{userDetails.birthday}</div>
                </div>
            </div>
        </div>
    )
};

export default DetailsBody;

