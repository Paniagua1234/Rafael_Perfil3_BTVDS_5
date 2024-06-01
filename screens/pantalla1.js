import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function CardItem() {
  return (
    <View style={styles.fondo}>
    <View style={styles.card}>
        <View style={styles.flex}>
            <View style={styles.profile}>
                <Image style={styles.img} source={"./../img/robot.png"}/>
            </View>
            <View style={styles.main_content}>
                <Text>Rafael</Text>
                <Text>20220100</Text>
            </View>
        </View>
    </View>

    <View style={styles.card}>
        <View style={styles.flex}>
            <View style={styles.profile}>
                <Image style={styles.img} source={{uri: './../img/robot.png'}}/>
            </View>
            <View style={styles.main_content}>
                <Text>Ernesto</Text>
                <Text>20190300</Text>
            </View>
        </View>
    </View>
    <View style={styles.card}>
        <View style={styles.flex}>
            <View style={styles.profile}>
                <Image style={styles.img} source={{uri: './../img/robot.png'}}/>
            </View>
            <View style={styles.main_content}>
                <Text>Manty</Text>
                <Text>20240890</Text>
            </View>
        </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        height: 65,
        backgroundColor: '#FFFFFF',
        padding: 8,
        paddingHorizontal: 15,
        margin: 10,
        borderRadius: 8
    },

    fondo:{
        backgroundColor: '#F09F18',
        height: '100%',
        width: '100%',
        marginTop: 20

    },

    profile: {
        width: 40,
        height: 40,
        borderRadius: 50,
        display: 'flex',
        backgroundColor: '#CD9DE0',
        justifyContent: 'center',
        alignItems: 'center'
    },

    img: {
        height: 40,
        width: 40
    },

    flex:{
        display:'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row'
    }
})