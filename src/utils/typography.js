import Typography from "typography";
import fairyTheme from 'typography-theme-fairy-gates';

fairyTheme.baseFontSize = '22px';
fairyTheme.overrideThemeStyles = () => ({
    a: {
        textShadow: 'none',
        backgroundImage: 'none'
    }
})

const typography = new Typography(fairyTheme);

export default typography;