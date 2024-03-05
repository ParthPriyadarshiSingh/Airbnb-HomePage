import { View, Text } from "react-native";
import React, { useRef, useMemo } from "react";
import { Listing } from "@/interfaces/listing";
import BottomSheet from "@gorhom/bottom-sheet";
import Listings from "@/components/Listings";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface Props {
  listings: Listing[];
  category: string;
}

const ListingsBottomSheet = ({ listings, category }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["10%", "100%"], []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
        <View style={{ flex: 1 }}>
          <Listings listings={listings} category={category} />
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default ListingsBottomSheet;
