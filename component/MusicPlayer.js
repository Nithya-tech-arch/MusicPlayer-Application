import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions, TouchableOpacity, Touchable, Image, FlatList} from 'react-native';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';

import songs from '../model/data';

const {width, height} = Dimensions.get('window');
const MusicPlayer=()=>{

    const renderSongs=(i,item)=>{
        console.log("data : ",item)
        return(
            <View style={styles.artworkWrapper} >
                <Image 
                source={item.image} 
                style={styles.artworkImg}
                />
            </View>
        );
    }

    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.mainContainer}>
            
            <FlatList 
            data={songs}
            renderItem={renderSongs}
            keyExtractor={(item)=>item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            />
            
            <View>
                <Text style={styles.title}>Song Title</Text>
                <Text style={styles.artist}>Song Artist Name</Text>
            </View>

            <View>
                <Slider style={styles.progressContainer}
                 value={10}
                 minimumValue={0}
                 maximumValue={100}
                 thumbTintColor="#FFD369"
                 minimumTrackTintColor="#FFD369"
                 maximumTrackTintColor="#FFF"
                 onSlidingComplete={()=>{}}
                 />
                <View style={styles.progressLabelContainer}>
                    <Text style={styles.progressLabelTxt}>0:00</Text>
                    <Text style={styles.progressLabelTxt}>3:55</Text>
                </View>
            </View>

            <View style={styles.musicControlls}>
                <TouchableOpacity onPress={()=>{}}>
                    <Ionicons name="play-skip-back-outline" size={35} color="#FFD369" style={{marginTop:25}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Ionicons name="ios-pause-circle" size={75} color="#FFD369" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Ionicons name="play-skip-forward-outline" size={35} color="#FFD369" style={{marginTop: 25}}/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.bottomContainer}>
            <View style={styles.bottomControls}>
                <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="heart-outline" size={30} color="#777777" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="repeat" size={30} color="#777777" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="share-outline" size={30} color="#777777" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="ellipsis-horizontal" size={30} color="#777777" />
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    );
};

export default MusicPlayer;
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222831',
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    artworkWrapper: {
        width: 300,
        height: 340,
        marginBottom: 25,
        shadowColor: '#ccc',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,

        elevation: 5
    },
    artworkImg: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: '#EEEEEE',
    },
    artist: {
        fontSize: 16,
        fontWeight: '200',
        textAlign: 'center',
        color: '#EEEEEE',
    },
    progressContainer: {
        width: 350,
        height: 40,
        marginTop: 25,
        flexDirection: 'row'
    },
    progressLabelContainer: {
        width: 340,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    progressLabelTxt: {
        color: '#fff',

    },
    musicControlls: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    bottomContainer: {
        borderTopColor: "#393E46",
            borderTopWidth: 1, 
            width: width,
            alignItems: 'center',
            paddingVertical: 15
    },
    bottomControls: {flexDirection: 'row', justifyContent: 'space-between', width: '80%'},
});