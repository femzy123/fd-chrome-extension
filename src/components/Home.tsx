import {useState, useEffect} from 'react'
import Card from './ui/Card';
import Article from './ui/Article';

interface Summary {
  _id: string;
  highlightedText: string;
  summary: string;
}

const Home = () => {
  const [summaries, setSummaries] = useState<Summary[]>([])

  const fetchSummary = () => {
    fetch("http://localhost:5000/summaries")
      .then((response) => response.json())
      .then((data) => {
        setSummaries(data)
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  }

  useEffect(() => {
    fetchSummary();
  }, [])
  
  return (
    <div className="w-full">
      <div className='m-1 bg-zinc-200 p-4 rounded'>
        <div className="text-right">Hi, User</div>
        <div className="flex items-center justify-start gap-4">
          <p>Category</p>
          <select className="rounded-lg px-2">
            <option>All</option>
            <option>Category 1</option>
          </select>
        </div>

        <h3 className="mt-8 text-xl font-semibold">Summaries</h3>

        <div className="h-[500px] mt-4 space-y-4 overflow-y-auto">
          {summaries.length > 0 ? (
            summaries.map((summary) => (
              <Card>
                <div className="space-y-4">
                  <Article
                    title="Highlighted Text"
                    text={summary.highlightedText}
                  />
                  <Article title="Summary" text={summary.summary} />
                </div>
              </Card>
            ))
          ) : (
            <Card>
              <div className="h-[400px] flex items-center justify center">
                <p className="text-gray-400 text-sm">No Summaries added yet!</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home