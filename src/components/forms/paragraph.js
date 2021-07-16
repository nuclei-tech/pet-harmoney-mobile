import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

const Paragraph = ({ textColor, paragraph, textFontSize, textFontLineHeight, textFontWeight, customParagraphTextStyles }) => {
    const { theme } = useSelector(state => state.theme)
    const { paragraphText } = styles(theme)

    const manuallyConfiguredTextStyles = { color: textColor, fontSize: textFontSize, lineHeight: textFontLineHeight, fontWeight: textFontWeight }

    return (
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
            <Text style={[paragraphText, manuallyConfiguredTextStyles, customParagraphTextStyles]}>
                {paragraph}
            </Text>
        </ScrollView>

    )
}

const styles = (props) => StyleSheet.create({
    paragraphText: {
        flex: 1,
        ...props.Theme.defaultParagraphStyles,
        marginBottom: 5
    },
})

export default Paragraph