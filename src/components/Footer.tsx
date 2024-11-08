import React from 'react'

import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'

function Footer(): JSX.Element {
    return (
        <div className="Footer container">
            <p>Made with <span className="heart">❤️</span> by <a href={"https://facebook.com/yun.khngn"}>yunkhngn</a></p>
        </div>
    )
}

export default Footer
