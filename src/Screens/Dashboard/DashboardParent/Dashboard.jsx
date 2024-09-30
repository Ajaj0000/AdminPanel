import React from "react";
import { styles } from "./DashStyle";
import { View, Text, ScrollView, Image, FlatList } from "react-native";
import { LineChartt } from "../DashboardChild/LineChart";
import { PieChartt } from "../DashboardChild/PieChart";
import IcPerson from '../../../Assets/Images/man.png'
// import AntDesign from "react-native-vector-icons/AntDesign";


function Dashboard() {

    return (
        <>
            {/* <AntDesign name="stepforward" size={30} color="red" /> */}

            <View style={styles.header}>
                <View style={styles.navbar}>
                    <Text style={styles.logo}>TB2</Text>
                    <Text style={styles.headerText}>The Books24</Text>
                </View>
                <Image source={IcPerson} style={styles.profile} />
            </View>

            <ScrollView>
                <View style={styles.container}>

                    <View style={styles.statsContainer}>

                        <View style={styles.stateContainerBox}>
                            <View style={[styles.statBox, { borderLeftColor: "#86c5d8" }]}>
                                <Text style={styles.statLabel}>Online store </Text>
                                <Text style={styles.statValue}>5,602</Text>
                                <Text style={styles.statChange}>↓ 20%</Text>
                            </View>

                            <View style={[styles.statBox, { borderLeftColor: "#86c5d8" }]}>
                                <Text style={styles.statLabel}>Total sales</Text>
                                <Text style={styles.statValue}>₹8,222.00</Text>
                                <Text style={styles.statChange}>↑ 13%</Text>
                            </View>
                        </View>

                        <View style={styles.stateContainerBox}>
                            <View style={[styles.statBox, { borderLeftColor: "#86c5d8" }]}>
                                <Text style={styles.statLabel}>Total orders</Text>
                                <Text style={styles.statValue}>18</Text>
                                <Text style={styles.statChange}>↓ 18%</Text>
                            </View>

                            <View style={[styles.statBox, { borderLeftColor: "#86c5d8" }]}>
                                <Text style={styles.statLabel}>Conversion rate</Text>
                                <Text style={styles.statValue}>0.32%</Text>
                                <Text style={styles.statChange}>↑ 7%</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.chartContainer}>
                        <PieChartt />
                    </View>
                    <View style={styles.chartContainer}>
                        <LineChartt />
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
export { Dashboard }