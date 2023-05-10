import Features from '../components/Features'
import Header from '../components/Header'

const HomePage = ({storedAuthToken}) => {
  return (
    <>
      <Header storedAuthToken={storedAuthToken}/>
      <Features />
    </>
  )
}

export default HomePage
