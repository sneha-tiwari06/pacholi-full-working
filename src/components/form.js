import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

function Form() {
    const [searchParams, setSearchParams] = useSearchParams();
    const utmSource = searchParams.get('utm_source');
    const utmMedium = searchParams.get('utm_medium');
    const utmCampaign = searchParams.get('utm_campaign');
    const utmTerm = searchParams.get('utm_term');
    const utmContent = searchParams.get('utm_content');

    const [formData, setFormData] = useState({
        name: '',
        time: '',
        phone: '',
        email: '',
        needs: '',
        utm_source: utmSource || '',
        utm_medium: utmMedium || '',
        utm_campaign: utmCampaign || '',
        utm_term: utmTerm || '',
        utm_content: utmContent || '',
    });
 

    useEffect(() => {
        console.log('UTM parameters changed:', {
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_campaign: utmCampaign,
            utm_term: utmTerm,
            utm_content: utmContent,
        });
        if (utmSource) {
            localStorage.setItem('utm_source', utmSource);
        }
        if (utmMedium) {
            localStorage.setItem('utm_medium', utmMedium);
        }
        if (utmCampaign) {
            localStorage.setItem('utm_campaign', utmCampaign);
        }
        if (utmTerm) {
            localStorage.setItem('utm_term', utmCampaign);
        }
        if (utmContent) {
            localStorage.setItem('utm_content', utmContent);
        }
    }, [utmSource, utmMedium, utmCampaign, utmTerm, utmContent]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://utm-pacholi.onrender.com/api/contact', formData);
            alert('Form submitted successfully');
            setFormData({
                name: '',
                time: '',
                phone: '',
                email: '',
                needs: '',
                utm_source: utmSource || '',
                utm_medium: utmMedium || '',
                utm_campaign: utmCampaign || '',
                utm_term: utmTerm || '',
                utm_content: utmContent || '',
                
            });

            setSearchParams({
                utm_source: formData.utm_source,
                utm_medium: formData.utm_medium,
                utm_campaign: formData.utm_campaign,
                utm_term: formData.utm_term,
                utm_content: formData.utm_content,
            });
        } catch (error) {
            console.error('Error submitting form', error);
            alert('Error submitting form');
        }
    };

    return (
        <div className='w-100 form-main'>
            <div className='w-100 container'>
                <div className='heading mx-auto text-center'>
                    <h2 className='pt-4 mb-0'>GET IN TOUCH</h2>
                </div>
                <p className='text-center'>
                    Feel free to contact us for more information or to book your consultation
                </p>
                <div className='row'>
                    <div className='col-lg-6 contactus-img'>
                        <img src='https://ecis.in/pachaouli-landing-page/assets/contact.png' alt='' />
                    </div>
                    <div className='col-lg-6'>
                        <form onSubmit={handleSubmit}>
                            <div className='row contact-form'>
                                <div className='col-md-12 form-group'>
                                    <input
                                        type='text'
                                        name='name'
                                        className='form-control form-control-bg'
                                        placeholder='Name'
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='col-md-12 form-group'>
                                    <input
                                        type='text'
                                        name='time'
                                        className='form-control form-control-bg'
                                        placeholder='Time'
                                        value={formData.time}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='col-md-6 form-group'>
                                    <input
                                        type='text'
                                        name='phone'
                                        className='form-control form-control-bg'
                                        placeholder='Phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='col-md-6 form-group'>
                                    <input
                                        type='text'
                                        name='email'
                                        className='form-control form-control-bg'
                                        placeholder='Email'
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='col-md-12 form-group'>
                                    <textarea
                                        name='needs'
                                        className='form-control form-control-bg'
                                        placeholder='Describe Your Needs'
                                        value={formData.needs}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className='pt-4 text-center'>
                                    <button
                                        type='submit'
                                        className='btn btn-secondary'
                                        style={{ backgroundColor: '#0A1D5C' }}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
