
import supabase from "../supabase";
import { useNavigate } from 'react-router-dom';

const useOrder = () =>{
  const navigate = useNavigate()
  async function postData(orderData) {
    const { data, error } = await supabase.from('Order').insert(orderData);
  
    if (error) {
      console.error('Error posting data:', error);
      return;
    }
  navigate("/success")
    console.log('Data posted successfully:', data);
  }
  return{
    postData
  }
  }
export default useOrder