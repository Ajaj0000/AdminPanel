import React from "react"
import { View, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

function PieChartt() {
    const screenWidth = Dimensions.get('window').width;

    const data = [
        {
            name: 'Category A',
            sell: 30,
            color: '#000000', // Black
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
        {
            name: 'Category B',
            sell: 70,
            color: '#808080', // Gray
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
        {
            name: 'Category C',
            sell: 80,
            color: '#C0C0C0', // Light Gray
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
        {
            name: 'Category D',
            sell: 55,
            color: '#FFFFFF', // White
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
    ];

    return (
        <>
            <View>
                <PieChart
                    data={data}
                    width={screenWidth}
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