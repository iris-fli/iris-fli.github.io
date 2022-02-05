//file: src/webpages/home.js
import '../App.css';
import React from 'react';

const pStyle = {
    display: "flex",
    justifyContent: "center"
}
const Home = () => {
    return (
        <div style={{ padding: 20 }}>
            <h1>Iris Li</h1>
            <div style={pStyle}>
                <p>Hello! I'm Iris, a Master of Computer Science student at the University of San Francisco. I am passionate about continuous exploring and solving technical problems in Software Development, Big Data, and Machine Learning.</p>
            </div>
        </div>
    );
};
export default Home;