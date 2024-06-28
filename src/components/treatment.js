import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
function MyVerticallyCenteredModal(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const utmSource = searchParams.get('utm_source');
    const utmMedium = searchParams.get('utm_medium');
    const utmCampaign = searchParams.get('utm_campaign');
    const utmTerm = searchParams.get('utm_term');
    const utmContent = searchParams.get('utm_content');
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        email: '',
        agree: false,
        utm_source: utmSource || '',
        utm_medium: utmMedium || '',
        utm_campaign: utmCampaign || '',
        utm_term: utmTerm || '',
        utm_content: utmContent || '',
        
    });
    useEffect(() => {
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
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://utm-pacholi.onrender.com/api/book', formData);
            alert('Form submitted successfully');
           
            setFormData({
                fullName: '',
                mobileNumber: '',
                email: '',
                agree: false,
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
            props.onHide(); 
        } catch (error) {
            console.error('Error submitting form', error);
            alert('Error submitting form');
        }
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className='appointment' style={{ textAlign: "center", fontSize: "1.7rem" }}>
                    Book Appointment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='form-main1'>
                    <form onSubmit={handleSubmit}>
                        <div className='appointment-text'>
                            <span>Please fill the form below and expedite your consultation process.</span></div>
                        <div className='row contact-form-fields'>
                            <div className="col-md-12 form-group">
                                <input
                                    type="text"
                                    name="fullName"
                                    className="form-control banner-control-bg"
                                    placeholder='Full Name:'
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-12 form-group">
                                <input
                                    type="text"
                                    name="mobileNumber"
                                    className="form-control banner-control-bg"
                                    placeholder='Mobile Number:'
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-12 form-group">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control banner-control-bg"
                                    placeholder='Email:'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-12 form-group">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="agree"
                                        checked={formData.agree}
                                        onChange={handleChange}
                                        id="agreeCheckbox"
                                    />
                                    <label className="form-check-label" htmlFor="agreeCheckbox">
                                        By submitting, you agree to our <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>.
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="text-center pt-2">
                            <button type="submit" className="submit-banner">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
}
function Treatment() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className='w-100  pb-0 treatment'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6 text-area-treatment'>
                        <h2 className='heading'>Treatment Areas</h2>
                        <div className='row'>
                            <div className='col-2'>
                                <img src='https://ecis.in/pachaouli-landing-page/assets/face.png' alt='' />
                            </div>
                            <div className='col-9'>
                                <h3 className='treatment-img d-flex mb-0'>Face</h3><span className='treatment-text'>Reveal your radiant skin with our advanced laser treatments. Experience rejuvenation and a flawless complexion today!</span>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-2'>
                                <img src='https://ecis.in/pachaouli-landing-page/assets/slim-body.png' alt='' />
                            </div>
                            <div className='col-9'>
                                <h3 className='treatment-img d-flex mb-0'> Body</h3><span className='treatment-text'>Unveil your best self with our full-body laser treatments. Achieve smooth, youthful skin from head to toe!</span>
                            </div>
                        </div>
                        <div class="readmore padding mt-0 w-auto"><a href="#" className="button" id="bookAppointmentBtn" onClick={(e) => { e.preventDefault(); setModalShow(true); }}>
                            Book Appointment <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </a>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            /></div>
                    </div>
                    <div className='col-md-6 '>
                        <img src='https://ecis.in/pachaouli-landing-page/assets/banner7.png' alt=''></img>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Treatment