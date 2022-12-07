import PropTypes from 'prop-types'

export default function About(props) {
    return (
        <div className={`py-16 bg-${props.mode === "light"?"white":"[#242526]"}`}>
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="About Us" loading="lazy" width="" height=""/>
                    </div>
                    <div className={`md:7/12 lg:w-6/12 text-${props.mode === "light"?"gray-900":"white"}`}>
                        <h2 className="text-2xl font-bold md:text-4xl">TextUtils development is carried out by passionate developers</h2>
                        <p className="mt-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                        <p className="mt-4"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

About.prototype = {
    mode: PropTypes.string.isRequired
}

About.defaultProps = {
    mode: "light"
}