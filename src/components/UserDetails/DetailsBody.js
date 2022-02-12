import React from 'react';
import { Icon,Menu } from 'semantic-ui-react';

const DetailsBody = ({ userDetails, clubDetails }) => {
    
    const month= ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const birthdaySplit = userDetails.birthday.split('-');

    const birthdayString = month[birthdaySplit[1]-1] + ',' + birthdaySplit[2] + ',' + birthdaySplit[0];

    let clubDetailsFiltered = clubDetails.filter((club) => {
        return userDetails.myClubs.includes(club.id)
    });
  
    return (
        <div className="detailsBody">
            <div className="myClubsHeader">
                <h4>My Clubs</h4>
            </div>
            { clubDetailsFiltered.map((clubDetails) => {
                    return (
                    <div className="userClubDetails" key={clubDetails.id}>
                    <div>{clubDetails.imgURL ? <img className="clubImg" src={clubDetails.imgURL} alt="Club" /> : 'N/A'}</div>
                    <div style={{ flexGrow: '1' }}>
                        <div>{clubDetails.name}</div>
                        <div style={{ fontWeight: 'bold' }}>{clubDetails.isActive ? <span style={{ color: 'green' }}>Active</span> : <span style={{ color: 'red' }}>Inactive</span>}</div>
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
                    )})

            }
            
            <div className="detailsBodyHeader">
                <div><h4>Personal Details</h4></div>
                <div><Icon name="pencil" color="grey" /></div>
                <div>Edit</div>
            </div>
            <div className="userPersonalDetails">
                <div><Icon name="birthday cake" color="grey" size="large" /></div>
                <div style={{ flexGrow: '1' }}>
                    <div style={{ color: 'gray' }}>Birthday</div>
                    {userDetails.birthday && <div>{birthdayString}</div>}
                </div>
            </div>
        </div>
    )
};

export default DetailsBody;

