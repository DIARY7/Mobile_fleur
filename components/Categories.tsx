import { useState } from "react";
import { Image, ScrollView,  TouchableOpacity,  View,Text } from "react-native";

export default function Categories(){
    const categories = {id:1,name:"Pizza",image:require("../assets/images/card.jpg") }
    const [activeIdCategorie,setActiveIdCategorie] = useState(0);

    // Juste generation d'un tableau du même objet
    let elements=[];
    let idNewCat = 0;
    for (let i = 0; i < 10; i++) {
        let newCat = {...categories}
        newCat.id = idNewCat+i;
        elements.push(newCat);
    }

    return(
        <View className="mt-4">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}
                className="overflow-visible"
                contentContainerStyle={{
                    paddingHorizontal:15
                }}
            >
            {
                elements.map((categorie,index)=>{
                
                let isActive = categorie.id == activeIdCategorie;
                let btnClass = isActive ? "bg-red-300" : "bg-gray-200";
                let textClass = isActive ?'font-semibold text-gray-800' :"text-gray-500";
                return(
                    <View key={index} className="flex justify-center items-center mr-6"> 
                    <TouchableOpacity
                        onPress={()=> setActiveIdCategorie(categorie.id)}
                        className={"p-2 rounded-full shadow bg-gray-200 "+btnClass}
                    >
                    <Image style={{width:45,height:45}} className="rounded-full" source={categorie.image} />
                    </TouchableOpacity>
                    <Text className={"text-sm " + textClass }>{categorie.name} {index}</Text>
                    
                </View>
                ) 
                })
            }
            
            </ScrollView>
        </View>
    )
}