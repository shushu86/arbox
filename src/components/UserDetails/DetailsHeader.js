import React from 'react';
import { Icon } from 'semantic-ui-react'

const DetailsHeader = ({ userDetails }) => {
    return (
        <div className="detailsHeader">
            <div className="searchNotification">
                <Icon name="search"  size="big" />
                <Icon name="bell outline" size="big" />
            </div>
            <div className="userIcon">
                <div>{userDetails.imgURL ? <img src={userDetails.imgURL} alt="user" /> : userDetails.firstName.substr(0,1) + userDetails.lastName.substr(0,1)}</div>
            </div>
            <div className="userLabel big">
                {userDetails.firstName} {userDetails.lastName}
            </div>
            <div className="userLabel small">
                {userDetails.bio}
            </div>
        </div>
    )
}

export default DetailsHeader;
