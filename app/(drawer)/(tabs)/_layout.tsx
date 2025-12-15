import { DrawerToggleButton } from "@react-navigation/drawer";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerLeft: () =>
                <DrawerToggleButton />
        }}>
            <Tabs.Screen name="index" options={{ title: "Home", }} />
            <Tabs.Screen name="focus" options={{ title: "Focus", }} />
            {/* <Tabs.Screen name="focus" options={{ title: "Focus", tabBarBadge: 3 }} /> */}

        </Tabs>
    )
}
