import { View, Text, Animated, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { AppImages } from '../../constants/AppImages';


interface CustomStepperInterface {
    progress: number,
    steps?: any
}

const stepperData = [
    {
        id: 1,
        icon: AppImages.user,
        backgroundColor: '#01B67A',
        colors: ['#01B67A', '#00B67A'],
    },
    {
        id: 2,
        icon: AppImages.target,
        backgroundColor: '#01B67A',
        colors: ['#01B67A', '#0AA785'],
    },
    {
        id: 3,
        icon: AppImages.file,
        backgroundColor: '#4257C5',
        colors: ['#3070B0', '#5041D5'],
    },
    {
        id: 4,
        icon: AppImages.detailed,
        backgroundColor: '#1F1E26',
        colors: ['#1F1E27', '#1F1E27'],
    },
    {
        id: 5,
        icon: AppImages.help,
        backgroundColor: '#191821',
        colors: ['#1F1E27', '#1F1E27'],
    },
    {
        id: 6,
        icon: AppImages.help,
        backgroundColor: '#15141D',
        colors: ['#16151E', '#16151E'],
    },
];


const CustomStepper = ({ progress = 2, steps = 6 }: CustomStepperInterface) => {

    const circleSpacing = 80

    const animatedWidth = useRef(new Animated.Value(0)).current;


    React.useEffect(() => {
        Animated.spring(animatedWidth, {
            toValue: progress * circleSpacing,
            useNativeDriver: true,
        }).start();

    }, [progress, animatedWidth]);


    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, height: 50, paddingHorizontal: 22 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {stepperData.map((item, index) => {
                    return (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} key={index}>

                            <View style={[{
                                borderRadius: 100,
                                backgroundColor: item.backgroundColor,
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 46,
                                height: 46,
                            }]}>
                                <LinearGradient
                                    colors={item.colors}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={{
                                        borderRadius: 100,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 46,
                                        height: 46,
                                    }}
                                >
                                    <Image
                                        source={item.icon}
                                        resizeMode='contain'
                                        style={{ width: 20, height: 20 }}
                                    />
                                </LinearGradient>
                            </View>
                            {index < steps - 1 &&
                                <View style={{
                                    backgroundColor: item.backgroundColor,
                                    width: 22,
                                    height: 5,
                                    borderTopEndRadius: 0,
                                    borderBottomEndRadius: 0,
                                    borderBottomLeftRadius: 50,
                                    borderTopLeftRadius: 50,
                                    position: 'absolute',
                                    right: -10,
                                    zIndex: -1
                                }} />

                            }
                            {index < steps - 1 &&
                                <View style={{
                                    width: 22,
                                    height: 5,
                                    backgroundColor: item.backgroundColor,
                                }} />
                            }
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    )
}

export default CustomStepper;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    progressBarView: {
        backgroundColor: '#F2F2F2',
        borderRadius: 12,
        paddingHorizontal: 5,
        marginHorizontal: 30,
        marginTop: 10,
        overflow: 'hidden', // Ensure the progress bar doesn't overflow its container
    },
    progressBar: {
        backgroundColor: 'red',
        height: 10,
        borderRadius: 12,
    },
    triangle: {
        borderStyle: 'solid',
        borderBlockEndColor: '#0D3C35',
        borderLeftWidth: 30 / 2,
        borderRightWidth: 30 / 2,
        borderBottomWidth: 15,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
    },
    leftTriangle: {
        position: "absolute",
        left: -10,
        top: 2,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderTopWidth: 25 / 2,
        borderBottomWidth: 25 / 2,
        borderRightWidth: 25,
        borderBlockEndColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: '#EFEFEF',
    },
});