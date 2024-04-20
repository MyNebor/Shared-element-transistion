import "react-native-url-polyfill/auto";
import { Stack } from "expo-router";

const RootLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen
				name="product/[id]"
				options={{
					headerShown: false,
					presentation: "transparentModal",
					animation: "fade",
				}}
			/>
		</Stack>
	);
};

export default RootLayout;
