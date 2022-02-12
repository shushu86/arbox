import React, { useState } from 'react';
import { Placeholder } from 'semantic-ui-react';

const DetailsBody = () => {
    const [menuSelect, setMenuSelect] = useState('membership');

    return (
        <>
            <div className="clubDetailsBody">
                <div className="clubBodyToggle">
                    <div onClick={() => setMenuSelect('membership') }>My Memberships { menuSelect === 'membership' && <div className="shortUnderline"></div> }</div>
                    <div onClick={() => setMenuSelect('forms') }>My Forms  { menuSelect === 'forms' && <div className="shortUnderline"></div> } </div>
                </div>
                <div>
                    <Placeholder>
                        <Placeholder.Header>
                            <Placeholder.Line />
                        </Placeholder.Header>
                    </Placeholder>
                </div>
                <Placeholder>
                    <Placeholder.Header>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Paragraph>
                </Placeholder>
            </div>
        </>
    )
}

export default DetailsBody;

