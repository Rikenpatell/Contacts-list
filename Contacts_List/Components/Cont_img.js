import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Cont_img = (props) => {
  const renderImage = () => {
    const {img, width, height, roundedImage} = props;
    const {imageContainer, image} = styles;

    const viewStyle = [imageContainer];
    if (roundedImage)
      viewStyle.push({borderRadius: Math.round(width + height) / 2});
    return (
      <View style={viewStyle}>
        <Image style={image} source={img} />
      </View>
    );
  };

  const renderPlaceholder = () => {
    const {placeholder, width, height, roundedPlaceholder} = props;
    const {placeholderContainer, placeholderText} = styles;

    const viewStyle = [placeholderContainer];
    if (roundedPlaceholder)
      viewStyle.push({borderRadius: Math.round(width + height) / 8});

    return (
      <View style={viewStyle}>
        <View style={viewStyle}>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            minimumFontScale={0.01}
            style={[
              {fontSize: Math.round(width) / 2},
              placeholderText
            ]}>
            {placeholder}
          </Text>
        </View>
      </View>
    );
  };

  const {img, width, height} = props;
  const {container} = styles;
  return (
    <View style={[container, props.style, {width, height}]}>
      {img ? renderImage() : renderPlaceholder()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  imageContainer: {
    overflow: 'hidden',
    justifyContent: 'center',
    height: '100%',
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
  },
  placeholderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    height: '100%',
  },
  placeholderText: {
    fontWeight: '700',
    color: '#000000',
  },
});

Cont_img.propTypes = {
  img: Image.propTypes.source,
  placeholder: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  roundedImage: PropTypes.bool,
  roundedPlaceholder: PropTypes.bool,
};

Cont_img.defaultProps = {
  roundedImage: true,
  roundedPlaceholder: true,
};

export default Cont_img;