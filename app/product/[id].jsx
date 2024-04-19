import { Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { BlurView } from "expo-blur";
import { useLocalSearchParams, useRouter } from "expo-router";
import Animated, { FadeInLeft } from "react-native-reanimated";

const products = [
	{
		$id: "1",
		title: "Sports car driving on asphalt road at night generative AI",
		creator: "james",
		thumbnail:
			"https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?t=st=1713518540~exp=1713522140~hmac=ce07d19ca80947e2b457a2e35bdfc12818c82086f66d1c2d516b58b84d2cfd7a&w=1480",
	},
	{
		$id: "2",
		title:
			"Luxurious car parked on the highway with an illuminated headlight at sunset",
		creator: "mike",
		thumbnail:
			"https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1713449119~exp=1713452719~hmac=6fce3c0b783fffd37b938a1fd32fa69181e846de3ec825bfac5ce14600024066&w=1480",
	},
	{
		$id: "3",
		title: "Detailed shot of car wheels and tires",
		creator: "rorozoa",
		thumbnail:
			"https://img.freepik.com/free-photo/detailed-shot-car-wheels-tires_157027-4311.jpg?t=st=1713518748~exp=1713522348~hmac=a26e360150b0b66ec2b8651dfde3279ef213c8ad4789c2c61b5271f879b17d7e&w=1480",
	},
	{
		$id: "4",
		title: "Sports car driving on asphalt road at night generative AI",
		creator: "james",
		thumbnail:
			"https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?t=st=1713518540~exp=1713522140~hmac=ce07d19ca80947e2b457a2e35bdfc12818c82086f66d1c2d516b58b84d2cfd7a&w=1480",
	},
];

const Product = () => {
	const router = useRouter();
	const { query } = useLocalSearchParams();
	const [product, setProduct] = useState(products[0]);
	useEffect(() => {
		setProduct(query ? products[Number(query)] : products[0]);
	}, []);
	console.log(query);
	return (
		<BlurView
			intensity={40}
			tint="dark"
			className="bg-gray-500 px-2 flex-1 justify-center">
			<Pressable onPress={() => router.back()}>
				<Animated.Image
					entering={FadeInLeft.duration(400).delay(900)}
					sharedTransitionTag="sharedTag"
					source={{
						uri: product.thumbnail,
					}}
					className="w-full h-[60%] rounded-xl mb-3"
				/>

				<Animated.Text
					entering={FadeInLeft.duration(400).delay(500)}
					className={"text-white ml-2 text-2xl"}>
					{product.title}
				</Animated.Text>
				<Animated.Text
					entering={FadeInLeft.duration(400).delay(600)}
					className={"text-white ml-2 text-base capitalize mt-4"}>
					{product.creator}
				</Animated.Text>
			</Pressable>
		</BlurView>
	);
};

export default Product;
