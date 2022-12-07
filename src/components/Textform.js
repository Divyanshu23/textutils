import { useState } from 'react'
import PropTypes from 'prop-types'

let newText = []
export default function Textform(props) {
    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleToUppercase = () => {
        setText(text.toUpperCase())
        props.setAlert({ typ: "success", msg: "Text Uppercased!"})
        setTimeout(() => {
            props.setAlert(null)
        }, 1500)
    }

    const handleToLowercase = () => {
        setText(text.toLowerCase())
        props.setAlert({ typ: "success", msg: "Text Lowercased!"})
        setTimeout(() => {
            props.setAlert(null)
        }, 1500)
    }

    const handleClear = () => {
        setText("")
        props.setAlert({ typ: "success", msg: "Text Cleared!"})
        setTimeout(() => {
            props.setAlert(null)
        }, 1500)
    }

    const handleCopy = () => {
        const textBox = document.getElementById("message")
        textBox.select()
        navigator.clipboard.writeText(textBox.value)
        props.setAlert({ typ: "success", msg: "Text Copied!"})
        setTimeout(() => {
            props.setAlert(null)
        }, 1500)
    }

    newText = text.split(/\s+/).filter((ele) => {return ele.length !== 0})
    return (
        <div className={`my-8 w-[80vw] mx-[auto] ${props.mode === 'light' ? "text-gray-900" : "text-white"}`}>
            <label htmlFor="message" className="block mb-4 text-3xl font-bold dark:text-white">{props.heading}</label>
            <textarea id="message" rows="8" className={props.mode === "light" ? "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" : "block p-2.5 w-full text-sm bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"} placeholder={props.placeholder} value={text} onChange={handleChange}></textarea>
            <button className="my-4 ml-1 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={handleToUppercase}>
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">{props.util1}</span>
            </button>
            <button className="my-4 ml-1 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={handleToLowercase}>
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">{props.util2}</span>
            </button>
            <button className="my-4 ml-1 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={handleClear}>
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">{props.util3}</span>
            </button>
            <button className="my-4 ml-1 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={handleCopy}>
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">{props.util4}</span>
            </button>
            <div className="w-[80vw] mx-[auto] dark:text-white">
                <h2 className="text-3xl font-bold mb-2">{props.util5}</h2>
                <p>
                    Characters : {text.length}
                </p>
                <p>
                    Words: {newText.length}
                </p>
                <p>
                    {0.008 * newText.length} minutes to read
                </p>
            </div>
        </div>
    )
}

Textform.prototype = {
    heading: PropTypes.string.isRequired,
    util1: PropTypes.string.isRequired,
    util2: PropTypes.string.isRequired,
    util3: PropTypes.string.isRequired,
    util4: PropTypes.string.isRequired,
    util5: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    setAlert: PropTypes.func.isRequired
}

Textform.defaultProps = {
    heading: "Enter your Text to analyse",
    util1: "To Uppercase",
    util2: "To Lowercae",
    util3: "Clear Text",
    util4: "Copy Text",
    util5: "Text Summary",
    mode: "light"
}