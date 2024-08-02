import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CarouselProfiles.css';

const profiles = [
    {
        name: "Eduardo Lopes",
        title: "Realtech Produções",
        image: "https://s3-alpha-sig.figma.com/img/18de/04c2/fe0091a30f28f3c139b7c09453514a7d?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mWs2lDt0e7n3c0mh6gRhkAYAy37iwlQIN3eMy1m0q76DCC5yEwV6jKRnl8dAIztfHegw1VatDFEMJZydkBrHEoHuSeje~OIW~H4DkcAzfJIWZSnrAOr~JFtTRfoFfJwtYy~g1gB564hP6aLlDO5xz97979G8VpNY4PMO2t5XLnIrk3Et1gHG2OehiW0XEsGaAR~rEOvXHoYLWNbRrzoDkRivXvz6vTR7qbzJWM6I-uC5gxAqrvB1Tz1xhvcIh7vjZP~ZohGrLVQkLjloTKfFuAFOLHryZdE-1qRanUVuPUGW3UVZt1L4Ciwylm6m50xQRohcQa4Ef9Jp7rthgOW3LA__",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        name: "Eduardo Lopes",
        title: "Realtech Produções",
        image: "https://s3-alpha-sig.figma.com/img/18de/04c2/fe0091a30f28f3c139b7c09453514a7d?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mWs2lDt0e7n3c0mh6gRhkAYAy37iwlQIN3eMy1m0q76DCC5yEwV6jKRnl8dAIztfHegw1VatDFEMJZydkBrHEoHuSeje~OIW~H4DkcAzfJIWZSnrAOr~JFtTRfoFfJwtYy~g1gB564hP6aLlDO5xz97979G8VpNY4PMO2t5XLnIrk3Et1gHG2OehiW0XEsGaAR~rEOvXHoYLWNbRrzoDkRivXvz6vTR7qbzJWM6I-uC5gxAqrvB1Tz1xhvcIh7vjZP~ZohGrLVQkLjloTKfFuAFOLHryZdE-1qRanUVuPUGW3UVZt1L4Ciwylm6m50xQRohcQa4Ef9Jp7rthgOW3LA__",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        name: "Eduardo Lopes",
        title: "Realtech Produções",
        image: "https://s3-alpha-sig.figma.com/img/18de/04c2/fe0091a30f28f3c139b7c09453514a7d?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mWs2lDt0e7n3c0mh6gRhkAYAy37iwlQIN3eMy1m0q76DCC5yEwV6jKRnl8dAIztfHegw1VatDFEMJZydkBrHEoHuSeje~OIW~H4DkcAzfJIWZSnrAOr~JFtTRfoFfJwtYy~g1gB564hP6aLlDO5xz97979G8VpNY4PMO2t5XLnIrk3Et1gHG2OehiW0XEsGaAR~rEOvXHoYLWNbRrzoDkRivXvz6vTR7qbzJWM6I-uC5gxAqrvB1Tz1xhvcIh7vjZP~ZohGrLVQkLjloTKfFuAFOLHryZdE-1qRanUVuPUGW3UVZt1L4Ciwylm6m50xQRohcQa4Ef9Jp7rthgOW3LA__",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        name: "Eduardo Lopes",
        title: "Realtech Produções",
        image: "https://s3-alpha-sig.figma.com/img/18de/04c2/fe0091a30f28f3c139b7c09453514a7d?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mWs2lDt0e7n3c0mh6gRhkAYAy37iwlQIN3eMy1m0q76DCC5yEwV6jKRnl8dAIztfHegw1VatDFEMJZydkBrHEoHuSeje~OIW~H4DkcAzfJIWZSnrAOr~JFtTRfoFfJwtYy~g1gB564hP6aLlDO5xz97979G8VpNY4PMO2t5XLnIrk3Et1gHG2OehiW0XEsGaAR~rEOvXHoYLWNbRrzoDkRivXvz6vTR7qbzJWM6I-uC5gxAqrvB1Tz1xhvcIh7vjZP~ZohGrLVQkLjloTKfFuAFOLHryZdE-1qRanUVuPUGW3UVZt1L4Ciwylm6m50xQRohcQa4Ef9Jp7rthgOW3LA__",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const ProfileCarousel = () => {
    return (
        <Carousel responsive={responsive}>
            {profiles.map((profile, index) => (
                <div className="profile-card" key={index}>
                    <img src={profile.image} alt={profile.name} className="profile-image" />
                    <p className='description-carousel-profile'>{profile.description}</p>
                    <div className='name-title-carousel-profile'>
                        <span>{profile.name}</span>
                        -
                        <span>{profile.title}</span>
                    </div>

                </div>
            ))}
        </Carousel>
    );
};

export default ProfileCarousel;
