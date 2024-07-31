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
      <div className="home-paragraph">Welcome to Parker's Poker! This is one of my first fullstack applications, and what your'e looking at is the frontend.</div>
      <div className="home-paragraph bold">If you're interested in the backend, and the structure of this site, keep reading! If you're one of my friends and just want to play, go <Link to={user ? "/user-hand" : "/hand"}>here!</Link></div>
      <div className="home-paragraph">When I began learning to code, I came across <a href="https://www.youtube.com/watch?v=eWRfhZUzrAc">this</a> video. At around the 3:27.00 mark, our instructor walks us through making a BlackJack game in Python. I did NOT have the power to do it myself just yet, so I followed along. When I was done, I realized that it helped me understand how these different elements of code collide together to create almost anything you want.</div>
      <div className="home-paragraph">When I finished the project, I took it upon myself to clean it up. Make certain parts more efficient, with mapping and filtering, hash-mapping and more. I became way more confident in my logic abilities, and along the way, my casino abilities too! (Will use wisely.) </div>
      <div className="home-paragraph">Once I felt there was no more to do than small touch ups, I moved on to a new challenge constructed by my very brain.</div>
      <div className="emphasis">Make the thing again, but Poker.</div>
      <div className="home-paragraph">So I did. All while I was supposed to be doing real coding assignments. Whoops. Even though I ended up finishing those, and learned just as much if not more, I still worked endlessly on my card games. When I felt I had poker somewhat down, I decided to try and make both games run on the same deck. That's how I taught myself imports.</div>
      <div className="home-paragraph">Now, you wouldn't believe it, but BlackJack and Poker are VERY different. If you were to ask me: "Which one has the more complicated rules?" before I began this journey, yes, I would've said poker, sure, but now? It's still poker, but by a much, much, larger ammount.</div>
      <div className="emphasis">
        Let's walk through why.
      </div>
      <div className="home-paragraph">In your head, break a simple playing card down to it's basic components. you have it's <span className="italic">suit,</span> and <span className="italic">"rank",</span> but don't forget, <span className="italic">"ranks"</span> carry <span className="italic">"value".</span> These values are where the first "I'd rather be making BlackJack" moments hit.</div>
      <div className="home-paragraph">In BlackJack, a value is used additivly. Add the values, if it's over 21, win = false. That's 10 minute tutorial worthy.</div>
      <div className="home-paragraph">In <span className="italic">Poker</span> on the other hand, values are used as the high card and checking for a straight.</div>
      <div className="home-paragraph">The high card is easy: in an array of card values, just get the largest.</div>
      <div className="home-paragraph">Think for a second about checking for a straight. Did you think long enough? Did you think about EVERYTHING? I did not at first. So in the early iterations, if you had</div>
      <div className="emphasis">
        [Ace, 2, 3, 4, 5]
      </div>
      <div className="home-paragraph">as a hand, it didn't count as a straight, because the values looked like
      </div>
      <div className="emphasis">
        [14, 2, 3, 4, 5]
      </div>
      <div className="home-paragraph">I did get around to fixing this, a simple if statement, but this intoduced me to those little unaccounted for constraints.</div>
      <div className="home-paragraph">while that is something that I just didnt think about, there was one issue that I knew I'd face, and was wanting to implement, that while I'm writing this instead of working on, has been a nightmare.</div>
      <div className="emphasis"><Link to="/leaderboard">The Leaderboard.</Link></div>
      <div className="home-paragraph">I am not the most familiar with sorting algorithms, but for some reason my brain really wanted to tackle this complicated one. There are a lot of aspects that go into checking if one hand of poker is better than another.</div>
      <div className="home-paragraph">At the top of the hierarchy, is what I call the hand's <span className="italic">"type".</span> This refers to the terms such as <span className="italic">"Pair", "Two pair",</span> etc. You could call it a score, or something else, but <span className="italic">"type"</span> is the variable name I went with.</div>
    </div>
  )
}