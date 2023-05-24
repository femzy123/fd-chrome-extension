import {useState, useEffect} from 'react'
import Card from './ui/Card';
import Article from './ui/Article';

interface Summary {
  _id: string;
  highlightedText: string;
  summary: string;
}

const Home = () => {
  return (
    <div className="w-full p-4 bg-zinc-200 rounded">
      <div className="text-right">Hi, User</div>
      <div className="flex items-center justify-start gap-4">
        <p>Category</p>
        <select className="rounded-lg px-2">
          <option>All</option>
          <option>Category 1</option>
        </select>
      </div>

      <h3 className="mt-8 text-xl font-semibold">Summaries</h3>

      <div className="mt-4">
        <Card>
          <div className="space-y-4">
            <Article
              title="Highlighted Text"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam cupiditate quod totam natus nesciunt architecto nemo molestiae unde obcaecati nobis odio, aspernatur consectetur neque saepe quisquam asperiores earum deserunt atque."
            />
            <Article
              title="Summary"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam cupiditate quod totam natus nesciunt architecto nemo molestiae unde obcaecati nobis odio, aspernatur consectetur neque saepe quisquam asperiores earum deserunt atque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam cupiditate quod totam natus nesciunt architecto nemo molestiae unde obcaecati nobis odio, aspernatur consectetur neque saepe quisquam asperiores earum deserunt atque."
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Home