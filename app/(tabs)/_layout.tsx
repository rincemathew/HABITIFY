import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Home" }} />
            <Tabs.Screen name="focus" options={{ title: "Focus" }} />
            {/* <Tabs.Screen name="focus" options={{ title: "Focus", tabBarBadge: 3 }} /> */}

        </Tabs>
    )
}
