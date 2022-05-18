import React from 'react';
import { useSelector } from 'react-redux';
import { Main, Button, HomeTitle, HomeSubTitle } from './style';
import styled from 'styled-components';

const UserBG = styled(Main)`
background-color: #ED1697;
`
const ProfileText = styled(HomeSubTitle)`
font-size: 3vh;
`

const UserProfile = () => {
    const { currentLevel, currentGame, username, badges, id } = useSelector((state) => state.user);
    // const user = useSelector((state) => state.user);

    // const isLoggedIn = useSelector((state) => !!state.auth.id);

    return (
        <UserBG>
            <HomeTitle>{username}</HomeTitle>
            <ProfileText>Current Level: {currentLevel}</ProfileText> 
            <ProfileText>Current Game: {currentGame}</ProfileText>
            <ProfileText>Badges: {badges ? badges.map((badge) => {
                <ProfileText key={badge.id}>{badge.name}</ProfileText>
            }) : null }</ProfileText>
        </UserBG>
    )
}

export default UserProfile;
