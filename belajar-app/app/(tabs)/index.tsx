import { Image, StyleSheet, Platform, ViewBase, View, Text, ScrollView, Touchable,ImageBackground, Button, Alert, TouchableOpacity,} from 'react-native';
import tw from 'twrnc';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';


export default function HomeScreen() {
  return (
    
      <View>
       
        <ImageBackground source={require('@/assets/images/profile.jpg')}
        style= {tw`w-full h-96 bg-gradient-to-b to-black`} />
        <ScrollView>
          <View style={tw`bg-yellow-400 pb-96 rounded-t-3xl`}>
            <View style={tw`px-10 py-5`}>
              <View style={tw`items-center`}>
                <AntDesign style={tw`pb-5`} size={30} name='up'></AntDesign>
              </View>
              <Text style={tw`font-bold text-5xl`}>Daffa Rafif Ramadhan</Text>
              <View style={tw`flex flex-row items-center`}>
                <Text style={tw`font-medium text-xl`}>Designer</Text>
                <View style={tw`px-5 flex flex-row`}>
                  <Entypo name='location-pin' style={tw``} size={25}/>
                  <Text style={tw`font-medium text-xl`}>Indonesia</Text>
                </View>
              </View>
              <View style={tw`flex-row py-10 mx-1 justify-between`}>
                <View style={tw``}>
                  <Text style={tw`font-bold text-3xl`}>542</Text>
                  <Text style={tw`text-lg font-medium`}>Following</Text>
                </View>
                <View>
                  <Text style={tw`font-bold text-3xl`}>98K</Text>
                  <Text style={tw`text-lg font-medium`}>Follower</Text>
                </View>
                <View>
                  <Text style={tw`font-bold text-3xl`}>100K</Text>
                  <Text style={tw`text-lg font-medium`}>Likes</Text>
                </View>
              </View>
              <TouchableOpacity style={tw`bg-black py-3 px-5 mr-56 rounded-lg`}>
                <Text style={tw`text-yellow-400 text-lg font-extrabold`}>Hire Me</Text>
              </TouchableOpacity>
              <View style={tw`flex-row py-10 mx-1 gap-3`}>
                <TouchableOpacity><FontAwesome name='facebook' size={30}></FontAwesome></TouchableOpacity>
                <TouchableOpacity><Entypo name='linkedin' size={30}></Entypo></TouchableOpacity>
                <TouchableOpacity><Entypo name='twitter' size={30}></Entypo></TouchableOpacity>
              </View>
              <View style={tw`py-3`}>
                <Text style={tw`font-bold text-5xl`}>ABOUT</Text>
                <Text style={tw`font-medium text-md text-justify py-5`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi aliquam molestias delectus! Minima culpa quas facere mollitia illo, tempore quaerat amet vero blanditiis perspiciatis nulla recusandae dolorem! Eius.</Text>
              </View>
              <View style={tw`py-3`}>
                <Text style={tw`font-bold text-5xl`}>PROJECTS</Text>
                <Text style={tw`font-medium text-md text-justify py-5`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi aliquam molestias delectus! Minima culpa quas facere mollitia illo, tempore quaerat amet vero blanditiis perspiciatis nulla recusandae dolorem! Eius.</Text>
              </View>
              <View style={tw`py-3`}>
                <Text style={tw`font-bold text-5xl`}>TOOLS</Text>
                <View style={tw`flex-row mx-1 justify-between`}>
                  <Text style={tw`font-medium text-md text-justify py-5`}>Adobe Photoshop</Text>
                  <Text style={tw`font-medium text-md text-justify py-5`}>Adobe Illustrator</Text>
                </View>
                
              </View>
            </View>
          </View>
        </ScrollView>
      </View>


  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  car: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 12,
    alignSelf: 'center',
  },
  descText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 12,
    marginLeft: 10,
    marginRight: 10,
  },
});
