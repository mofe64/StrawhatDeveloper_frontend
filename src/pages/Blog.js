import Header from '../components/header';
import Footer from '../components/Footer';
import Card from '../components/card';
import '../css/blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Blog = function () {
    return (
        <>
            <Header/>
            <div className='container'>
                <div className='search-bar'>
                    <input type='search' placeholder='search' />
                    <button>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className='blogpage-header'>
                    <h1>All Posts</h1>
                </div>
                <div className='posts'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Blog;