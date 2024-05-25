import { places } from "@/assets/data/places";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  LayoutAnimation,
  UIManager,
  Platform,
} from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
//@ts-ignore
import DatePicker from "react-native-modern-datepicker";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

interface GuestGroup {
  name: string;
  text: string;
  count: number;
}

const guestsGroups: GuestGroup[] = [
  {
    name: "Adults",
    text: "Ages 13 or above",
    count: 0,
  },
  {
    name: "Children",
    text: "Ages 2-12",
    count: 0,
  },
  {
    name: "Infants",
    text: "Under 2",
    count: 0,
  },
  {
    name: "Pets",
    text: "Pets allowed",
    count: 0,
  },
];

const Page = () => {
  const router = useRouter();

  const [expanded, setExpanded] = useState(false);
  const [openCard, setOpenCard] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(0);
  const [groups, setGroups] = useState<GuestGroup[]>(
    JSON.parse(JSON.stringify(guestsGroups))
  );

  const today = new Date().toISOString().substring(0, 10);

  const onClearAll = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedPlace(0);
    setOpenCard(0);
    setGroups(guestsGroups);
    console.log(guestsGroups);
  };

  return (
    <BlurView style={styles.container} intensity={70}>
      <SafeAreaView style={{ flex: 1, paddingTop: 40 }}>
        <View style={styles.card}>
          {openCard != 0 ? (
            <TouchableOpacity
              onPress={() => {
                setOpenCard(0);
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut
                );
                setExpanded(!expanded);
              }}
              style={styles.cardPreview}
            >
              <Text style={styles.previewText}>Where</Text>
              <Text style={styles.previewDate}>I'm flexible</Text>
            </TouchableOpacity>
          ) : (
            <>
              <Animated.Text style={styles.cardHeader}>Where to?</Animated.Text>
              <Animated.View style={styles.searchContainer}>
                <Ionicons style={styles.searchIcon} name="search" size={18} />
                <TextInput
                  style={styles.searchBar}
                  placeholder="Search destinations"
                  placeholderTextColor={Colors.grey}
                />
              </Animated.View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 20, paddingLeft: 20 }}
              >
                {places.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setSelectedPlace(index)}
                  >
                    <Image
                      source={item.img}
                      style={
                        selectedPlace === index
                          ? styles.placeSelected
                          : styles.place
                      }
                    />
                    <Text
                      style={[
                        {
                          marginBottom: 25,
                          marginTop: 10,
                          fontFamily: "mon-sb",
                        },
                        selectedPlace === index
                          ? { color: Colors.dark }
                          : { color: Colors.grey },
                      ]}
                    >
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </>
          )}
        </View>
        <View style={styles.card}>
          {openCard != 1 ? (
            <TouchableOpacity
              onPress={() => {
                setOpenCard(1);
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut
                );
                setExpanded(!expanded);
              }}
              style={styles.cardPreview}
            >
              <Text style={styles.previewText}>When</Text>
              <Text style={styles.previewDate}>Any week</Text>
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity
                onPress={() => {
                  LayoutAnimation.configureNext(
                    LayoutAnimation.Presets.easeInEaseOut
                  );
                  setOpenCard(0);
                  setExpanded(!expanded);
                }}
              >
                <Text style={styles.cardHeader}>When's your trip?</Text>
              </TouchableOpacity>
              <View style={styles.cardBody}>
                <DatePicker
                  current={today}
                  selected={today}
                  mode={"calendar"}
                  options={{
                    headerFont: "mon-sb",
                    defaultFont: "mon",
                    borderColor: "transparent",
                    mainColor: Colors.primary,
                  }}
                />
              </View>
            </>
          )}
        </View>
        <View style={styles.card}>
          {openCard != 2 ? (
            <TouchableOpacity
              onPress={() => {
                setOpenCard(2);
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut
                );
                setExpanded(!expanded);
              }}
              style={styles.cardPreview}
            >
              <Text style={styles.previewText}>Who</Text>
              <Text style={styles.previewDate}>Add guests</Text>
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity
                onPress={() => {
                  LayoutAnimation.configureNext(
                    LayoutAnimation.Presets.easeInEaseOut
                  );
                  setOpenCard(0);
                  setExpanded(!expanded);
                }}
              >
                <Text style={styles.cardHeader}>Who's coming?</Text>
              </TouchableOpacity>
              <View style={styles.cardBody}>
                {groups.map((item, index) => (
                  <View
                    key={index}
                    style={[
                      styles.guestItem,
                      index + 1 < groups.length ? styles.itemBorder : null,
                    ]}
                  >
                    <View>
                      <Text style={{ fontFamily: "mon-sb", fontSize: 14 }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "mon",
                          fontSize: 14,
                          color: Colors.grey,
                        }}
                      >
                        {item.text}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 10,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          const newGroups = [...groups];
                          newGroups[index].count =
                            newGroups[index].count > 0
                              ? newGroups[index].count - 1
                              : 0;
                          setGroups(newGroups);
                        }}
                      >
                        <Ionicons
                          name="remove-circle-outline"
                          size={26}
                          color={
                            groups[index].count > 0 ? Colors.grey : "#cdcdcd"
                          }
                        />
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontFamily: "mon",
                          fontSize: 16,
                          minWidth: 18,
                          textAlign: "center",
                        }}
                      >
                        {item.count}
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          const newGroups = [...groups];
                          newGroups[index].count++;
                          setGroups(newGroups);
                        }}
                      >
                        <Ionicons
                          name="add-circle-outline"
                          size={26}
                          color={Colors.grey}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            </>
          )}
        </View>
        <Animated.View
          style={defaultStyles.footer}
          entering={SlideInDown.delay(200)}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={onClearAll}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "mon-sb",
                  textDecorationLine: "underline",
                }}
              >
                Clear all
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.back}
              style={defaultStyles.btn}
            >
              <Ionicons
                name="search-outline"
                size={22}
                color={"#fff"}
                style={defaultStyles.btnIcon}
              />
              <Text
                style={[defaultStyles.btnText, { right: 20, marginLeft: 60 }]}
              >
                Search
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </SafeAreaView>
    </BlurView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    margin: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    gap: 20,
  },
  previewText: {
    fontFamily: "mon-sb",
    fontSize: 14,
    color: Colors.grey,
  },
  previewDate: {
    fontFamily: "mon-sb",
    fontSize: 14,
    color: Colors.dark,
  },
  cardPreview: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  cardHeader: {
    fontFamily: "mon-b",
    fontSize: 28,
    padding: 20,
    paddingBottom: 0,
  },
  cardBody: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  searchContainer: {
    height: 55,
    marginHorizontal: 20,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ababab",
    borderRadius: 8,
    backgroundColor: "#fff",
    alignContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    paddingHorizontal: 15,
  },
  searchBar: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  place: {
    width: 125,
    height: 125,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  placeSelected: {
    width: 125,
    height: 125,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.dark,
  },
  guestItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  itemBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.grey,
  },
});
export default Page;
