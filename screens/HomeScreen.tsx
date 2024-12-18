import React, { SafeAreaView, StatusBar, Text } from "react-native";
import { View } from "react-native";
import * as Icon from "react-native-feather";
import { TextInput,ScrollView } from "react-native";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";
import axios from 'axios';
import { useEffect, useState } from "react";
import constantes from "../constantes/Constantes";
import dataFeatures from '../data/features.js'; // Importer les données locales

interface Feature {
    title: string;
    restaurants?: any;
    description: string;
}

export default function HomeScreen() {
    const [features,setFeatures] = useState(dataFeatures);

    console.log(features);
    console.log(features.length);
    const [loading,setLoading] = useState(true);
    console.log("Les features sont "+features);
    useEffect(()=>{
        // axios.get("http://"+constantes.ip+":8081/data/features.js")
        // .then((response)=>{
        //     setFeatures(response.data);
        //     console.log("Les data sont : ");
        //     console.log(response.data);
        //     console.log("Fin data");
        // })
        // .catch((err)=> console.log("L'erreur est "+err))
        // .finally(()=>{
        //     setLoading(true)
        // })
        setLoading(false);

    },[]);
    
    return (
        <SafeAreaView className="bg-white">  {/* Atao SafeAreaView amzay tsy takona ( heure system ohatra ) */ }
            <StatusBar barStyle="dark-content" />
                {/* Search Bar*/ }
                <View className="flex-row items-center space-x-3 px-4 pb-2 pt-2" >
                    <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                        <Icon.Search height="20" width="20" stroke="gray" />
                        <TextInput placeholder="Restautant" className="ml-2 flex-1 "  />
                        <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300" >
                            <Icon.MapPin height="20" width="20" stroke="gray" />
                            <Text className="text-gray-600">Madagascar</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor : "tomato"}} className="ml-1 p-3 bg-gray-300 rounded-full">
                        <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
                    </View>
                </View>
        {/* Main */}
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
            paddingBottom:20
        }}>
            <Categories />
        <View className="mt-4">
            {
                features.map((item,index)=>{
                    return(
                        <FeatureRow 
                            key={index}
                            title={item.title}
                            restaurants={item.restaurants}
                            description={item.description}

                        />
                    )       
                })
            }
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}