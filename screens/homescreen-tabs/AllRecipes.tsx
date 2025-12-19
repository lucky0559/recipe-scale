import { FoodCard, SearchBar, Text } from "@/components/common";
import { recipes } from "@/mockData";
import React from "react";
import {
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  View
} from "react-native";
import styled from "styled-components/native";

const AllRecipes = () => {
  return (
    <ParentWrapper>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SearchBar />
      </TouchableWithoutFeedback>
      <CategoryView>
        <Text style={{ fontFamily: "Lemon", opacity: 0.6 }}>Categories</Text>
        <Text style={{ fontFamily: "Lemon" }}>All recipes</Text>
      </CategoryView>
      <ParentList>
        <ListWrapper>
          <FlatList
            data={recipes}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-between"
            }}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 24 }}>
                <FoodCard imageUrl={item.imageUrl} name={item.name} />
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        </ListWrapper>
      </ParentList>
    </ParentWrapper>
  );
};

export default AllRecipes;

const ParentWrapper = styled.View`
  flex: 1;
  background-color: white;
`;

const CategoryView = styled.View`
  gap: 26px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const ParentList = styled.View`
  align-items: center;
  flex: 1;
`;

const ListWrapper = styled.View`
  max-width: 600px;
  width: 100%;
  flex: 1;
`;
