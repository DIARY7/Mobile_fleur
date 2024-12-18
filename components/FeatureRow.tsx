import React from "react";
import { View , Text, TouchableOpacity, ScrollView} from "react-native";
import RestaurantCard from "./RestaurantCard";

interface FeatureRowProps {
    title: string;               // Le titre est une chaîne de caractères
    restaurants: object[];       // La liste des restaurants est un tableau de chaînes
    description?: string;        // La description est optionnelle (?)
}

export default function FeatureRow({title,restaurants,description}: FeatureRowProps) {
    return(
        <View>
            <View className="flex-row justify-between items-center px-4">
                <View>
                    <Text className="font-bold text-lg">{title}</Text>
                    <Text className="text-gray-500 text-xs">{description} </Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ color:"tomato" }} className="font-semibold"> See All </Text>
                </TouchableOpacity>
            </View>
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal:15
            }}
            className="overflow-visible py-5"
            >
            {
                restaurants.map((restaurant,index)=>{
                    return(
                        <RestaurantCard  
                        item={restaurant}
                        key={index}
                    />
                    ) 
                })
            }
            </ScrollView>
        </View>
    )
}