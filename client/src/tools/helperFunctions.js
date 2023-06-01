export function createPalette (hue) {

    if (hue === 'black')
    return {
      color: "0, 0%, 75%",
      colorDark: "0, 0%, 30%",
      colorShadow: "0, 0%, 30%, 0.302",
    };

    if (hue === 'blogHue')
    return {
        color: '0, 0%, 90%',
        colorDark: '0, 0%, 60%',
        colorShadow: '0, 0%, 60%, 0.302'
    }

    else
    return {
        color: `${hue}, 37%, 86%`,
        colorDark: `${hue}, 19%, 48%`,
        colorShadow: `${hue}, 19%, 48%, 0.302`,
    }
}