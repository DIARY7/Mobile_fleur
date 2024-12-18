import { useNavigation } from "@react-navigation/native";
import { StyleSheet,Image,TouchableWithoutFeedback, View,Text } from "react-native"
import * as Icon from "react-native-feather";

interface RestoProps{
    item:any
}

export default function RestaurantCard({item}:RestoProps) {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback
            onPress={()=>navigation.navigate('Restaurant',{...item})}
        >
            <View className="mr-6 bg-white rounded-3xl shadow-lg" style={styles.card} >
                <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
                <View className="px-3 pb-4 space-y-2">
                    <Text className="text-lg font-bold pt-2">{item.name}</Text>
                    <View className="flex-row items-center space-x-1">
                        <Image source={require("../assets/images/card.jpg")} className="h-4 w-4 rounded-full mr-2" />
                        <Text className="text-xs">
                            <Text className="text-green-700">{item.stars}</Text>
                            <Text className="text-gray-700">
                                ({item.reviews} review)* <Text className="font-semibold"> {item.category}</Text> 
                            </Text>
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-1">
                        <Icon.MapPin color="gray" width="15" height="15" />
                        <Text className="text-gray-700 text-xs ml-2">Near By * {item.adress} </Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    card: {
        shadowColor:"rgba(130,0,0,0.9)",
        shadowRadius:7
    },
});