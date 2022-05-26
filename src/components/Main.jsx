import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from "./main.module.css"

import Content from './Content/ContentBlock/Content';

const Main = () => {


    return (
        <div>
            <Content />
        </div>
    );
};

export default Main;