import React from "react";
import { Text, Platform, KeyboardAvoidingView, SafeAreaView, ScrollView } from "react-native";
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";

const handleHead = ({ tintColor }) => <Text style={{ color: tintColor }}>H1</Text>

const TempScreen = () => {
    const richText = React.useRef();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "position"} style={{ flex: 1, height: 200 ,backgroundColor:"#FFF",elevation:5,borderTopRightRadius:10,borderTopLeftRadius:10,margin:1,}}>
                    <RichEditor
                        ref={richText}
                        onChange={descriptionText => {
                            console.log("descriptionText:", descriptionText);
                        }}
                        style={{ minHeight: 200, color: "black" }} // Added minHeight for better rendering
                        editorStyle={{backgroundColor:"transparent",}}
                    />
                </KeyboardAvoidingView>
            </ScrollView>

            <RichToolbar
                editor={richText}
                actions={[actions.undo,actions.setBold, actions.setItalic, actions.setUnderline,actions.setStrikethrough,actions.redo]}
                iconMap={{ [actions.heading1]: handleHead }}
                style={{backgroundColor:"#FFF",elevation:5,borderBottomRightRadius:10,borderBottomLeftRadius:10}}
            />
        </SafeAreaView>
    );
};

export default TempScreen;
