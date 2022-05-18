import Image from "next/image";

export default function Banner(props){
    return (
        
            <Image
                src="/images/banner.jpg"
                alt={props.alttitle}
                width={1920}
                height={450}
            />
        
    )
}