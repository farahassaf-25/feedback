import Card from "../components/shared/Card"
import { Link } from 'react-router-dom'

function AboutPage() {
    return (
        <Card>
            <div className="container">
                <h2>About</h2>
                <p>Feedback React is your one-stop destination for sharing and discovering <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> feedback. Whether you're a seasoned developer or just getting started, you can easily express your thoughts on React and provide a rating to help others gauge the community's sentiment.</p>
                
                <p><Link to="/">Back to Home</Link></p>
            </div>
        </Card>
    )
}

export default AboutPage