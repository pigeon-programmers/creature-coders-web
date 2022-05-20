import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  Main,
  FormContainer,
  Select,
  Button,
  Input,
  Label,
  palette,
} from './style';
import { savePet } from '../store/pet';

const MainBG = styled(Main)`
  background-color: ${palette.green};
`;

const NameBox = styled(Input)`
  background-color: ${palette.white};
`;

const PetInfo = () => {
  const dispatch = useDispatch();
  const [petType, setPetType] = useState('');
  const [name, setName] = useState('');
  const { id } = useSelector((state) => state.user);

  useEffect(() => {
    if (petType) {
      setName(randomName);
    }
  }, [petType]);

  const names = [
    'Blossom',
    'Rocko',
    'Steve',
    'Hatguy',
    'Wendifer',
    'Jimothy',
    'Barno',
    'Suz',
    'Barkly',
    'Pidge',
    'Funky',
    'Ratteo',
    'Bunches',
    'Pretifer',
    'Cat',
    'Bunny',
    'Noodle',
    'Pastina',
    'Squeegie',
    'Baguette',
    'Bagel',
    'Slicer',
    'Dicer',
    'Prancer',
    'Donder',
    'Blixen',
    'Moose',
    'Fries',
    'Max',
    'Julian',
    'Tire',
    'Jax',
    'Alfy',
    'Bucky',
    'Nichols',
    'Petunia',
    'Delilah',
    'Potato',
    'Penelope',
    'Boots',
    'Nickie',
    'Hubcap',
    'Olive',
    'Stewpot',
    'Papes',
    'Newsie',
    'Petunia',
    'Meep',
    'Gooch',
    'Rudely',
    'Spot',
    'Sleepy',
    'JJ',
    'Aggie',
    'Fancy',
    'Bernice',
    'Peach',
    'Porchie',
    'Poochie',
    'Shrimpy',
    'Hula Hoop',
    'Fragonard',
    'Crackers',
    'Cricket',
    'Whiffle Ball',
    'Duflee',
    'Beebo',
    'Buttercup',
    'Knuckle',
    'Meadow',
    'Turbo',
    'Turnip',
    'Parsnip',
    'Pastrami',
    'Scoops',
  ];
  const randomName = names[Math.floor(Math.random() * names.length)];

  return (
    <MainBG>
      <FormContainer>
        <Label htmlFor="type">Pet Type:</Label>
        <Select
          id="type"
          defaultValue="choose"
          onChange={(e) => {
            setPetType(e.target.value);
          }}
        >
          <option disabled value="choose"></option>
          <option value="Pigeon">Pigeon</option>
          <option value="Raccoon">Raccoon</option>
          <option value="Possum">Possum</option>
          <option value="Rat">Rat</option>
          <option value="Skunk">Skunk</option>
        </Select>
        <Label htmlFor="name">Name:</Label>
        <NameBox disabled id="name" value={name}></NameBox>
        <Label htmlFor="get-new-name">Roll the dice to get a new name:</Label>
        <Button
          type="button"
          id="get-new-name"
          onClick={(e) => {
            e.preventDefault();
            setName(randomName);
          }}
        >
          🎲 🎲
        </Button>
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(savePet(id, { name, type: petType }));
          }}
        >
          Submit
        </Button>
      </FormContainer>
    </MainBG>
  );
};

export default PetInfo;
