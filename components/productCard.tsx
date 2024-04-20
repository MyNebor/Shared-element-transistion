import Animated from "react-native-reanimated";
import { View, Text, Pressable } from "react-native";
import { Link, router } from "expo-router";
import { type IProductCard } from "../type";

const VideoCard = ({ $id, title, creator, thumbnail }: IProductCard) => {
	return (
		<View className="flex flex-col items-center px-4 mb-14 pswp-gallery">
			<Link
				href={{
					pathname: "/product/[id]",
					params: { id: $id },
				}}
				className="w-full h-60 rounded-xl mt-3 relative flex justify-center
				items-center"
				asChild>
				<Pressable>
					<Animated.Image
						sharedTransitionTag="sharedTag"
						source={{ uri: thumbnail }}
						className="w-full h-full rounded-xl mb-3"
						resizeMode="cover"
					/>
				</Pressable>
			</Link>
			<View className="flex flex-row gap-3 items-start">
				<View className="flex justify-center items-center flex-row flex-1">
					<View className="flex justify-center flex-1 ml-3 gap-y-1">
						<Text
							className="font-psemibold text-sm text-white"
							numberOfLines={1}>
							{title}
						</Text>
						<Text
							className="text-xs text-gray-100 font-pregular"
							numberOfLines={1}>
							{creator}
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default VideoCard;
