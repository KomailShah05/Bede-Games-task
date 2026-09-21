import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => (
  <>
    <StatusBar style="dark" />
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="game/[id]" options={{ presentation: 'fullScreenModal', animation: 'fade' }} />
    </Stack>
  </>
);

export default RootLayout;
