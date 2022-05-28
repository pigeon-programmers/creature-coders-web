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
import { savePet, updatePet } from '../store/pet';

const MainBG = styled(Main)`
  background-color: ${palette.green};
`;

const NameBox = styled(Input)`
  background-color: ${palette.white};
`;

const PetInfo = () => {
  const dispatch = useDispatch();
  const [petType, setPetType] = useState('Pigeon');
  const [name, setName] = useState('');
  const { id } = useSelector((state) => state.user);
  const pet = useSelector((state) => state.pet);

  useEffect(() => {
    if (pet.name) {
      setName(pet.name);
    }
  }, [pet]);

  useEffect(() => {
    if (!pet.name) {
      setName(randomName);
    }
  }, []);

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

  console.log('PETNAME: ', pet.name);

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
          <option value="Pigeon">Pigeon</option>
          <option value="Raccoon">Raccoon</option>
          <option value="Possum">Possum</option>
          {/* <option value="Rat">Rat</option>
          <option value="Skunk">Skunk</option>
          <option value="Seagull">Seagull</option>
          <option value="Squirrel">Squirrel</option>
          <option value="BodegaCat">BodegaCat</option> */}
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
            {
              !pet.name
                ? dispatch(savePet(id, { name, type: petType }))
                : dispatch(updatePet(id, { name, type: petType, id: pet.id }));
            }
          }}
        >
          Submit
        </Button>
      </FormContainer>
    </MainBG>
  );
};

export default PetInfo;
