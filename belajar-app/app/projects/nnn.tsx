import { SafeAreaView, StyleSheet, Text, View, Image, Touchable, ScrollView } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { Link } from 'expo-router'



export default function nnn() {
  return (
    <ScrollView>
        <SafeAreaView>
            <View>
                <View style={tw`p-10`}>
                    <Text style={tw`font-bold text-4xl text-center`}>Karya Terbaik Anak RPL</Text>
                </View>
                <View style={{ borderBottomWidth: 1, paddingTop:30, borderColor:"gray" }}></View>
                <View style={tw`p-5`}>
                    <View style={tw``}>
                        <View style={tw` flex-row gap-5 bg-gray-200 shadow-xl border-gray-400 rounded-xl p-3 my-2`}>
                            <Image source={require("@/assets/images/1.jpg")} style={tw`h-30 w-30 rounded-md border border-gray-600 border-4`}/>
                            <View>
                                <Text style={tw`font-bold text-2xl`}>Project 1</Text>
                                <Text style={tw`font-medium text-md mt-1 mr-34`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
                                <Link href="/projects/detail" style={tw`bg-blue-900 rounded-xl mt-2 mr-60 py-2 px-5`}>
                                    <Text style={tw`text-white text-md font-medium`}>Detail</Text>
                                </Link>
                            </View>
                            
                        </View>
                        
                    </View>
                    <View style={tw``}>
                        <View style={tw` flex-row gap-5 bg-gray-200 shadow-xl border-gray-400 rounded-xl p-3 my-2`}>
                            <Image source={require("@/assets/images/2.jpg")} style={tw`h-30 w-30 rounded-md border border-gray-600 border-4`}/>
                            <View>
                                <Text style={tw`font-bold text-2xl`}>Project 1</Text>
                                <Text style={tw`font-medium text-md mt-1 mr-34`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
                                <Link href="/projects/detail" style={tw`bg-blue-900 rounded-xl mt-2 mr-60 py-2 px-5`}>
                                    <Text style={tw`text-white text-md font-medium`}>Detail</Text>
                                </Link>
                            </View>
                            
                        </View>
                        
                    </View>
                    <View style={tw``}>
                        <View style={tw` flex-row gap-5 bg-gray-200 shadow-xl border-gray-400 rounded-xl p-3 my-2`}>
                            <Image source={require("@/assets/images/3.jpg")} style={tw`h-30 w-30 rounded-md border border-gray-600 border-4`}/>
                            <View>
                                <Text style={tw`font-bold text-2xl`}>Project 1</Text>
                                <Text style={tw`font-medium text-md mt-1 mr-34`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
                                <Link href="/projects/detail" style={tw`bg-blue-900 rounded-xl mt-2 mr-60 py-2 px-5`}>
                                    <Text style={tw`text-white text-md font-medium`}>Detail</Text>
                                </Link>
                            </View>
                            
                        </View>
                        
                    </View>
                    <View style={tw``}>
                        <View style={tw` flex-row gap-5 bg-gray-200 shadow-xl border-gray-400 rounded-xl p-3 my-2`}>
                            <Image source={require("@/assets/images/5.jpg")} style={tw`h-30 w-30 rounded-md border border-gray-600 border-4`}/>
                            <View>
                                <Text style={tw`font-bold text-2xl`}>Project 1</Text>
                                <Text style={tw`font-medium text-md mt-1 mr-34`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
                                <Link href="/projects/detail" style={tw`bg-blue-900 rounded-xl mt-2 mr-60 py-2 px-5`}>
                                    <Text style={tw`text-white text-md font-medium`}>Detail</Text>
                                </Link>
                            </View>
                            
                        </View>
                        
                    </View>
                    <View style={tw``}>
                        <View style={tw` flex-row gap-5 bg-gray-200 shadow-xl border-gray-400 rounded-xl p-3 my-2`}>
                            <Image source={require("@/assets/images/1.jpg")} style={tw`h-30 w-30 rounded-md border border-gray-600 border-4`}/>
                            <View>
                                <Text style={tw`font-bold text-2xl`}>Project 1</Text>
                                <Text style={tw`font-medium text-md mt-1 mr-34`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
                                <Link href="/projects/detail" style={tw`bg-blue-900 rounded-xl mt-2 mr-60 py-2 px-5`}>
                                    <Text style={tw`text-white text-md font-medium`}>Detail</Text>
                                </Link>
                            </View>
                            
                        </View>
                        
                    </View>
                </View>
            </View>
        </SafeAreaView>
    </ScrollView>
    
    
    
  )
}

const styles = StyleSheet.create({})