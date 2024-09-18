import React from "react";
import { styles } from "./DashStyle";
import { View, Text, ScrollView} from "react-native";
import { LineChartt } from "../DashboardChild/LineChart";

function Dashboard() {

    return (
        <>
            {/* <View style={styles.TopNavbar}>
                <TouchableOpacity onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}>
                    <Image source={menuImage} style={{ width: 22, height: 22, color: "red", }} />
                </TouchableOpacity>
                <TextInput placeholder='Search here' style={styles.navSearch} />
                <Text style={styles.ballIcon}>Ball</Text>
                <Text style={styles.tb2}>TB2</Text>
            </View> */}

            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.topCont}>
                        <View style={styles.topBox}>
                            <Text style={styles.filterItem}>Last 30 days</Text>
                        </View>
                        <View style={styles.topBox}>
                            <Text style={styles.filterItem}>All channels</Text>
                        </View>
                        <View style={styles.topBox}>
                            <Text style={styles.filterItem}>live visitors</Text>
                        </View>
                    </View>
                    <ScrollView horizontal={true}>
                        <View style={styles.statsContainer}>
                            <View style={styles.statBox}>
                                <Text style={styles.statLabel}>Online store sessions</Text>
                                <Text style={styles.statValue}>5,602</Text>
                                <Text style={styles.statChange}>↓ 20%</Text>
                            </View>
                            <View style={styles.statBox}>
                                <Text style={styles.statLabel}>Total sales</Text>
                                <Text style={styles.statValue}>₹8,222.00</Text>
                                <Text style={styles.statChange}>↑ 13%</Text>
                            </View>

                            <View style={styles.statBox}>
                                <Text style={styles.statLabel}>Total orders</Text>
                                <Text style={styles.statValue}>18</Text>
                                <Text style={styles.statChange}>↓ 18%</Text>
                            </View>
                            <View style={styles.statBox}>
                                <Text style={styles.statLabel}>Conversion rate</Text>
                                <Text style={styles.statValue}>0.32%</Text>
                                <Text style={styles.statChange}>↑ 7%</Text>
                            </View>
                        </View>
                    </ScrollView>


                    {/* <LineChart
                    data={data}
                    width={screenWidth - 40} // from Dimensions
                    height={220}
                    chartConfig={{
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Ensure you return the color
                          // Added return statement
                        strokeWidth: 2, // optional
                    }}
                    bezier
                /> */}
                    <View style={styles.chartContainer}>
                        <LineChartt />
                    </View>
                </ScrollView>
            </View>
        </>
    )
}
export { Dashboard }