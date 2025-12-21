import { FoodCard, SearchBar, Text } from "@/components/common";
import { recipes } from "@/mockData";
import { NavigationProp } from "@/types";
import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import styled from "styled-components/native";

const AllRecipes = () => {
  const navigation = useNavigation<NavigationProp>();

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
              justifyContent: "space-between",
              marginHorizontal: 15
            }}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ marginBottom: 36 }}
                onPress={() =>
                  navigation.navigate("FoodDetails", { id: item.id })
                }
              >
                <FoodCard imageUrl={item.imageUrl} name={item.name} />
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            // initialNumToRender={2}
            // maxToRenderPerBatch={2}
            // windowSize={4}
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
