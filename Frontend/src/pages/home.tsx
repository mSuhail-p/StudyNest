import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => {
        navigate("/area-of-study")
      }}>
        Get in
      </button>
    </div >
  )
}

export default Home
