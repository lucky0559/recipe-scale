import {
  LoadingLottieView,
  ShadowWrapper,
  Text,
  TopBar
} from "@/components/common";
import { useGetFoodById } from "@/hooks/foods";
import { RootStackParamList } from "@/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Dot, Minus, Plus, Star } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

type FoodDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "FoodDetails"
>;

const FoodDetails = ({ route }: FoodDetailsProps) => {
  const [neededCount, setNeededCount] = useState(1);
  const { id } = route.params;
  const { data, isFetching } = useGetFoodById(id);

  const onAddNeeded = () => {
    setNeededCount(neededCount + 1);
  };

  const onDecreaseNeeded = () => {
    if (neededCount === 1) {
      return;
    }
    setNeededCount(neededCount - 1);
  };

  return (
    <>
      <TopBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        {isFetching ? (
          <LoadingLottieView />
        ) : (
          <>
            <View
              style={{
                position: "relative"
              }}
            >
              <ShadowWrapper>
                <ImageFood
                  source={{
                    uri: data?.imageUrl
                  }}
                />
              </ShadowWrapper>
              <View
                style={{
                  position: "absolute",
                  right: 16,
                  top: 16,
                  borderRadius: 100,
                  borderColor: "black",
                  borderWidth: 2,
                  padding: 5,
                  backgroundColor: "white"
                }}
              >
                <Star size={32} />
              </View>
            </View>
            <DetailsWrapper>
              <Text style={{ fontFamily: "Lemon", fontSize: 32 }}>
                {data?.name}
              </Text>
              <Text style={{ fontSize: 18 }}>{data?.description}</Text>
            </DetailsWrapper>
            <IngredientsWrapper>
              {data?.ingredients.map((ing, i) => {
                const computedNeeded = ing.needed * neededCount;
                const neededUnit = computedNeeded.toString() + " " + ing.unit;
                return (
                  <View
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center"
                    }}
                  >
                    <Dot size={44} color={"#F0735A"} />
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 3
                      }}
                    >
                      <Text
                        style={{ fontFamily: "Roboto-Medium", fontSize: 22 }}
                      >
                        {neededUnit}
                      </Text>
                      <Text style={{ fontSize: 22, paddingTop: 1 }}>
                        {ing.name.toLowerCase()}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </IngredientsWrapper>
          </>
        )}
      </ScrollView>
      <StickyWrapper>
        <TouchableOpacity onPress={onDecreaseNeeded}>
          <Minus color={"white"} />
        </TouchableOpacity>
        <Text style={{ color: "white", fontFamily: "Lemon", fontSize: 24 }}>
          {neededCount}
        </Text>
        <TouchableOpacity onPress={onAddNeeded}>
          <Plus color={"white"} />
        </TouchableOpacity>
      </StickyWrapper>
    </>
  );
};

export default FoodDetails;

const ImageFood = styled.Image`
  width: "100%";
  height: 300px;
  border-radius: 12px;
  object-fit: cover;
`;

const DetailsWrapper = styled.View`
  margin-top: 22px;
  margin-bottom: 10px;
  gap: 5px;
`;

const IngredientsWrapper = styled.View`
  margin-bottom: 20px;
`;

const StickyWrapper = styled.View`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #f0735a;
  padding: 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15;
`;
