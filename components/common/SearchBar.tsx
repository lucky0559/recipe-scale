import { Search } from "lucide-react-native";
import styled from "styled-components/native";

type SearchBarProps = {
  onChange: (v: string) => void;
};

export const SearchBar = ({ onChange }: SearchBarProps) => {
  return (
    <InputWrapper>
      <IconWrapper>
        <Search size={20} />
      </IconWrapper>
      <InputStyled
        placeholder="Search dishes"
        placeholderTextColor="#999"
        onChangeText={onChange}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.View`
  position: relative;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: 2px;
  margin-right: 2px;
`;

const IconWrapper = styled.View`
  position: absolute;
  left: 18px;
  top: 0;
  bottom: 0;
  justify-content: center;
  opacity: 0.45;
`;

const InputStyled = styled.TextInput`
  height: 50px;
  background-color: #f5efeb;
  border-radius: 25px;
  padding-left: 50px;
  padding-right: 18px;
  font-size: 15px;
  color: #2d2018;
`;
