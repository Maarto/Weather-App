import backgroundDefault from '../assets/images/BackgroundImage.png';
import backgroundRain from '../assets/images/RainType.jpg';
import backgroundMist from '../assets/images/MistState.jpg';
import backgroundSnow from '../assets/images/SnowClouds.jpg';
import backgroundClouds from '../assets/images/Clouds.jpg';
import backgroundSkyClear from '../assets/images/SkyClear.jpg';
import backgroundThunderStorm from '../assets/images/ThunderStorm.jpg';

function selectBackground(id) {

    let data = {
        // Tormenta Eléctrica
        200: backgroundThunderStorm,
        201: backgroundThunderStorm,
        202: backgroundThunderStorm,
        210: backgroundThunderStorm,
        211: backgroundThunderStorm,
        212: backgroundThunderStorm,
        221: backgroundThunderStorm,
        230: backgroundThunderStorm,
        232: backgroundThunderStorm,
        231: backgroundThunderStorm,

        // Lluvia
        300: backgroundRain,
        301: backgroundRain,
        302: backgroundRain,
        310: backgroundRain,
        311: backgroundRain,
        312: backgroundRain,
        313: backgroundRain,
        314: backgroundRain,
        321: backgroundRain,
        500: backgroundRain,
        501: backgroundRain,
        502: backgroundRain,
        503: backgroundRain,
        504: backgroundRain,
        511: backgroundRain,
        520: backgroundRain,
        521: backgroundRain,
        522: backgroundRain,
        531: backgroundRain,

        // Nieve
        600: backgroundSnow,
        601: backgroundSnow,
        602: backgroundSnow,
        611: backgroundSnow,
        612: backgroundSnow,
        613: backgroundSnow,
        615: backgroundSnow,
        616: backgroundSnow,
        620: backgroundSnow,
        621: backgroundSnow,
        622: backgroundSnow,

        // Atmosphere
        701: backgroundMist,
        711: backgroundMist,
        721: backgroundMist,
        731: backgroundMist,
        741: backgroundMist,
        751: backgroundMist,
        761: backgroundMist,
        762: backgroundMist,
        771: backgroundMist,
        781: backgroundMist,

        // Despejado
        800: backgroundSkyClear,

        // Nubes
        801: backgroundClouds,
        802: backgroundClouds,
        803: backgroundClouds,
        804: backgroundClouds,

        // Default
        0: backgroundDefault,
    }

    let path = data[id || 0]

    return path;

}

function BackgroundManager({ type }) {
    return (
        <div className='backgroundManagerCont' style={{ backgroundImage: `url(${selectBackground(type)})` }}>
            <div className="background_Filter">
            </div>
        </div>
    )

}

export default BackgroundManager;