import { LoadingLottieView, ShadowWrapper, Text } from "@/components/common";
import { useGetFoodById } from "@/hooks/foods";
import { NavigationProp, RootStackParamList } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ArrowLeft, Minus, Plus, Star } from "lucide-react-native";
import { useState } from "react";
import { Pressable, ScrollView, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

type FoodDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "FoodDetails"
>;

const FoodDetails = ({ route }: FoodDetailsProps) => {
  const [neededCount, setNeededCount] = useState(1);
  const { id } = route.params;
  const { data, isFetching } = useGetFoodById(id);

  const navigation = useNavigation<NavigationProp>();

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
              <Pressable
                style={{
                  position: "absolute",
                  left: 16,
                  top: 16,
                  borderRadius: 100,
                  padding: 8,
                  backgroundColor: "rgba(255,255,255,0.92)",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 6,
                  elevation: 3
                }}
                onPress={() => navigation.goBack()}
              >
                <ArrowLeft size={26} color="#2d2018" />
              </Pressable>
              <View
                style={{
                  position: "absolute",
                  right: 16,
                  top: 16,
                  borderRadius: 100,
                  padding: 8,
                  backgroundColor: "rgba(255,255,255,0.92)",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 6,
                  elevation: 3
                }}
              >
                <Star size={26} color="#2d2018" />
              </View>
            </View>
            <DetailsWrapper>
              <Text style={{ fontFamily: "Lemon", fontSize: 24 }}>
                {data?.name}
              </Text>
              <Text style={{ fontSize: 16 }}>{data?.description}</Text>
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
                      alignItems: "center",
                      paddingHorizontal: 20,
                      paddingVertical: 6
                    }}
                  >
                    <View
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: "#F0735A",
                        marginRight: 14,
                        opacity: 0.85
                      }}
                    />
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 5,
                        alignItems: "baseline"
                      }}
                    >
                      <Text
                        style={{ fontFamily: "Roboto-Medium", fontSize: 15, color: "#2d2018" }}
                      >
                        {neededUnit}
                      </Text>
                      <Text style={{ fontSize: 15, color: "#5a4035", opacity: 0.8 }}>
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
  object-fit: cover;
`;

const DetailsWrapper = styled.View`
  margin-top: 22px;
  margin-bottom: 10px;
  gap: 5px;
  padding-left: 20px;
  padding-right: 20px;
`;

const IngredientsWrapper = styled.View`
  margin-bottom: 100px;
`;

const StickyWrapper = styled.View`
  position: absolute;
  bottom: 24px;
  left: 40px;
  right: 40px;
  background-color: #f0735a;
  padding-vertical: 14px;
  padding-horizontal: 24px;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  shadow-color: #f0735a;
  shadow-offset: 0px 6px;
  shadow-opacity: 0.4;
  shadow-radius: 16px;
  elevation: 10;
`;
