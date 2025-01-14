import { StyleSheet, Image, Platform, View, Text, TouchableOpacity, Button} from 'react-native';
import tw from "twrnc";
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome6, Fontisto, MaterialIcons, Octicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <View>
      <SafeAreaView>
        <View style={tw`flex-row px-5 justify-between items-center`}>
          <View style={tw`flex-row mx-1 gap-5 items-center`}>
            <TouchableOpacity><AntDesign name='arrowleft' size={30}></AntDesign></TouchableOpacity>
            <TouchableOpacity><Text style={tw`font-bold text-lg`}>lunadesusan._ <AntDesign name='down' size={23}></AntDesign></Text></TouchableOpacity>
          </View>
          <View style={tw`flex-row mx-1 items-center gap-4`}>
            <TouchableOpacity><Octicons name='diff-added' size={30}></Octicons></TouchableOpacity>
            <TouchableOpacity> <Feather name='list' size={30}></Feather></TouchableOpacity>
          </View>
        </View>
        <View style={tw`px-10 py-15 mx-1 flex-row items-center justify-between`}>
          <Image style={tw`h-20 w-20 rounded-full border-double border-4 border-purple-700`} source={require('@/assets/images/profile.jpg')}/>
          <View style={tw`flex-col`}>
            <Text style={tw`font-bold text-lg`}>100</Text>
            <Text>Post</Text>
          </View>
          <View style={tw`flex-col`}>
            <Text style={tw`font-bold text-lg`}>100K</Text>
            <Text>Followers</Text>
          </View>
          <View style={tw`flex-col`}>
            <Text style={tw`font-bold text-lg`}>90</Text>
            <Text>Following</Text>
          </View>
        </View>
        <View style={tw`px-10`}>
          <Text style={tw`font-medium text-md pb-5`}>Raf</Text>
          <Text style={tw`font-medium text-gray-700 text-md pb-5`}>UI/UX DESIGN</Text>
        </View>
        <View style={tw`px-4 pb-5 mx-1 flex-row justify-center gap-10`}>
          <Entypo name='instagram-with-circle' size={35} style={tw`text-pink-700`}></Entypo>
          <Entypo name='linkedin-with-circle' size={35} style={tw`text-blue-600`}></Entypo>
          <Entypo name='facebook-with-circle' size={35} style={tw`text-blue-900`}></Entypo>
          <Entypo name='twitter-with-circle' size={35} style={tw`text-sky-500`}></Entypo>
        </View>
        <View style={tw`px-4 mx-1 flex-row justify-around`}>
          <Link href="/projects/nnn" style={tw`border border-4 border-purple-700 solid py-3 px-12 rounded-xl`}>
            <Text style={tw`font-bold text-lg text-purple-700`}>Projects</Text>
          </Link>
          <Link href="/siswa/siswa" style={tw`border border-4 solid border-purple-700 bg-purple-700 py-3 px-15 rounded-xl`}>
            <Text style={tw`font-bold text-lg text-white`}>Siswa</Text>
          </Link>
        </View>
        <View style={{ borderBottomWidth: 1, paddingTop:30 }}></View>
        <View style={{ borderBottomWidth: 1, paddingTop:5 }}></View>
      </SafeAreaView>
    </View>
      
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  profileWrapper: {
    backgroundColor: '#D32F2F',
    paddingVertical: 80,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    position: 'relative',
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitleText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  editButton: {
    color: 'white',
    fontSize: 14,
    position: 'absolute',
    right: 16,
    top: 0,
    paddingEnd: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
  },
  menuContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  statistikTitle: {
    color: '#D32F2F',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statsGrid: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  statsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    marginBottom: 16,
  },
  bgLogo: {
    height: 50,
    width: 50,
    backgroundColor: '#D32F2F',
    borderRadius: 25,
  },
  logo: {
    padding: 13
  },
  statsText: {
    marginLeft: 12,
  },
  statsNumber: {
    fontSize: 20,
    fontWeight: '600',
  },
  statsLabel: {
    fontSize: 15,
    color: '#666',
  },
  akunContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  akunTitle: {
    color: '#D32F2F',
    fontSize: 20,
    fontWeight: 'bold',
  },
  akunButtonContainer: {
    marginTop: 20,
    flexDirection: 'column',
    gap: 5
  },
  akunButton: {
    height: 30,
    paddingHorizontal: 1,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  akunButtonText: {
    fontSize: 15,
    fontWeight: 'semibold'
  },
  footer: {
    paddingTop: 90,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footerText: {
    paddingHorizontal: 20,
    fontSize: 12,
    fontWeight: 'light',
  }
});
