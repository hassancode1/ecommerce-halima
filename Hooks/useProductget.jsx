import { useState, useEffect } from 'react';
import supabase from '../supabase';
function useProductget(name, id) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function useProduct() {
      try {
        setLoading(true);
        let { data } = await supabase.from('Product').select('*');
        if (id) {
          const { data: filteredData, error } = await supabase
            .from('Product')
            .select('*')
            .eq(name, id);

          if (error) {
            console.error('Error fetching data:', error.message);
            return;
          }
          data = filteredData || [];
        }

        // Set product data
        setProduct(data || []);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        // Stop loading
        setLoading(false);
      }
    }

    useProduct();
  }, [id]);


  return { product, loading, error };
}

export default useProductget;
