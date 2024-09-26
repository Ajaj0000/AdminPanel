import React from "react"
import { View, Dimensions, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

function PieChartt() {
    const screenWidth = Dimensions.get('window').width;

    const data = [
        {
            name: 'Category A',
            sell: 30,
            color: '#AFDCEB', // Black #70c4a5
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
        {
            name: 'Category B',
            sell: 70,
            color: '#CAE9F5', // Gray #85d1b4
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
        {
            name: 'Category C',
            sell: 80,
            color: '#ADD8E6', // Light Gray#a0e0c6
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
        {
            name: 'Category D',
            sell: 55,
            color: '#86c5d8', // White #38856c
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
    ];

    return (
        <>
            <View>
                {/* <Text style={{color:"g", fontSize:20,fontWeight:"500"}}>Sell In Categories</Text> */}
                <PieChart
                    data={data}
                    width={screenWidth - 40}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#fff',
                        backgroundGradientFrom: '#fff',
                        backgroundGradientTo: '#fff',
                        color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                    }}
                    accessor="sell"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                />
            </View>
        </>
    )
}
export { PieChartt }