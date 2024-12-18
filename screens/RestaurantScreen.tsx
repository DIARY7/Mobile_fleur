import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, View ,Text, TouchableOpacity} from "react-native";
import * as Icon from "react-native-feather";
import { ScrollView } from "react-native";

export default function RestaurantScreen() {
    const {params} = useRoute();
    const navigation = useNavigation();
    let item = params;
    
    return(
        <View>
            <ScrollView>
                <View className="relative">
                    {item ? (
                        <Image className="w-full h-72 " source={item.image} />
                    ) : (
                        <Text>Image not available</Text>
                    )}
                    <TouchableOpacity onPress={()=> navigation.goBack() } className="absolute top-4 left-4 bg-white p-2 rounded-full shadow" >
                        <Icon.ArrowLeft strokeWidth={2} stroke="tomato" />
                    </TouchableOpacity>
                </View>

                <View className=" flex align-center  bg-white -mt-14 pt-3" style={{ borderTopRightRadius:10,borderTopLeftRadius:10 }} >
                    <Text className="text-center font-semibold"> Le nom est  {item.name} </Text>
                </View>

            </ScrollView>
        </View>
    )
}