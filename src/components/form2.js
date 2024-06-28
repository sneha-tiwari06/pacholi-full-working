import React from 'react'

function Form2() {
  return (
    <div className='contact-form-banner'>
                <div className='form-main'>

                    <form>
                        <h4 className='text-center appointment'>Book Appointment</h4>
                        
                        <div className='appointment-text'>
                        <span>Please fill the form below and expedite your consultation process.</span></div>
                        <div className='row contact-form-fields'>
                            <div className="col-md-12 form-group">
                                <input type="text" className="form-control banner-control-bg" placeholder='Full Name:' />
                            </div>

                            <div className="col-md-12 form-group">
                                <input type="text" className="form-control banner-control-bg" placeholder='Mobile Number:' />
                            </div>
                            <div className="col-md-12 form-group">
                                <input type="email" className="form-control banner-control-bg" placeholder='Email:' />
                            </div>

                            <div class="col-md-12 form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="agreeCheckbox" />
                                    <label class="form-check-label" for="agreeCheckbox">
                                        By submitting, you agree to our <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>.
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="text-center pt-2">
                            <button type="submit" class="submit-banner">SUBMIT</button>
                        </div>
                    </form>

                </div>
            </div>
  )
}

export default Form2