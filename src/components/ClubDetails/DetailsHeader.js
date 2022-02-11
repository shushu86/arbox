import React from 'react';
import { Icon, Menu} from 'semantic-ui-react'

const DetailsHeader = ({ clubDetails }) => {
    return (
        <div className="clubDetailsHeader">
            <div className="appIcon">
                <div>{clubDetails.imgURL ? <img src={clubDetails.imgURL} alt="Club" /> : <Icon name="building" size="large" circular color="grey" />}</div>
            </div>
            <div className="clubLabel big">
                {clubDetails.name}
            </div>
            <div className="clubLabel small">
                <div>{`Open ${clubDetails.open} - ${clubDetails.close}`}</div> 
            </div>
            <div className="clubLabel extra-small">
                <div>{clubDetails.address}</div>
            </div>
            <div className="clubContact">
                <div>
                    { clubDetails.phone && 
                        <Menu.Item
                            href={'tel:' + clubDetails.phone}
                            position="right"
                            target="_blank"
                                >
                            <Icon name="phone" size="big" className={!clubDetails.phone ? 'disabled' : '' } rotated="clockwise" />
                        </Menu.Item>
                    } 
                    { !clubDetails.phone && <Icon name="phone" size="big" className={!clubDetails.phone ? 'disabled' : '' } rotated="clockwise" /> }       
                </div>
                <div>
                    { clubDetails.website && 
                        <Menu.Item
                            href={'https://' + clubDetails.website.replace('https://','').replace('http://','')}
                            position="right"
                            target="_blank"
                            >
                            <Icon name="world" size="big" className={!clubDetails.website ? 'disabled' : '' }  />
                        </Menu.Item>
                    }
                    { !clubDetails.website && <Icon name="world" size="big" className={!clubDetails.website ? 'disabled' : '' }  /> }
                </div>
                <div>
                    { clubDetails.email && 
                        <Menu.Item
                        href={'mailto:' + clubDetails.email}
                        position="right"
                        target="_blank"
                            >
                        <Icon name="envelope outline" size="big" className={!clubDetails.email ? 'disabled' : '' } />
                    </Menu.Item>
                    }
                    { !clubDetails.email && <Icon name="envelope outline" size="big" className={!clubDetails.email ? 'disabled' : '' } /> }
                </div>
            </div>
        </div>
    )
}

export default DetailsHeader;
