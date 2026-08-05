import { Stack } from "expo-router";
//initialRouteName="(tabs)/test"
export default function RootLayout() {
  return <Stack initialRouteName="(tabs)/login" screenOptions={{headerShown : false}}/>;
}
