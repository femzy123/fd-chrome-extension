import { useState, useEffect } from "react";
import Card from "./ui/Card";
import Article from "./ui/Article";

interface Summary {
  _id: string;
  highlightedText: string;
  summary: string;
  createdAt: Date;
}

const Home = () => {
  const [summaries, setSummaries] = useState<Summary[]>([]);
  const [isFeatureEnabled, setIsFeatureEnabled] = useState(true);
  const [order, setOrder] = useState('desc')

  const fetchSummary = () => {
    fetch("http://localhost:5000/summaries")
      .then((response) => response.json())
      .then((data) => {
        const sortedData: Summary[] = data.sort((a: Summary, b: Summary) => {
          const dateA: Date = new Date(a.createdAt);
          const dateB: Date = new Date(b.createdAt);
          return order === "desc"
            ? dateB.getTime() - dateA.getTime()
            : dateA.getTime() - dateB.getTime();
        });
        setSummaries(sortedData);
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  };

  useEffect(() => {
    fetchSummary();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  const toggleFeature = () => {
    setIsFeatureEnabled(!isFeatureEnabled);

    // Save the new value of the feature to storage
    // chrome.storage.sync.set({
    //   isFeatureEnabled,
    // });
  };

  return (
    <div className="w-full">
      <div className="m-1 bg-zinc-200 p-4 rounded">
        <div className="flex items-center justify-between mb-2">
          <div>
            <button
              className="bg-blue-400 text-white px-2 py-1 rounded"
              onClick={toggleFeature}
            >
              Toggle Feature
            </button>
            {isFeatureEnabled ? (
              <p>Feature is enabled</p>
            ) : (
              <p>Feature is disabled</p>
            )}
          </div>
          <p>Hi, User</p>
        </div>
        <div className="flex items-center justify-start gap-4">
          <p>Category</p>
          <select className="rounded-lg px-2">
            <option>All</option>
            <option>Category 1</option>
          </select>
        </div>

        <div className="flex justify-between items-center">
          <p>
            <h3 className="mt-8 text-xl font-semibold">Summaries</h3>
          </p>

          <div className="flex items-center justify-start gap-2 text-xs">
            <p>Sort</p>
            <select className="rounded-lg px-2" value={order} onChange={e => setOrder(e.target.value)}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>

        <div className="h-[500px] mt-4 space-y-4">
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
};

export default Home;
