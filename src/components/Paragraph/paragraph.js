import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Paragraph = ({textColor, paragraph, textFontSize, textFontLineHeight, textFontWeight, paragraphMarginBottom}) => {
    const {theme} = useSelector(state => state.theme)
    const {paragraphText} = styles(theme)

    const manuallyConfiguredTextStyles = {color: textColor, fontSize: textFontSize, lineHeight: textFontLineHeight, fontWeight: textFontWeight, marginBottom: paragraphMarginBottom}

    return (
        <Text style={[paragraphText, manuallyConfiguredTextStyles]}>
            {paragraph}
        </Text>
    )
}

const styles = (props) => StyleSheet.create({
    paragraphText: {
        ...props.Theme.defaultParagraphStyles,
    },
})

export default Paragraph