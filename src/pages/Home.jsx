import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/Authorization"

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <div className="disable-cursor-line center home-page">
      <h1 className="title">Parker's Poker</h1>
      <h3 className="tagline">Test your luck!</h3>
      <hr width={350} />
      <div className="home-paragraph">Welcome to Parker's Poker! This is one of my first fullstack applications, and what you're looking at is the front-end.</div>
      <div className="home-paragraph bold">If you're interested in the backend, and the structure of this site, keep reading! If you're one of my friends and just want to play, click <Link to={user ? "/user-hand" : "/hand"}>here!</Link></div>
      <div className="home-paragraph">When I began learning to code, I came across <a href="https://www.youtube.com/watch?v=eWRfhZUzrAc">this</a> video. At around the 3:27.00 mark, our instructor walks us through the process of making a BlackJack game in Python. I didn't quite have the power to do it on my own just yet, so I followed along. When I was done, I noticed that by making a game with rules I already understood, I better understood how these different elements of code collided together to create almost anything.</div>
      <div className="home-paragraph">When I finished the project, I took it upon myself to clean it up. I Made certain parts more efficient, with mapping, filtering, hash-mapping and more. I became way more confident in my logic abilities, and along the way, my casino abilities too! (Will be used wisely.) </div>
      <div className="home-paragraph">Once I felt there was no more to do than small touch ups, I moved on to a new challenge constructed by my very own brain.</div>
      <div className="emphasis">Make the thing again, but Poker.</div>
      <div className="home-paragraph">So I did. All while I was supposed to be doing real coding assignments. Whoops. Even though I ended up finishing those, and learned just as much if not more, I still worked endlessly on my card games. When I felt I had poker somewhat down, I decided to try and make both games run on the same deck. That's how I taught myself imports.</div>
      <div className="home-paragraph">Now, you wouldn't believe it, but BlackJack and Poker are VERY different. If you were to ask me: "Which one has the more complicated rules?" before I began this journey, yes, I would've said poker, sure, but now? It's still poker, but by a much, much, larger ammount.</div>
      <div className="emphasis">
        Let's walk through why.
      </div>
      <div className="home-paragraph">In your head, break a simple playing card down to it's basic components. You have it's <span className="italic">suit,</span> and <span className="italic">"rank",</span> but don't forget, <span className="italic">"ranks"</span> carry <span className="italic">"value".</span> These <span className="italic">values</span> are where the first "I'd rather be making BlackJack" moments hit me.</div>
      <div className="home-paragraph">
        In BlackJack, a value is used additivly. Add the values, if it's over 21, win = false. That's 10 minute tutorial worthy.
      </div>
      <div className="home-paragraph">
        In <span className="italic">Poker</span> on the other hand, values are used to understand which card is the high card, and figuring out if a hand qualifies as a straight.
      </div>
      <div className="home-paragraph">
        The high card might seem easy: in an array of card values, just get the largest. And while yes, it is easy, that's not how I did it.
      </div>
      <div className="home-paragraph">
        In order to sort through a large ammount of hands, and know which card is the highest, instead, in my database of cards, I assigned an "id" to each card. I ordered these id's based on the card's value.
      </div>
      <div className="home-paragraph">
        If you're having trouble following along, picture the 2 of clubs with id 1, the 2 of diamonds with id 2, the 2 of hearts with id 3, and so on.
      </div>
      <div className="home-paragraph">
        While that seems simple enough, think for a second about the other reason we need values. Checking for a straight.
      <div>
        Did you think long enough? I didn't at first. So in the early iterations, if you were dealt this:
      </div>
      <div className="emphasis center">[Ace, 2, 3, 4, 5]</div>
      <div className="home-paragraph">It wouldn't count as a straight, because the values appeard like like this:
      </div>
      <div className="emphasis center">
        [14, 2, 3, 4, 5]
      </div>
      <div className="home-paragraph">I did get around to fixing this, a simple if statement, but this intoduced me to those little unaccounted for constraints.</div>
      </div>
      </div>
  )
}