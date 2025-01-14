import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Link } from 'expo-router'

const siswa = () => {
  return (
   
    <View>
            <ScrollView >
            <View style={tw`p-15`}>
                <Text style={tw`text-center font-bold text-4xl`}>XI RPL</Text>
            </View>
            <View style={tw`px-5 flex-row justify-around flex-wrap`}>
                <View style={tw`items-center mt-5`}>
                    <Image source={require("@/assets/images/1.jpg")} style={tw`w-40 h-40`}/>
                    <Link href="/siswa/detailsiswa" style={tw``}>
                        <Text style={tw`bg-yellow-500 mt- rounded text-center text-lg`}>ARDHIKA</Text>
                    </Link>
                </View>
                <View style={tw`items-center mt-5`}>
                    <Image source={require("@/assets/images/1.jpg")} style={tw`w-40 h-40`}/>
                    <Link href="/siswa/detailsiswa" style={tw`bg-yellow-500 px-3 py-2 mt-9 rounded`}>
                        <Text style={tw`text-center text-lg`}>DAFFA RAFIF RAMADHAN</Text>
                    </Link>
                </View>
                <View style={tw`items-center mt-5`}>
                    <Image source={require("@/assets/images/1.jpg")} style={tw`w-40 h-40`}/>
                    <Link href="/siswa/detailsiswa" style={tw`bg-yellow-500 px-3 py-2 mt-9 rounded`}>
                        <Text style={tw`text-center text-lg`}>AUFA IRFAN ADLI</Text>
                    </Link>
                </View>
                <View style={tw`items-center mt-5`}>
                    <Image source={require("@/assets/images/1.jpg")} style={tw`w-40 h-40`}/>
                    <Link href="/siswa/detailsiswa" style={tw`bg-yellow-500 px-3 py-2 mt-9 rounded`}>
                        <Text style={tw`text-center text-lg`}>AUFA IRFAN ADLI</Text>
                    </Link>
                </View>
                <View style={tw`items-center mt-5`}>
                    <Image source={require("@/assets/images/1.jpg")} style={tw`w-40 h-40`}/>
                    <Link href="/siswa/detailsiswa" style={tw`bg-yellow-500 px-3 py-2 mt-9 rounded`}>
                        <Text style={tw`text-center text-lg`}>AUFA IRFAN ADLI</Text>
                    </Link>
                </View>
                <View style={tw`items-center mt-5`}>
                    <Image source={require("@/assets/images/1.jpg")} style={tw`w-40 h-40`}/>
                    <Link href="/siswa/detailsiswa" style={tw`bg-yellow-500 px-3 py-2 mt-9 rounded`}>
                        <Text style={tw`text-center text-lg`}>AUFA IRFAN ADLI</Text>
                    </Link>
                </View>
                <View style={tw`items-center mt-5`}>
                    <Image source={require("@/assets/images/1.jpg")} style={tw`w-40 h-40`}/>
                    <Link href="/siswa/detailsiswa" style={tw`bg-yellow-500 px-3 py-2 mt-9 rounded`}>
                        <Text style={tw`text-center text-lg`}>AUFA IRFAN ADLI</Text>
                    </Link>
                </View>
                <View style={tw`items-center mt-5`}>
                    <Image source={require("@/assets/images/1.jpg")} style={tw`w-40 h-40`}/>
                    <Link href="/siswa/detailsiswa" style={tw`bg-yellow-500 px-3 py-2 mt-9 rounded`}>
                        <Text style={tw`text-center text-lg`}>AUFA IRFAN ADLI</Text>
                    </Link>
                </View>
                <View style={tw`items-center mt-5`}>
                    <Image source={require("@/assets/images/1.jpg")} style={tw`w-40 h-40`}/>
                    <Link href="/siswa/detailsiswa" style={tw`bg-yellow-500 px-3 py-2 mt-9 rounded`}>
                        <Text style={tw`text-center text-lg`}>AUFA IRFAN ADLI</Text>
                    </Link>
                </View>
                <View style={tw`items-center mt-5`}>
                    <Image source={require("@/assets/images/1.jpg")} style={tw`w-40 h-40`}/>
                    <Link href="/siswa/detailsiswa" style={tw`bg-yellow-500 px-3 py-2 mt-9 rounded`}>
                        <Text style={tw`text-center text-lg`}>AUFA IRFAN ADLI</Text>
                    </Link>
                </View>
                <View style={tw`items-center mt-5`}>
                    <Image source={require("@/assets/images/1.jpg")} style={tw`w-40 h-40`}/>
                    <Link href="/siswa/detailsiswa" style={tw`bg-yellow-500 px-3 py-2 mt-9 rounded`}>
                        <Text style={tw`text-center text-lg`}>AUFA IRFAN ADLI</Text>
                    </Link>
                </View>
                <View style={tw`items-center mt-5`}>
                    <Image source={require("@/assets/images/1.jpg")} style={tw`w-40 h-40`}/>
                    <Link href="/siswa/detailsiswa" style={tw`bg-yellow-500 px-3 py-2 mt-9 rounded`}>
                        <Text style={tw`text-center text-lg`}>AUFA IRFAN ADLI</Text>
                    </Link>
                </View>

            </View>
        </ScrollView>
    </View>
  )
}

export default siswa

const styles = StyleSheet.create({})