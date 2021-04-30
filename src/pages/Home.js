import Header from '../components/header';
import '../css/home.css';
import sampleImage1 from '../assets/karsten-winegeart-guCLBw5Cflc-unsplash.jpg';
import sampleImage2 from '../assets/paul-hanaoka-kDrEpX6Yo_w-unsplash.jpg';
import sampleImage3 from '../assets/taylor-smith-aDZ5YIuedQg-unsplash.jpg';

const Home = function () {
    return (
        <>
            <Header/>
            <div className='container'>
                <div className='featured'>
                    <div className='featured-post-main'>
                        <div className='featured-post-main-image'>
                            <img src={ sampleImage1} alt='post'/>
                        </div>
                        <div className='featured-post-main-body'>
                            <div className='post-meta'>
                                <p>Some Category</p>
                                <p>Some Date</p>
                            </div>
                            <div className='post-title'>
                                <h1>Some really long title goes here</h1>
                            </div>
                            <div className='post-text'>
                                <p>
                                    Some Paragraph about the post to serve as an intro
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                                    by injected humour
                                </p>
                            </div>
                            <div className='post-btn'>
                                <button>
                                    Read Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='featured-post-sub'>
                        <div className='featured-post-sub-div'>
                            <div className='featured-post-sub-image'>
                                <img src={sampleImage2} alt='post'/>
                            </div>
                            <div className='post-meta'>
                                <p>Some Category</p>
                                <p>Some Date</p>
                            </div>
                            <div className='post-title'>
                                <h1>Some other title</h1>
                            </div>
                            <div className='post-text'>
                                <p>
                                    Some Paragraph about the post to serve as an intro
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                                    by injected humour
                                </p>
                            </div>
                            <div className='btn-div'>
                                <button>
                                    Read Now
                                </button>
                            </div>
                        </div>
                        <div className='featured-post-sub-div'>
                            <div className='featured-post-sub-image'>
                                <img src={sampleImage3} alt='post'/>
                            </div>
                            <div className='post-meta'>
                                <p>Some Category</p>
                                <p>Some Date</p>
                            </div>
                            <div className='post-title'>
                                <h1>Some other title</h1>
                            </div>
                            <div className='post-text'>
                                <p>
                                    Some Paragraph about the post to serve as an intro
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                                    by injected humour
                                </p>
                            </div>
                            <div className='btn-div'>
                                <button>
                                    Read Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='posts'>

                </div>
                
            </div>
        </>
    )
}

export default Home;