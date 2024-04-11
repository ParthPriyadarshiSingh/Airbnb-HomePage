import { View } from "react-native";
import React, { useRef, useMemo } from "react";
import { Listing } from "@/interfaces/listing";
import BottomSheet from "@gorhom/bottom-sheet";
import Listings from "@/components/Listings";

interface Props {
  listings: Listing[];
  category: string;
}

const ListingsBottomSheet = ({ listings, category }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["8%", "100%"], []);
  return (
    <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
      <View style={{ flex: 1 }}>
        <Listings listings={listings} category={category} />
      </View>
    </BottomSheet>
  );
};

export default ListingsBottomSheet;
