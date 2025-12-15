// import { Stack } from "expo-router";
import { useSegments } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type TabKey = "index" | "focus";

const TAB_TITLES: Record<TabKey, string> = {
  index: "Home",
  focus: "Focus",
  // add: "Add",
};

export default function RootLayout() {

  const segments = useSegments();

  const activeTab: TabKey =
    (segments.find((seg) => seg in TAB_TITLES) as TabKey) ?? "index";

  const title = TAB_TITLES[activeTab];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerTitle: title }}>
        <Drawer.Screen name="(tabs)" options={{ title: "Home" }} />
      </Drawer>
    </GestureHandlerRootView>
  )
}
