import Image from "next/image";


function Logo(props: any) {
    const { renderDefault, title } = props;
    return (
        <div className="flex items-center space-x-2">
            <Image className="rounded-full object-cover"
                width={50} height={50}
                src="https://images.pexels.com/photos/707571/pexels-photo-707571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="logo" />
            <>{renderDefault(props)}</>

        </div>

    )
}

export default Logo

