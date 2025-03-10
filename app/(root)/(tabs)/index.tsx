import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold  my-10 font-rubik text-3xl">Welcome to ReEstate</Text>
     <Link href="/sign-in">Sign in </Link>
     <Link href="/explore">Explore</Link>
     <Link href="/properties/[id]">Property</Link>
     <Link href="/profile">Profile</Link>
    

    </View>
  );
}
