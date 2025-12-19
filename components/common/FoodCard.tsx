import { Text } from "@/components/common/Text";
import React from "react";
import styled from "styled-components/native";

type FoodCardProps = {
  imageUrl: string;
  name: string;
};

export const FoodCard = ({ imageUrl, name }: FoodCardProps) => {
  return (
    <ParentWrapper>
      <ImageWrapper>
        <FoodImage
          source={{
            uri: imageUrl
          }}
        />
        <DetailWrapper>
          <DetailText>{name}</DetailText>
        </DetailWrapper>
      </ImageWrapper>
      <DetailWrapper></DetailWrapper>
    </ParentWrapper>
  );
};

const ParentWrapper = styled.View``;

const ImageWrapper = styled.View``;

const FoodImage = styled.Image`
  width: 250px;
  height: 300px;
  border-radius: 10px;
`;

const DetailWrapper = styled.View``;

const DetailText = styled(Text)`
  font-family: "Lemon";
  margin-top: 10px;
`;
