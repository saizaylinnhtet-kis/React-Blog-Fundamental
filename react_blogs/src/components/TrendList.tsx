type trends = {
    title: string;
    author: string;
}

const trends: trends[] = [
    {
        title: "React 19 Tips and Tricks",
        author: "Danny Monroe" 
    },
    {
        title: "AI is Trending",
        author: "Chaim Shepherd"
    },
    {
        title: "AI vs Future",
        author: "Nicola Wallace"
    },
]

const TrendList = () => {
  return (
    <div className="p-4 rounded-lg shadow mt-8">
        <h3 className="font-semibold text-lg mb-4">Top Trends</h3>
        <ul className="space-y-2">
            {trends.map((trend, index)=>(
                <li key={index} className="flex flex-col">
                    <span className="font-medium">{trend.title}</span>
                    <span className="text-sm text-gray-500">By {trend.author}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TrendList