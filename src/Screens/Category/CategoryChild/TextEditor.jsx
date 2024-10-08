import React, { useState } from "react";
import { Text, Platform, KeyboardAvoidingView, SafeAreaView, ScrollView } from "react-native";
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";

const handleHead = ({ tintColor }) => <Text style={{ color: tintColor }}>H1</Text>

const TempScreen = ({ description }) => {
    const richText = React.useRef();

    const [info, setInfo] = useState('');
    // console.warn(info, 'info');


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <RichToolbar
                editor={richText}
                actions={[actions.undo, actions.setBold, actions.setItalic, actions.setUnderline, actions.setStrikethrough, actions.redo]}
                iconMap={{ [actions.heading1]: handleHead }}
                style={{ backgroundColor: "#FFF", elevation: 5, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
            />

            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "position"} style={{ flex: 1, height: 200, backgroundColor: "#FFF", elevation: 5, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, margin: 1, }}>
                <RichEditor
                    ref={richText}
                    onChange={descriptionText => description(descriptionText)}
                    value={info}
                    style={{ minHeight: 200, color: "black" }} // Added minHeight for better rendering
                    editorStyle={{ backgroundColor: "transparent", }}
                />
            </KeyboardAvoidingView>



        </SafeAreaView>
    );
};

export default TempScreen;
