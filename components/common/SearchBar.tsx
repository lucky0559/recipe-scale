import { Search } from "lucide-react-native";
import React from "react";
import styled from "styled-components/native";

export const SearchBar = () => {
  return (
    <InputWrapper>
      <IconWrapper>
        <Search size={20} />
      </IconWrapper>
      <InputStyled placeholder="Search dishes" placeholderTextColor="#999" />
    </InputWrapper>
  );
};

const InputWrapper = styled.View`
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 5px;
  margin-right: 5px;
`;

const IconWrapper = styled.View`
  position: absolute;
  left: 16px;
  top: 0;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
`;

const InputStyled = styled.TextInput`
  height: 46px;
  border: 1px solid;
  border-radius: 22px;
  padding-left: 48px;
  padding-right: 16px;
  font-size: 16px;
`;
