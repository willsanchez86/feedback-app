import Card from '../components/shared/Card';

function AboutPage() {
  return <Card>
      <div className="about">
          <h1>About This Project</h1>
          <p>THis is a React app to leabe feedback for a product or serbice</p>
          <p>Version: 1.0.0</p>

          <p>
              <a href="/">Back to Home</a>
          </p>
      </div>
  </Card>
}

export default AboutPage
