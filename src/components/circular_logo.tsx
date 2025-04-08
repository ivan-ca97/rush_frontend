interface CircularLogoProps {
    alt: string;
    size?: number;
}

export const CircularLogo = ({ alt, size = 100 }: CircularLogoProps) => {
    const style: React.CSSProperties = {
      width: size,
      height: size,
      borderRadius: '50%',
      objectFit: 'cover',
      background: '#afafaf'
    };


    return (
        <img src={"/default_logo.png"} alt={alt} style={style} />
    );
};

export default CircularLogo;
