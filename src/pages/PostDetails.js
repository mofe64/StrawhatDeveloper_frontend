import Header from '../components/header';
import Footer from '../components/Footer';
import '../css/postDetail.css';
import sampleImage2 from '../assets/paul-hanaoka-kDrEpX6Yo_w-unsplash.jpg';

const PostDetail = () => {
    return (
        <>
            <Header/>
            <div className='container'>
                <div className='post-detail-meta'>
                    <p>Business</p>
                    <p>March 22, 2021</p>
                </div>
                <div className='post-detail-title'>
                    <h1>Some Title goes here</h1>
                </div>
                <div className='post-detail-intro'>
                    <p>
                        Some Paragraph about the post to serve as an intro
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                        by injected humour
                    </p>
                </div>
            </div>
            <div className='post-detail-image'>
                <img src={sampleImage2} alt='post-cover'/>
            </div>
            <div className='container'>
                <p className='post-detail-body'>
                    Some Paragraph about the post to serve as an body
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                    by injected humour
                    Some Paragraph about the post to serve as an body
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                    by injected humour
                    Some Paragraph about the post to serve as an body
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                    by injected humour
                    Some Paragraph about the post to serve as an body
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                    by injected humour 
                </p>
            </div>
            <Footer/>
        </>
    )
}
export default PostDetail;