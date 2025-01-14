import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

export default function detail() {
  return (
    <View>
        <View style={tw`p-10`}>
            <Text style={tw`text-center font-bold text-3xl`}>Project</Text>
        </View>
        <View style={tw`px-5`}>
            <Image source={require("@/assets/images/1.jpg")} style={tw`w-full h-90 rounded-2xl border border-4 border-gray-600 shadow-2xl shadow-black`}/>
            <Text style={tw`text-justify p-6 text-lg mt-8`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quisquam, minima veniam nam eius, aliquid soluta neque dolorem, fuga consectetur itaque voluptas! Ex, ipsum eius repellendus magnam veniam sed aliquid rerum at iste quod, ducimus nesciunt cum soluta provident necessitatibus reiciendis vero, error quo ipsam minus quia magni. Sunt, autem.</Text>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({})