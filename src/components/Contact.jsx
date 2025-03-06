import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useStoreContext } from '../contextApi/ContextApi';
import api from '../api/api'

export default function Contact(){
    const { token } = useStoreContext();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    
      const [errors, setErrors] = useState({});
      const [submitStatus, setSubmitStatus] = useState('idle');
    
      const validateForm = () => {
        const newErrors = {};
    
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required';
        }
    
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email';
        }
    
        if (!formData.phone.trim()) {
          newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
          newErrors.phone = 'Phone number must be exactly 10 digits';
        }
    
        if (!formData.message.trim()) {
          newErrors.message = 'Message is required';
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      // before sending mail feature
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    
    //     if (validateForm()) {
    //       // Simulate sending data to backend
    //       setTimeout(() => {
    //         setSubmitStatus('success');
    //         setFormData({ name: '', email: '', phone: '', message: '' });
    //         setTimeout(() => setSubmitStatus('idle'), 3000);
    //       }, 1000);
    //     } else {
    //       setSubmitStatus('error');
    //     }
    //   };
    

    // after integrating email send feature
    const handleSubmit = async (e) => {
        e.preventDefault();
      // console.log("TOKEN:-> ",token)
        if (validateForm()) {
          try {
            const response = await api.post("api/contact/send-email", formData, {
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  Authorization: "Bearer " + token,
                },
            });
      
            if (response.ok) {
              setSubmitStatus("success");
              setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
              setSubmitStatus("error");
            }
          } catch (error) {
            console.error("Error sending email:", error);
            setSubmitStatus("error");
          }
        } else {
          setSubmitStatus("error");
        }
      };
      



      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    
        // Clear the error when the user starts typing
        if (errors[name]) {
          setErrors(prev => ({ ...prev, [name]: '' }));
        }
      };
    
    return(
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 mb-12">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"

                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Message sent successfully!</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span>Please fill the above fields.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}