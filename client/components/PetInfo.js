import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Main, FormContainer, Select, Button, Input, Label } from './style';
import { savePet } from '../store/pet';

const MainBG = styled(Main)`
  background-color: #4ede1c;
`;

const PetInfo = () => {
  const dispatch = useDispatch();
  const [petType, setPetType] = useState('');
  const [name, setName] = useState('');
  const { id } = useSelector((state) => state.user);

  useEffect(() => {
    if (petType) {
      setName(names[Math.floor(Math.random() * names.length)]);
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
        <Input disabled id="name" value={name}></Input>
        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setName(randomName);
          }}
        >
          🎲
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
