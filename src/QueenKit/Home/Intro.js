import Card from 'react-bootstrap/Card';
import './home.css'
import data from '../../Array'
import Queen from '../../Assets/queen.png'

function Intro() {
  return (
    <Card bg="transparent" border='#ffea9e' style={{backgroundColor: '#ffea9e', width:'45%',height:'40%', color:'#704e2e', }} className="text-white">
      <Card.Img src={Queen} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Welcome</Card.Title>
        <Card.Text style={{}}>
        <p className='intro_p' >
            “ Hello, everyone! I'm Chef Queen, and I'm thrilled to be here with you today. I bring a year of culinary experience to the table, having had the privilege of working in some of the finest kitchens around the world. My culinary journey began at Styta Curlinary Academy, where I honed my skills and developed a deep appreciation for the artistry of cooking. Over the years, I've had the pleasure of working alongside talented chefs who have inspired and influenced my cooking style. My culinary philosophy revolves around using fresh, locally-sourced ingredients and a focus on African diets. I believe that food has the power to not only tantalize the taste buds but also to create memorable experiences and bring people together.Whether it's crafting a delicate dessert, perfecting a savory dish, or experimenting with unique flavor combinations, I'm dedicated to creating culinary delights that leave a lasting impression. I'm excited to share my passion for food with you and create some delicious memories together. Let's embark on this culinary journey“ 
          </p>
    <Card.Text>
    <p className='few_text'>
  Hi healthy food lovers,Are you looking for where to get your delicious healthy meals,I want you to know QUEENS KITCHEN Gat you cover
I deal with all kinds of meals ..rice,soup any kind in plates,bowls 
House party or family events
        </p>
</Card.Text>
        </Card.Text>
        <Card.Text>- Chef Queen</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Intro;