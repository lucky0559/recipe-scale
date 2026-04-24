import {
  FoodCard,
  LoadingLottieView,
  SearchBar,
  Text
} from "@/components/common";
import { useGetFoods } from "@/hooks/foods";
import { NavigationProp } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  Pressable,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import styled from "styled-components/native";

const categories = [
  "all",
  "dessert",
  "breakfast",
  "entrant",
  "dinner",
  "lunch"
];

const AllFoods = () => {
  const navigation = useNavigation<NavigationProp>();
  const [searchKey, setSearchKey] = useState("");
  const [debounceSearch, setDebounceSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const { data, refetch, isFetching } = useGetFoods(
    activeCategory,
    debounceSearch
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(searchKey);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchKey]);

  return (
    <ParentWrapper>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SearchBar onChange={setSearchKey} />
      </TouchableWithoutFeedback>
      <CategoryView>
        <Text
          style={{
            fontFamily: "Lemon",
            opacity: 0.8,
            fontSize: 12,
            marginRight: 4
          }}
        >
          Categories
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            alignItems: "center",
            gap: 12
          }}
        >
          {categories.map((c, i) => {
            const isActive = activeCategory === c;
            return (
              <Pressable
                key={i}
                onPress={() => setActiveCategory(c)}
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 20,
                  backgroundColor: isActive ? "#FFB399" : "#FFF0BE",
                  marginRight: 8
                }}
              >
                <Text
                  key={i}
                  style={{ fontFamily: "Lemon", opacity: isActive ? 1 : 0.4 }}
                >
                  {c}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </CategoryView>
      <ParentList>
        <ListWrapper>
          {isFetching ? (
            <LoadingLottieView />
          ) : (
            <FlatList
              data={data}
              keyExtractor={item => item._id.toString()}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: "space-between",
                gap: 24
              }}
              onRefresh={refetch}
              refreshing={isFetching}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ marginBottom: 36, flex: 1 }}
                  onPress={() =>
                    navigation.navigate("FoodDetails", { id: item._id })
                  }
                >
                  <FoodCard imageUrl={item.imageUrl} name={item.name} />
                </TouchableOpacity>
              )}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                !isFetching ? (
                  <Text
                    style={{
                      textAlign: "center",
                      marginTop: 40,
                      opacity: 0.6
                    }}
                  >
                    No recipes found 🍽️
                  </Text>
                ) : null
              }
            />
          )}
        </ListWrapper>
      </ParentList>
    </ParentWrapper>
  );
};

export default AllFoods;

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
