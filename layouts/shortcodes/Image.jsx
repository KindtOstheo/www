import Image from "next/image";

const Images = ({ title, height, src, priority=true }) =>{
    return (
        <div className= 'w-auto relative' style={{height: height}}>
            <Image
            src={src}
            fill={true}
            alt={title}
            priority={priority}
            className="unset"
            style={{objectFit: "contain"}}
        />
      </div>
    );
  };
  
  export default Images;