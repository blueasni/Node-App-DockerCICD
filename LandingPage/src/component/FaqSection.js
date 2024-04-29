import React, { useState } from 'react';
import faqs from '../../src/faqs.json';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
<div className="accordion text-center" id="faqAccordion" style={{ marginLeft: 'auto' }}>
          <h1 className="faq-header"> Frequently asked<span className="faq-header-questions"></span> 
              <span className="faq-header-questions-purple">Questions</span> </h1>
             
      {Object.entries(faqs.faqData).map(([categoryKey, category]) => (
        <div key={categoryKey} className="accordion-item text-center" style={{ marginLeft:'140px'}}>
          {category.qandA.map((faq, index) => (
            <div key={faq.id} className="accordion-item text-center" >          
                <button
                  className={`accordion-button ${activeIndex === faq.id ? '' : 'collapsed'}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faqCollapse${faq.id}`}
                  aria-expanded={activeIndex === faq.id ? 'true' : 'false'}
                  aria-controls={`faqCollapse${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                >
                  {faq.question}
                </button>
            
              <div
                id={`faqCollapse${faq.id}`}
                className={`accordion-collapse collapse ${activeIndex === faq.id ? 'show' : ''}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
