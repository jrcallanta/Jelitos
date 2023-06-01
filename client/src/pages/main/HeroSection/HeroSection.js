import AvatarImage from "../../../assets/AvatarImage.jpg";
import AvatarShadow from "../../../assets/AvatarShadow.png";

import "../../../styles/css/pages/main/HeroSectionResponsive.css";
import { useHeroSectionLogic } from "./_HeroSectionLogic";

function HeroSection(props) {
    const {
        consts: {
            GREET_PRIMARY,
            GREET_TITLE_PRIMARY,
            GREET_TITLE_SECONDARY,
            SOCIALS,
        },
        state: { imgIsSaturated },
        handlers: { handleAvatarLoad },
        classes: { avatarClassName, imgClassName },
    } = useHeroSectionLogic(props);

    return (
        <section id={"Hero"} className={"HeroSection"} style={props.styleVars}>
            <div className='wrapper'>
                <div className={avatarClassName}>
                    <div className='avatar__img'>
                        <img
                            className={imgClassName}
                            src={AvatarImage}
                            alt='AvatarImage.png'
                            onLoad={handleAvatarLoad}
                        />
                    </div>
                    <div className='avatar__shadow'>
                        <img
                            className={imgClassName}
                            src={AvatarShadow}
                            alt='AvatarShadow.png'
                        />
                    </div>
                </div>

                <div className='greeting'>
                    <h1 className='greeting__primary'>{GREET_PRIMARY + ","}</h1>
                    <h2 className='greeting__secondary'>
                        I'm a{" "}
                        <span className='greeting__secondary__accent'>
                            {GREET_TITLE_PRIMARY}
                        </span>{" "}
                        {GREET_TITLE_SECONDARY}
                    </h2>
                </div>
            </div>

            <div className='socials' data-show={imgIsSaturated}>
                {SOCIALS.map((social, i) => (
                    <a
                        key={social.title}
                        target={"_blank"}
                        rel='noreferrer'
                        href={social.link}
                        className='socials__social'
                        style={{ "--n": `${2500 + i * 200}ms` }} // 2500 delay for greeting
                    >
                        <img
                            className='socials__social__logo'
                            src={social.logo}
                            alt={social.alt}
                        />
                    </a>
                ))}
            </div>
        </section>
    );
}

export default HeroSection;
