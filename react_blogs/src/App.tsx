import Navigation from "./components/Navigation"
import PeopleToFollow from "./components/PeopleToFollow"
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
        </div>
        {/* <div className="w-[70%]">

        </div> */}
      </div>
    </div>
  )
}

export default App