import  { useState,useEffect } from 'react';
import axios from 'axios';
import {BASE_URL} from './Helper'

const Details = ({ handleAdd }) => {

    const [addCount, setaddCount] = useState(0)
    const [updateCount, setupdateCount] = useState(0)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        Qualification: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${BASE_URL}/add`, formData);
            handleAdd(formData); // Update the parent state
            setFormData({ name: '', email: '', Qualification: '', phone: '' }); // Clear form fields
            window.location.reload(); // Reload the page after successful addition
        } catch (error) {
            console.error('Error adding student:', error);
        }
    };


    const fetchAPICount = async () => {
        try {
            console.log('Fetch Students')
            const response = await axios.get(`${BASE_URL}/count`);
            let addCount = response.data.addCount;
            let updateCount = response.data.updateCount;

            setaddCount(addCount);
            setupdateCount(updateCount)

            console.log("API count",response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    useEffect(() => {
        fetchAPICount();
    }, []);

    return (
        <div className="flex justify-center bg-gray-100 py-8">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-lg w-full max-w-md">
                <h1 className="text-2xl lg:text-4xl font-bold text-center mb-8">Enter Students Details</h1>
                <label className="block mb-4">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input mt-1 block w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300" placeholder="Name" />
                </label>
                <label className="block mb-4">
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input mt-1 block w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300" placeholder="Email" />
                </label>
                <label className="block mb-4">
                    <input type="text" name="Qualification" value={formData.Qualification} onChange={handleChange} className="form-input mt-1 block w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300" placeholder="Qualification" />
                </label>
                <label className="block mb-4">
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-input mt-1 block w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300" placeholder="Phone No." />
                </label>
                <button type="submit" className="btn btn-primary w-full py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#11256d] text-white hover:bg-blue-600">Submit</button>
                <h4 className="text-xl lg:text-xl font-bold text-center mb-0 mt-2">count : {addCount}</h4>
                <h4 className="text-xl lg:text-xl font-bold text-center mb-0 mt-2">count : {updateCount}</h4>
            </form>
           
        </div>
    );
};

export default Details;