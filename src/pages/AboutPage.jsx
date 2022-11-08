import Card from "../components/shared/Card"
function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About This Projet</h1>
                <p>This is a react app to leave feedback for my product</p>
                <p>Version 1.0</p>
                <a href="/">Back to home</a>
            </div>
        </Card>
    )
}

export default AboutPage