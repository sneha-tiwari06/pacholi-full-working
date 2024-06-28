import React, { useEffect } from 'react';
import $ from 'jquery';

function Faq() {
  useEffect(() => {
    $('.faqs_answer').hide();
    $('.faqs_question').click(function() {
      $('.faqs_question.active').removeClass('active');
      $('.faqs_answer').slideUp(300);
      if($(this).next().is(':hidden') === true){
        $(this).next().slideDown("slow");
        $(this).addClass('active');
      }
    });
  }, []);

  return (
    <section className="w-100 faq">
      <a name="faqs"></a>
      <div id="faqs" className="w-100 padding bg-secondary-light">
        <div className="container-lg">
          <div className="heading mx-auto text-center">
          <h2 className="mb-0">FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          <div className="faqs-box">
            <div className="faqs_question">
            How does laser hair reduction work?
              <span><i className="fa fa-angle-down"></i></span>
            </div>
            <div className="faqs_answer">
              <article>
                <p>During a laser hair reduction treatment, a laser emits a beam of light that is absorbed by the pigment in the hair follicles. The heat from the laser damages the follicles and inhibits future hair growth.</p>
              </article>
            </div>
            <div className="faqs_question">
            Is laser hair reduction painful? 
              <span><i className="fa fa-angle-down"></i></span>
            </div>
            <div className="faqs_answer">
              <article>
                <p>The level of discomfort varies from person to person and depends on the area being treated. Many people describe the sensation as a rubber band snapping against their skin. However, most clinics offer numbing cream or cooling devices to make the procedure more comfortable.</p>
               
              </article>
            </div>
            <div className="faqs_question">
            How many sessions are needed for laser hair reduction?
              <span><i className="fa fa-angle-down"></i></span>
            </div>
            <div className="faqs_answer">
              <article>
                <p>Multiple treatments are needed for optimal results. The number of treatments required varies depending on factors such as the thickness and color of the hair, the size of the treatment area, and the individual's skin type. On average, patients require between 6 to 8 treatments spaced about 4 to 6 weeks apart.</p>
              </article>
            </div>
            <div className="faqs_question">
            What areas of the body can be treated with laser hair reduction? 
              <span><i className="fa fa-angle-down"></i></span>
            </div>
            <div className="faqs_answer">
              <article>
                <p>Laser hair reduction can be used on almost any part of the body, including the face, underarms, legs, bikini area, back, and chest.</p>
              </article>
            </div>
            <div className="faqs_question">
            Are there any side effects of laser hair reduction?
              <span><i className="fa fa-angle-down"></i></span>
            </div>
            <div className="faqs_answer">
              <article>
                <p>Some common side effects include redness, swelling, and sensitivity in the treated area. These side effects usually resolve within a few hours to a few days after treatment. More serious side effects, such as burns or scarring, are rare but can occur if the procedure is not performed correctly.</p>
              </article>
            </div>
            <div className="faqs_question">
            Who is a good candidate for laser hair reduction?
              <span><i className="fa fa-angle-down"></i></span>
            </div>
            <div className="faqs_answer">
              <article>
                <p>Laser hair reduction works best on people with dark hair and light skin. However, advances in laser technology have made it possible to treat people with a wider range of skin and hair types. It is important to consult with a qualified laser hair reduction provider to determine if you are a good candidate for the procedure.</p>
              </article>
            </div>
            <div className="faqs_question">
            Is laser hair reduction permanent?
              <span><i className="fa fa-angle-down"></i></span>
            </div>
            <div className="faqs_answer">
              <article>
                <p>Laser hair reduction is not completely permanent, but it can provide long-lasting results. Over time, some hair may grow back, but it is usually finer and lighter than before. Maintenance treatments may be necessary to maintain results.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
