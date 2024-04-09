import React, { useContext, useRef, useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import logo from '../assets/logo.png';
import TextField from '@mui/material/TextField';
import {PaystackButton} from 'react-paystack';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import userOrder from '../../Hooks/userOrder'
import * as Yup from "yup";
import {ShoppingcartContext} from '../../Hooks/ShoppingCartContext';
import useProductget from '../../Hooks/useProductget';
import supabase from '../../supabase';
import emailjs from '@emailjs/browser';


const Checkout = () => {
    
    const formRef = useRef(null);
    const [values, setValues]= useState({
    email:"",
    firstName:"",
    lastName:"",
    address:"",
    city:"",
    state:"",
    phoneNo:""
})
    
    const {  cartitems , calculateTotal, clearCart} = useContext(ShoppingcartContext);
    const {product} = useProductget()


const { postData } = userOrder(); 
  
const config = {
    reference: new Date().getTime(),
    email: values.email,
    amount: calculateTotal() * 10, 
    // publicKey: 'pk_test_7a41bb409f07b60742bb20278181e4dba1edcd24',
    publicKey: 'D9HbauZQm0m8KmNTV',
};
const updateProductQuantitiy = async ()=>{
for(let i = 0 ; i < cartitems.length ; i++){
const currentItems = product.find((prod) => prod.id === cartitems[i].id).quantity

try{
  const {error} =  await supabase
    .from('Product')
    .update({ quantity: currentItems - cartitems[i].Qty })
    .eq('id', cartitems[i].id);

    if(error){
    throw error
    }
    clearCart()

}catch(err){
console.log(err)
}
}


}

const onSuccess = async (reference) => {
    const { firstName, lastName, email, address, city, state, phoneNo } = values;
    try {
        const response = await postData({
            email,
            firstName,
            lastName,
            address,
            city,
            state,
            phoneNo,
            referenceId: reference.reference,
            product: JSON.stringify(cartitems),
            deliveryStatus: false,
            paymentStatus: "completed",
            total: calculateTotal()
        });
   
        toast.success("Payment successful");
       updateProductQuantitiy()
        
    } catch (error) {
        console.error('Error during onSuccess:', error);
        toast.error("Error during payment");
    }
};

const onClose = () => {

};
const componentProps = {
    ...config,
    text: 'purchase',
    onSuccess: (reference) => {onSuccess(reference)}, 
    onClose: onClose, 
   
};



 const [errors, setErrors] = useState({});

 const validationSchema = Yup.object({
   email: Yup.string()
     .required("Email is Required")
     .email("Invalid email "),
   firstName: Yup.string().required("First Name is Required"),
   lastName: Yup.string().required("Last Name is Required"),
   address: Yup.string().required("Address is Required"),
   city: Yup.string().required("City is Required"),
   state: Yup.string().required("State is Required"),
   phoneNo: Yup.string()
     .matches(/^\d{11}$/, "Phone Number must be 11 digits")
     .required("Phone Number is Required"),
 });



 const handleSubmit = async (e) => {

    e.preventDefault();
        try {
        await validationSchema.validate(values, { abortEarly: false });
        console.log("Form Submitted", values);
        setErrors({});

    } catch (error) {
        const newErrors = {};

        error.inner.forEach((err) => {
            newErrors[err.path] = err.message;
        });

        console.log(newErrors);
        setErrors(newErrors);
    }
};
     const onChange = (e) => {
     setValues({ ...values, [e.target.name]: e.target.value });
 }

 
 const sendEmail = async (e) => {
    e.preventDefault();
    
    const cartItemsString = JSON.stringify(cartitems);
    try {
        const response = await emailjs.sendForm(
            "service_br4pswp",
            "template_veysl5g",
    
            formRef.current,
            {
                publicKey: 'D9HbauZQm0m8KmNTV',
                cartItems: cartItemsString  // Pass cart items data as a variable
            }
        );
        console.log('Email sent:', response.data);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};


    return (
        <form ref={formRef} onSubmit={handleSubmit}>
           <div className="">
        <header className='h-[100px] bg-footerLight flex items-center justify-center gap-5'>
                    <img src={logo} alt="" />
                    <p className="text-cute text-lg font-bold">Cute Tiny Toe</p>
                </header>
            <section className='px-8 pt-10 pb-20'>
                {/* Email */}
                <div className='flex flex-col'>
                    <label htmlFor="email" className='mb-1 text-sm'>Email</label>
                    <TextField
                        fullWidth
                        name="email"
                        label="Email"
                        variant="outlined"
                        margin="normal"
                   
                        sx={{ '& .MuiInputBase-root': { height: '40px' } }}
                        InputLabelProps={{ style: { fontSize: '13px' } }}
                        value={values.email}
                        onChange={onChange}
                    />
                   {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                 
                </div>
                {/* First Name/Last Name */}
                <div className='flex mt-3 gap-10'>
                    <div className='flex flex-col'>
                        <label htmlFor="firstName" className='mb-1 text-sm'>First Name</label>
                        <TextField
                            fullWidth
                            name="firstName"
                            label="First Name"
                            variant="outlined"
                            margin="normal"
                     
                            sx={{ '& .MuiInputBase-root': { height: '40px' } }}
                            InputLabelProps={{ style: { fontSize: '13px' } }}
                            value={values.firstName}
                            onChange={onChange}
                        />
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="lastName" className='mb-1 text-sm'>Last Name</label>
                        <TextField
                            fullWidth
                            name="lastName"
                            label="Last Name"
                            variant="outlined"
                            margin="normal"
                       
                            sx={{ '& .MuiInputBase-root': { height: '40px' } }}
                            InputLabelProps={{ style: { fontSize: '13px' } }}
                            value={values.lastName}
                            onChange={onChange}
                        />
                          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                    </div>
                </div>
                {/* Address */}
                <div className='mt-3 flex flex-col'>
                    <label htmlFor="address" className='mb-1 text-sm'>Address</label>
                    <TextField
                        fullWidth
                        name="address"
                        label="Address"
                        variant="outlined"
                        margin="normal"
                  
                        sx={{ '& .MuiInputBase-root': { height: '40px' } }}
                        InputLabelProps={{ style: { fontSize: '13px' } }}
                        value={values.address}
                        onChange={onChange}
                    />
                      {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                </div>
                {/* City/State */}
                <div className='flex mt-3 gap-10'>
                    <div className='flex flex-col'>
                        <label htmlFor="city" className='mb-1 text-sm'>City</label>
                        <TextField
                            fullWidth
                            name="city"
                            label="City"
                            variant="outlined"
                            margin="normal"
                        
                            sx={{ '& .MuiInputBase-root': { height: '40px' } }}
                            InputLabelProps={{ style: { fontSize: '13px' } }}
                            value={values.city}
                            onChange={onChange}
                        />
                          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="state" className='mb-1 text-sm'>State</label>
                        <TextField
                            fullWidth
                            name="state"
                            label="State"
                            variant="outlined"
                            margin="normal"
                            sx={{ '& .MuiInputBase-root': { height: '40px' } }}
                            InputLabelProps={{ style: { fontSize: '13px' } }}
                            value={values.state}
                            onChange={onChange}
                        />
                          {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                    </div>
                </div>
                {/* Phone Number */}
                <div className='mt-3 flex flex-col'>
                    <label htmlFor="phoneNumber" className='mb-1 text-sm'>Phone Number</label>
                    <TextField
                        fullWidth
                        name="phoneNo"
                        label="Phone Number"
                        variant="outlined"
                        margin="normal"
                    
                        sx={{ '& .MuiInputBase-root': { height: '40px' } }}
                        InputLabelProps={{ style: { fontSize: '13px' } }}
                        value={values.phoneNo}
                        onChange={onChange}
                    />
                      {errors.phoneNo && <p className="text-red-500 text-sm">{errors.phoneNo}</p>}
                </div>
                {/* Button */}
                <div className='mt-5 flex justify-between items-center sm:flex-col-reverse sm:gap-4'>
                    <div className='flex justify-between items-center sm:gap-[10rem] gap-4'>
                        <KeyboardBackspaceIcon style={{ color: "#A77866" }} />
                        <Link to='/Cart'><p className='text-cute text-sm'>Back to cart</p> </Link>
                    </div>
                    {/* { Object.values(values).every(val => val !== '') && Object.keys(errors).length === 0 ? (
                        <PaystackButton className='bg-cute text-white py-2 text-sm w-[200px] sm:w-full mt-2 rounded-md mb-2' {...componentProps} />
                    ) : ( */}
                        <button  onClick={sendEmail} className='bg-cute text-white py-2 text-sm w-[200px] sm:w-full mt-2 rounded-md mb-2'>
                            Check out
                        </button>
                    {/* )} */}
                </div>

            </section>
        </div>
    </form>
    
    );
};

export default Checkout;
