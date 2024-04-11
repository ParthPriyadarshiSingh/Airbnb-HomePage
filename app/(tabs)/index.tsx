import { View } from "react-native";
import { useState, useMemo } from "react";
import ExploreHeader from "@/components/ExploreHeader";
import listingsData from "@/assets/data/airbnb-listings.json";
import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";
import ListingsMap from "@/components/ListingsMap";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Index = () => {
  const items = useMemo(() => listingsData as any, []);
  const getItems = useMemo(() => listingsDataGeo, []);
  const [category, setCategory] = useState<string>("Tiny homes");

  const onDataChanged = (category: string) => {
    setCategory(category);
  };
  return (
    <View style={{ flex: 1 }}>
      <ExploreHeader onCategoryChanged={onDataChanged} />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ListingsMap listings={getItems} />
        <ListingsBottomSheet listings={items} category={category} />
      </GestureHandlerRootView>
    </View>
  );
};

export default Index;
