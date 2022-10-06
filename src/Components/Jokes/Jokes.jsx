import Joke from '../Joke/Joke';
import Card from '../UI/Card';

const Jokes = ({ jokes }) => {
    return (
      <>
        {jokes.map((joke) => (
          <Card>
            <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
          </Card>
        ))}
      </>
    );
}

export default Jokes;