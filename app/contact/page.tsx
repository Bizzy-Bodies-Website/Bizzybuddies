"use client"

import Image from "next/image";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.agreed) {
      setSubmitStatus({ success: false, message: 'You must agree to the terms' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSubmitStatus({ success: true, message: 'Message sent successfully!' });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
          agreed: false,
        });
      } else {
        setSubmitStatus({ success: false, message: data.message || 'Error sending message' });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col">
        {/* Main Content */}
        <main className="flex-grow grid md:grid-cols-2">
          {/* Left Side - Red Background with Text */}
          <div className="bg-[#FF0000] text-white p-8 md:p-16 relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background Shapes */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#f04e41] opacity-50 -translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#f04e41] opacity-50 translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#f04e41] opacity-50 -translate-x-1/3 translate-y-1/3"></div>

            {/* Content */}
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                GET IN TOUCH.
              </h1>
              <p className="text-lg mb-12">
                If you have any questions or anything you would like to speak to
                us about, get in touch! We will aim to respond as quickly as
                possible.
              </p>
              <p className="text-lg">
                If you want to get in touch with us quicker, you can call us on{" "}
                <span className="font-bold">02078460099</span> or{" "}
                <span className="font-bold">07535061152</span>
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-8 md:p-16 flex items-center">
            <div className="w-full max-w-md mx-auto">
              {submitStatus && (
                <div className={`mb-4 p-4 rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First name*"
                      className="border rounded-md p-4"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last name*"
                      className="border rounded-md p-4"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address*"
                    className="border rounded-md p-4 w-full"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your message*"
                    className="border rounded-md p-4 w-full h-32"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="terms" 
                    className="mt-1"
                    name="agreed"
                    checked={formData.agreed}
                    onCheckedChange={(checked) => setFormData({...formData, agreed: checked})}
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy.
                  </label>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-black hover:bg-black/80 text-white py-6 rounded-full text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}