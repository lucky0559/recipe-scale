import ShadowWrapper from "@/components/common/ShadowWrapper";
import { Text } from "@/components/common/Text";
import styled from "styled-components/native";

type FoodCardProps = {
  imageUrl: string;
  name: string;
};

export const FoodCard = ({ imageUrl, name }: FoodCardProps) => {
  return (
    <ParentWrapper>
      <ShadowWrapper>
        <FoodImage
          source={{
            uri: imageUrl
          }}
        />
      </ShadowWrapper>
      <DetailText>{name}</DetailText>
    </ParentWrapper>
  );
};

const ParentWrapper = styled.View``;

const FoodImage = styled.Image`
  width: 250px;
  height: 300px;
  border-radius: 10px;
`;

const DetailText = styled(Text)`
  font-family: "Lemon";
  margin-top: 10px;
`;
