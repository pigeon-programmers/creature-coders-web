import React from 'react';
import styled from 'styled-components';
import { Main, FormContainer, Select } from './style';

const MainBG = styled(Main)`
background-color: #4EDE1C;
`

const PetInfo = () => {

  return(
    <MainBG>
      <FormContainer>
      <Select defaultValue="choose">
              <option disabled value="choose">
                Choose Pet Type
              </option>
              <option value="Pigeon">Pigeon</option>
              <option value="Raccoon">Raccoon</option>
              <option value="Possum">Possum</option>
            </Select>
      </FormContainer>
    </MainBG>
  )
}

export default PetInfo;
