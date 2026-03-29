import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white">Go to Onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white">Go to Sign In</Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white">Go to Sign Up</Link>

      <Link href="/subscription/spotify">Spotify Subscription</Link>
      <Link
        href={{
          pathname: "/subscription/[id]",
          params: { id: "claude" },
        }}
      >
        Spotify Subscription Detail
      </Link>
    </View>
  );
}