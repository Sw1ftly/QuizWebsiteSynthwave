import React from 'react';
import { Link, Outlet } from "react-router-dom";



class Home extends React.Component {

    render() {
        return(
            <>
                <h1 className="Title">THIS IS THE HOME STUBB</h1>
                <div className="links">
                    <Link to="/Quiz">Quiz</Link> {  }
                    <Link to="/Score">Score</Link> {  }
                    <Link to="/Contact">Contact us</Link> { }
                    <Link to="/TabExample">Tab example</Link> { }
                    <Link to="/Lore">Lore</Link> { }
                </div>
                <Outlet />
            </>
        );
    }
}

export default Home;