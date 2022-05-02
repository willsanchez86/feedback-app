import Card from '../components/shared/Card';
import {Link} from 'react-router-dom';

function AboutPage() {
  return <Card>
      <div className="about">
          <h1>About This Project</h1>
          <p>THis is a React app to leabe feedback for a product or serbice</p>
          <p>Version: 1.0.0</p>

          <p>
              <Link to='/'>Back to Home</Link>
          </p>
      </div>
  </Card>
}

export default AboutPage
