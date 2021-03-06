import React, { useContext, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { HandleSHowHeader, showHeaderContext } from '../../App';


const Error500 = () => {
    
    const handleShowHeader = useContext(HandleSHowHeader);
    const showHeader = useContext(showHeaderContext);
    useEffect(()=> {
        showHeader && handleShowHeader();
        return () => {
            !showHeader && handleShowHeader();
        }
    })

    return (
        <div>
            <h1>500에러</h1>
        </div>
    );
};

export default Error500;