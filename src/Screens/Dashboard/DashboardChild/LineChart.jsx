import { Text, View, Dimensions } from "react-native";
import {
    LineChart
} from "react-native-chart-kit";

function LineChartt() {

    const screenWidth = Dimensions.get("window").width;

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const currentMonth = new Date().getMonth();

    // console.warn(currentMonth);
    let result = []
    for (i = currentMonth - 6; i <= currentMonth; i++) {
        result.push(months[i])
    }


    return (
        <>

            <View style={{ justifyContent: "center" }}>
                {/* <Text>Bezier Line Chart</Text> */}
                <LineChart
                    data={{
                        labels: result,
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }
                        ]
                    }}
                    width={screenWidth - 50} // from react-native
                    height={220}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: '#86c5d8',
                        backgroundGradientFrom: '#ADD8E6',
                        backgroundGradientTo: '#ffffff',
                        color: (opacity = 1) => `rgba(0,0, 0, ${opacity})`,
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#86c5d8"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 10,
                    }}
                />
            </View>

        </>
    )
}

export { LineChartt }