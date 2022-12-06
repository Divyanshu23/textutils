import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    const [text, setText] = useState("")

    const handleChange = (e) => {
        console.log('Hyyy')
        setText(e.target.value)
    }

    const handleClick = (e) => {
        setText(text.toUpperCase())
    }

    return (
        <div className="my-10 w-[80vw] mx-[auto]">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.heading}</label>
            <textarea id="message" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={props.placeholder} value={text} onChange={handleChange}></textarea>
            <button className="my-3 ml-1 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={handleClick}>
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">{props.util1}</span>
            </button>
        </div>
    )
}

Textform.prototype = {
    heading: PropTypes.string.isRequired,
    util1: PropTypes.string.isRequired
}

Textform.defaultProps = {
    heading: "Enter your Text to analyse",
    util1: "To Uppercase"
}