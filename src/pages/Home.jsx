import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <div className="home">
            <section className="greeting">
                <h2>Hi, [User's Name]!</h2>
            </section>
            <section className="suggested-books">
                <h6>Discover your next read [down arrow]</h6>
                <p>Curated from your top genres!</p>
                <div className="suggested-book-list">
                    <div className="book-card">
                        <img src="book1.jpg" alt="Cover of [Book Title 1]"/>
                        <p>Boook Title 1</p>
                    </div>
                    <div className="book-card">
                        <img src="book2.jpg" alt="Cover of [Book Title 2]"/>
                        <p>Boook Title 2</p>
                    </div>
                    <div className="book-card">
                        <img src="book3.jpg" alt="Cover of [Book Title 3]"/>
                        <p>Boook Title 3</p>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Home;