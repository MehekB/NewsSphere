import React from 'react';
import { useState } from 'react';
import './fetch_data.css';
import Dropdown from 'react-bootstrap/Dropdown';

const api = {
    key: "__", /* Replace with your API Key! */
    base: "https://newsapi.org/v2/top-headlines",
};

function FetchData() {
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('general');
    const [location, setLocation] = useState('');
    const [locationName, setLocationName] = useState('Filter By Location');

    const fetchArticles = (category, location) => {
        fetch(`${api.base}?country=${location}&category=${category}&pageSize=10&apiKey=${api.key}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.totalResults == 0) {
                    console.log('None Found.')
                }
                if (data.articles) {
                    setArticles(data.articles);
                } else {
                    console.error("Error fetching articles:", data);
                }
            })
            .catch(error => {
                console.error("Error with fetch operation:", error);
            });

    };

    const handleLocationChoice = (location, locationDisplayName) => {
        setLocation(location);
        setLocationName(locationDisplayName);
    }

    const handleCategoryClick = (category) => {
        setCategory(category);
        fetchArticles(category, location);
    }
    
    return (
        <div>
            <header className="header">
                <h1>CONNECTING THE WORLD</h1>
                <p> A news platform for the top 10 latest headlines, curated across various categories and your location.</p>
            </header>

            <Dropdown className='dropdown'>
                <Dropdown.Toggle className='dropdown-basic'>
                    {locationName}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item className='dropdown-selection' onClick={() => handleLocationChoice('us', 'United States')}>United States</Dropdown.Item>
                    <Dropdown.Item className='dropdown-selection' onClick={() => handleLocationChoice('in', 'India')}>India</Dropdown.Item>
                    <Dropdown.Item className='dropdown-selection' onClick={() => handleLocationChoice('gb', 'United Kingdom')}>United Kingdom</Dropdown.Item>
                    <Dropdown.Item className='dropdown-selection' onClick={() => handleLocationChoice('cn', 'China')}>China</Dropdown.Item>
                    <Dropdown.Item className='dropdown-selection' onClick={() => handleLocationChoice('kr', 'South Korea')}>South Korea</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <main className="categories">
                <div className="card" onClick={() => handleCategoryClick('general')}>General Top 10</div>
                <div className="card" onClick={() => handleCategoryClick('health')}>Health</div>
                <div className="card" onClick={() => handleCategoryClick('science')}>Science</div>
                <div className="card" onClick={() => handleCategoryClick('sports')}>Sports</div>
                <div className="card" onClick={() => handleCategoryClick('politics')}>Politics</div>
                <div className="card" onClick={() => handleCategoryClick('entertainment')}>Entertainment</div>
            </main>

            <footer>
                <ul>
                    {articles.map((article, index) => (
                        <li key={index}>
                            <strong>{article.title}</strong><br />
                            <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
                        </li>
                    ))}
                </ul>
            </footer>

        </div>
    );
}

export default FetchData;