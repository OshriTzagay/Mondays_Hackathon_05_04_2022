import react from 'react';
import Idea from "./Idea"
export default function IdeaFullView(){
    const {id}=useParams()
    const [idea, setIdea] = useState({});
    useEffect(() =>{
        const loadIdea=  async ()=>{
         const newIdea=await GetIdeaById(id);
         setIdea(newIdea);
        }
        loadIdea()
    } , []);
    return(
        <>

</>
    )
}
