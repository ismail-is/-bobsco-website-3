import React from 'react';
import { NavLink } from 'react-router-dom';

class BlogComments extends React.Component {
    render() {
        return (
            <>
                <div className="clear" id="comment-list">
                    <div className="comments-area" id="comments">
                        {/* <h2 className="comments-title">4 Comments</h2> */}
                        <div className="p-tb30">
                            {/* COMMENT LIST START */}
                            <ol className="comment-list">
                                {/* <li className="comment">
                                    <div className="comment-body">
                                        <div className="comment-meta">
                                            <NavLink to={"#"}>20 June 2019 at 8:15 am</NavLink>
                                        </div>
                                        <div className="comment-author vcard">
                                            <img className="avatar photo" src={require("./../../images/testimonials/pic1.jpg")} alt=""/>
                                            <cite className="fn">Federico</cite>
                                            <span className="says">says:</span>
                                        </div>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                                        <div className="reply">
                                            <NavLink to={"#"} className="comment-reply-link letter-spacing-2 text-uppercase">Reply</NavLink>
                                        </div>
                                    </div>
                                </li> */}
                                <li className="comment">
                                    {/* <div className="comment-body">
                                        <div className="comment-meta">
                                            <NavLink to={"#"}>20 June 2019 at 8:15 am</NavLink>
                                        </div>
                                        <div className="comment-author vcard">
                                            <img className="avatar photo" src={require("./../../images/testimonials/pic4.jpg")} alt="" />
                                            <cite className="fn"> Schiocchet </cite>
                                            <span className="says">says:</span>
                                        </div>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                                        <div className="reply">
                                            <NavLink to={"#"} className="comment-reply-link letter-spacing-2 text-uppercase">Reply</NavLink>
                                        </div>
                                    </div> */}
                                    <ol className="children">
                                        <li className="comment odd parent">
                                            {/* <div className="comment-body">
                                                <div className="comment-meta">
                                                    <NavLink to={"#"}>20 June 2019 at 8:15 am</NavLink>
                                                </div>
                                                <div className="comment-author vcard">
                                                    <img className="avatar photo" src={require("./../../images/testimonials/pic3.jpg")} alt=""/>
                                                    <cite className="fn">Brayden</cite>
                                                    <span className="says">says:</span>
                                                </div>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                                                <div className="reply">
                                                    <NavLink to={"#"} className="comment-reply-link letter-spacing-2 text-uppercase">Reply</NavLink>
                                                </div>
                                            </div> */}
                                             <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left" style={{display:'flex',justifyContent:'center'}}>
                                <div className="mt-separator" >
                                    <h2 className="text-uppercase sep-line-one " style={{color:'#F7C200'}}><span className="font-weight-300 text-primary">CORE</span> Team</h2>
                                </div>
                            </div>
                        </div>
                        </div>


                        <div className="row" style={{margin:'2px'}}>
    <div className="col-md-3 col-sm-12 d-flex flex-column align-items-center">
        <figure className="text-center">
            <img
                src={require("./../../images/allimg/Nasser.webp")}
                alt="M N Siddiqui"
                className="img-fluid rounded-circle"
                style={{ maxWidth: '150px' }}
            />
             <h5 className="mt-2">M N Siddiqui</h5>
            <figcaption className="mt-2" style={{color:'black'}}>CEO/Co-Founder</figcaption>
        </figure>
    </div>
    <div className="col-md-8 col-sm-12">
        <p style={{ textAlign: 'justify', textJustify: 'inter-word',marginTop:'10px' }}>
            M N Siddiqui is a seasoned digital marketing strategist with a robust educational and professional foundation. Holding a BEng (Mech) degree from Heriot-Watt University, Edinburgh, UK, he launched his career as a Mechanical Engineer. Later, he transitioned into Sales Engineering, where his interest in the evolving digital landscape was sparked. To refine his expertise, he acquired the Certified Digital Marketing Professional (CDMP) certification from the prestigious Digital Marketing Institute (DMI) in Dublin, Ireland. Leveraging his technical background and marketing acumen, M N Siddiqui excelled as a Senior Digital Marketing Strategist at one of the UAE’s leading agencies. Now, as the CEO & Co-Founder of Targefy, he brings a unique blend of engineering precision and marketing know-how to fuel the strategic direction of Targefy.
        </p>
    </div>
   
</div>


<div className="row" style={{margin:'2px',marginTop:'50px'}}>
    <div className="col-md-3 col-sm-12 d-flex flex-column align-items-center">
        <figure className="text-center">
            <img
                src={require("./../../images/allimg/Samra Siddiqui.webp")}
                alt="M N Siddiqui"
                className="img-fluid rounded-circle"
                style={{ maxWidth: '150px' }}
            />
             <h5 className="mt-2">Samra Siddiqui</h5>
            <figcaption className="mt-2" style={{color:'black'}}>COO/Co-Founder</figcaption>
        </figure>
    </div>
    <div className="col-md-8 col-sm-12">
        <p style={{ textAlign: 'justify', textJustify: 'inter-word',marginTop:'10px' }}>
        Samra Siddiqui is a dynamic social media specialist with a strong background in biomedical engineering. Holding a BSc in Biomedical Engineering, she refined her technical and administrative skills through impactful internships at Al Qassimi Women & Children Hospital and Ecolab, gaining practical experience in medical equipment maintenance and customer service process design. Transitioning into the digital marketing landscape, Samra developed her expertise as a Social Media Specialist at a leading UAE agency. Her passion for art and design, combined with her skills in graphic design and video editing, makes her a versatile force in the industry. As the COO and Co-Founder of Targefy, Samra drives innovative strategies that elevate brand presence across multiple platforms, with a focus on delivering cutting-edge digital solutions and impactful visual storytelling.

        </p>
    </div>
   
</div>




<div className="row" style={{margin:'2px',marginTop:'50px'}}>
    <div className="col-md-3 col-sm-12 d-flex flex-column align-items-center">
        <figure className="text-center">
            <img
                src={require("./../../images/allimg/MQSiddiqui.webp")}
                alt="M N Siddiqui"
                className="img-fluid rounded-circle"
                style={{ maxWidth: '150px' }}
            />
             <h5 className="mt-2">M Q Siddiqui</h5>
            <figcaption className="mt-2" style={{color:'black'}}>Honorary Marketing Consultant</figcaption>
        </figure>
    </div>
    <div className="col-md-8 col-sm-12">
        <p style={{ textAlign: 'justify', textJustify: 'inter-word',marginTop:'10px' }}>
        Mr. M.Q. Siddiqui, a passionate educator and seasoned marketing professional with a wealth of experience in various industries and academic institutions. With a blend of academic excellence and practical industry experience, he strives to bridge the gap between theoretical knowledge and its application in the real-world.
        </p>
    </div>
   
</div>





                                            {/* <ol className="children">
                                                <li className="comment odd parent">
                                                    <div className="comment-body">
                                                       
                                                        <div className="comment-author vcard">
                                                            <img className="avatar photo"  src={require("./../../images/allimg/Nasser.webp")} alt="" />
                                                            <cite className="fn">M N Siddiqui</cite>
                                                            <h5>CEO/Co-Founder</h5>
                                                            <span className="says">says:</span>
                                                        </div>
                                                        <p style={{textAlign:'justify',textJustify:'inter-word'}}>M N Siddiqui is a seasoned digital marketing strategist with a robust educational and professional foundation. Holding a BEng (Mech) degree from Heriot-Watt University, Edinburgh, UK he launched his career as a Mechanical Engineer. Later, he transitioned into Sales Engineering, where his interest in the evolving digital landscape was sparked. To refine his expertise, he acquired the Certified Digital Marketing Professional (CDMP) certification from the prestigious Digital Marketing Institute (DMI) in Dublin, Ireland. Leveraging his technical background and marketing acumen, M N Siddiqui excelled as a Senior Digital Marketing Strategist at one of the UAE’s leading agencies. Now, as the CEO & Co-Founder of Targefy, he brings a unique blend of engineering precision and marketing know-how to fuel the strategic direction of Targefy.</p>
                                                       
                                                    </div>
                                                </li>
                                                <li className="comment odd parent">
                                                    <div className="comment-body">
                                                        <div className="comment-meta">
                                                            <NavLink to={"#"}>20 June 2019 at 8:15 am</NavLink>
                                                        </div>
                                                        <div className="comment-author vcard">
                                                            <img className="avatar photo" src={require("./../../images/testimonials/pic2.jpg")} alt=""/>
                                                            <cite className="fn">Diego</cite>
                                                            <span className="says">says:</span>
                                                        </div>
                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                                                        <div className="reply">
                                                            <NavLink to={"#"} className="comment-reply-link letter-spacing-2 text-uppercase">Reply</NavLink>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="comment odd parent">
                                                    <div className="comment-body">
                                                        <div className="comment-meta">
                                                            <NavLink to={"#"}>20 June 2019 at 8:15 am</NavLink>
                                                        </div>
                                                        <div className="comment-author vcard">
                                                            <img className="avatar photo" src={require("./../../images/testimonials/pic2.jpg")} alt=""/>
                                                            <cite className="fn">Diego</cite>
                                                            <span className="says">says:</span>
                                                        </div>
                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                                                        <div className="reply">
                                                            <NavLink to={"#"} className="comment-reply-link letter-spacing-2 text-uppercase">Reply</NavLink>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol> */}
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                            {/* COMMENT LIST END */}
                            {/* LEAVE A REPLY START */}
                            {/* <div className="comment-respond m-t30" id="respond">
                                <h2 className="comment-reply-title" id="reply-title">Leave a Comments
                <small>
                                <NavLink to={""} style={{ display: 'none' }} id="cancel-comment-reply-link" rel="nofollow">Cancel reply</NavLink>
                                    </small>
                                </h2>
                                <form className="comment-form bdr-1 bdr-solid bdr-gray p-a20" id="commentform" method="post" action="">
                                    <p className="comment-form-author">
                                        <label htmlFor="author">Name <span className="required">*</span></label>
                                        <input className="form-control" type="text" defaultValue={""} name="user-comment" placeholder="Author" id="author" />
                                    </p>
                                    <p className="comment-form-email">
                                        <label htmlFor="email">Email <span className="required">*</span></label>
                                        <input className="form-control" type="text" defaultValue={""} name="email" placeholder="Email" id="email" />
                                    </p>
                                    <p className="comment-form-url">
                                        <label htmlFor="url">Website</label>
                                        <input className="form-control" type="text" defaultValue={""} name="url" placeholder="Website" id="url" />
                                    </p>
                                    <p className="comment-form-comment">
                                        <label htmlFor="comment">Comment</label>
                                        <textarea className="form-control" rows={8} name="comment" placeholder="Comment" id="comment" defaultValue={""} />
                                    </p>
                                    <p className="form-submit">
                                        <button className="site-button button-sm radius-no text-uppercase font-weight-600" type="button">Submit</button>
                                    </p>
                                </form>
                            </div> */}
                            {/* LEAVE A REPLY END */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default BlogComments;