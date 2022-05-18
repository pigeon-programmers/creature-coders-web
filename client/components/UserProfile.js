import React from 'react';
import { useSelector } from 'react-redux';
import { Main, Button, HomeTitle, HomeSubTitle } from './style';

import styled from 'styled-components';

const UserBG = styled(Main)`
background-color: #ED1697;
`

const UserProfile = () => {
    const { currentLevel, currentGame, username, badges, id } = useSelector((state) => state.user);
    // const user = useSelector((state) => state.user);

    // const isLoggedIn = useSelector((state) => !!state.auth.id);

    return (
        <UserBG>
            <HomeTitle>{username}</HomeTitle>
            <p>Current Level: {currentLevel}</p> 
            <p>Current Game: {currentGame}</p>
            <p>Badges: {badges ? badges.map((badge) => {
                <div key={badge.id}>{badge.name}</div>
            }) : null }</p>
        </UserBG>
    )
}

export default UserProfile;
