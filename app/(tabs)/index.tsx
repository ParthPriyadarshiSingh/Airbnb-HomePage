import { View } from "react-native";
import React, { useState, useMemo } from "react";
import ExploreHeader from "@/components/ExploreHeader";
import listingsData from "@/assets/data/airbnb-listings.json";
import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";
import ListingsMap from "@/components/ListingsMap";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";
import { Stack } from "expo-router";

const Page = () => {
  const items = useMemo(() => listingsData as any, []);
  const getItems = useMemo(() => listingsDataGeo, []);
  const [category, setCategory] = useState<string>("Tiny homes");

  const onDataChanged = (category: string) => {
    setCategory(category);
  };
  return (
    <View style={{ flex: 1 }}>
      {/* <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      /> */}
      <ExploreHeader onCategoryChanged={onDataChanged} />
      <ListingsMap listings={getItems} />
      <ListingsBottomSheet listings={items} category={category} />
    </View>
  );
};

export default Page;
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { View } from "react-native";
// import React, { useState, useMemo } from "react";
// import listingsData from "@/assets/data/airbnb-listings.json";
// import ExploreHeader from "@/components/ExploreHeader";
// import ListingsBottomSheet from "@/components/ListingsBottomSheet";
// import ListingsMap from "@/components/ListingsMap";
// import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";

// const Stack = createNativeStackNavigator();

// const Page = () => {
//   const items = useMemo(() => listingsData as any, []);
//   const getItems = useMemo(() => listingsDataGeo, []);
//   const [category, setCategory] = useState<string>("Tiny homes");

//   // const onDataChanged = (category: string) => {
//   //   setCategory(category);

//   return (
//     // <NavigationContainer>
//     <View style={{ flex: 1 }}>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="ExploreHeader"
//           component={ExploreHeader}
//           options={{
//             header: () => <ExploreHeader />,
//           }}
//         />
//       </Stack.Navigator>
//       <ListingsMap listings={getItems} />
//       <ListingsBottomSheet listings={items} category={category} />
//     </View>
//     //   {/* <Listings /> */}
//     // // </NavigationContainer>
//   );
// };

// // export default Page;
