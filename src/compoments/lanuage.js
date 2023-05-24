import "./lanuage.css"
import React from 'react'
import { Link } from "react-router-dom"

const lanuage = () => {
    return (
        <div className="lanuage">
            <div className="card-continer">
                <div className="card">

                    <h3>- Lanuage -</h3>

                    <span className="bar"></span>

                    <p className="btc">SQL</p>
                    <p>- DBMS -</p>

                    <p>- QURREY-</p>

                    <p>- Featured -</p>
                    <p>- SOLVE QURREY -</p>

                    <Link to="/contact" className="btn">

                        CONTACT NOW

                    </Link>

                </div>
                <div className="card">

                    <h3>- Lanuage -</h3>

                    <span className="bar"></span>

                    <p className="btc">MANUAL TESTING</p>
                    <p>- BLACK BOX-</p>

                    <p>- WHITE BOX-</p>

                    <p>- Featured -</p>
                    <p>- FINDING BUGS-</p>

                    <Link to="/contact" className="btn">

                        CONTACT NOW

                    </Link>

                </div>
                <div className="card">

                    <h3>- Lanuage -</h3>

                    <span className="bar"></span>

                    <p className="btc">WEB DEVLOPMENT</p>
                    <p>- WEB PAGES -</p>

                    <p>- FRONT END -</p>

                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>

                    <Link to="/contact" className="btn">

                        CONTACT NOW

                    </Link>

                </div>
            </div>

        </div>
    )
}

export default lanuage