import Navigation from "./components/Navigation"
import PeopleToFollow from "./components/PeopleToFollow"
import TopicsList from "./components/TopicsList"
import TrendList from "./components/TrendList"


const App = () => {
  return (
    <div>
      <Navigation />

      {/* main */}
      <div className="flex justify-center">
        <div className="w-[30%]">
          <PeopleToFollow />
          <TrendList />
          <TopicsList />
        </div>
        {/* <div className="w-[70%]">

        </div> */}
      </div>
    </div>
  )
}

export default App