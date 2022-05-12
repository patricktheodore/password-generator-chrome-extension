import React from "react";

const Header: React.FC = () => {
    return (
        <h1 className="text-xl text-center mb-4 mt-8 py-2 px-4 inline-flex items-center">
            <svg className="fill-current w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.31 34.98"><g data-name="Layer 2"><path d="M24.23,13H21.9V8.74a8.75,8.75,0,0,0-17.49,0V13H2.08A2.08,2.08,0,0,0,0,15.12V32.9A2.08,2.08,0,0,0,2.08,35H24.23a2.08,2.08,0,0,0,2.08-2.08V15.12A2.08,2.08,0,0,0,24.23,13ZM7.33,8.74A5.83,5.83,0,1,1,19,8.74V13H7.33ZM23.48,32.15H2.83V15.87H23.48Z" data-name="Layer 1"/></g></svg>
            <span>GenPass</span>
        </h1>
    )
}

export default Header