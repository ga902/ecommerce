import React from "react";
    import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TestiMonials from "./TestiMonials/TestiMonials";
const Text=()=>{
    return(
        <>
            <header className="main-header">
            <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                <div className="d-flex justify-content-between w-100">
                    <a className="logo z-index" href="/">
                    <img src="images/logo.png" className="img-fluid" alt="" />
                    </a>
                    <div className="d-flex fixed-btn">
                    <a
                        href="mailto:info@batteryboss.co.in"
                        className="text-decoration-none d-flex align-items-center me-0 me-md-3 mt-0 btn-fix1"
                    >
                        <div className="d-flex  align-items-md-center align-items-lg-end align-items-center mail">
                        <img
                            src="images/gmail.icon.png"
                            className=" pe-1 img-fluid"
                            alt=""
                        />
                        <div className="text-white mb-0 fw-medium">
                            <small className="text-white lh-1 ">
                            info@batteryboss.co.in
                            </small>
                        </div>
                        </div>
                    </a>
                    <a
                        href="tel:+91-7588-010101"
                        className="text-decoration-none d-flex align-items-center btn-fix2 me-md-3"
                    >
                        <div className="d-flex align-items-md-center align-items-lg-end align-items-center">
                        <img
                            src="images/call.icon.png"
                            className="mt-lg-0 mt-0 pe-1 img-fluid mb-1"
                            alt=""
                        />
                        <div className="text-white mb-0 fw-medium">
                            <small className="text-white lh-1 ">
                            7588-010101, 7588-020202
                            </small>
                        </div>
                        </div>
                    </a>
                    <a
                        href="https://wa.me/+917588010101"
                        className="text-decoration-none d-flex align-items-center btn-fix2"
                        target="_blank"
                    >
                        <div className="d-flex  align-items-md-center align-items-lg-end align-items-center">
                        <img
                            src="images/whatsapp.png"
                            className="mt-lg-0 mt-0 pe-1 img-fluid mb-1"
                            alt=""
                        />
                        <div className="text-white mb-0 fw-medium">
                            <small className="text-white lh-1 ">+91-7588-010101</small>
                        </div>
                        </div>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </header>
        {/* Banner */}
        <section className="banner">
            <div id="slider" >
            <div
                className="bsec"
                style={{ backgroundImage: "url(images/home-banner2.jpg)" }}
            >
                <div className="container">
                <div className="row">
                    <div className="col-7 col-md-4 z-index mt-lg-5 pt-md-4 pt-0 mb-5 mb-md-4 mb-lg-0">
                    {/*  <h1 class="pt-5 pt-md-0 pt-lg-5 mt-5 mt-md-0 mt-lg-5 mb-4">Shop Online for Car Batteries, UPS, Inverters & Solar</h1> */}
                    </div>
                </div>
                </div>
            </div>
            <div
                className="bsec"
                style={{ backgroundImage: "url(images/home-banner4.jpg)" }}
            >
                <div className="container">
                <div className="row">
                    <div className="col-7 col-md-4 z-index mt-lg-5 pt-md-4 pt-0 mb-5 mb-md-4 mb-lg-0">
                    {/* <h1 class="pt-5 pt-md-0 pt-lg-5 mt-5 mt-md-0 mt-lg-5 mb-4">Shop Online for Car Batteries, UPS, Inverters & Solar</h1> */}
                    </div>
                </div>
                </div>
            </div>
            <div
                className="bsec"
                style={{ backgroundImage: "url(images/home-banner5.jpg)" }}
            >
                <div className="container">
                <div className="row">
                    <div className="col-7 col-md-4 z-index mt-lg-5 pt-md-4 pt-0 mb-5 mb-md-4 mb-lg-0">
                    {/* <h1 class="pt-5 pt-md-0 pt-lg-5 mt-5 mt-md-0 mt-lg-5 mb-4">Shop Online for Car Batteries, UPS, Inverters & Solar</h1> */}
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="custom-fm" id="custom-fm">
            <div className="row justify-content-center">
                <div className="col-12 d-none">
                <h4 className=" fs-4 fw-medium border-bottom pb-3 mb-0 text-start border-secondary">
                    Request A Callback
                </h4>
                <div className="mb-4  border2" />
                </div>
                {/* AWeber Web Form Generator 3.0.1 */}
                <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                    "\n#af-form-319082494 .af-body .af-textWrap, #af-form-319082494 .af-body .af-selectWrap{width:70%;display:block;float:right;}\n#af-form-319082494 .af-body a{color:#000000;text-decoration:underline;font-style:normal;font-weight:normal;}\n#af-form-319082494 .af-body input.text, #af-form-319082494 .af-body textarea{background-color:#FFFFFF;border-color:#000000;border-width:1px;border-style:solid;color:#000000;text-decoration:none;font-style:normal;font-weight:normal;font-size:16px;font-family:Verdana, sans-serif;}\n#af-form-319082494 .af-body input.text:focus, #af-form-319082494 .af-body textarea:focus{background-color:#FFFAD6;border-color:#5E5E5E;border-width:1px;border-style:solid;}\n#af-form-319082494 .af-body label.previewLabel{display:block;float:left;width:25%;text-align:left;color:#4D4D4D;text-decoration:none;font-style:normal;font-weight:normal;font-size:12px;font-family:Verdana, sans-serif;}\n#af-form-319082494 .af-body{padding-bottom:15px;padding-top:15px;background-repeat:no-repeat;background-position:inherit;background-image:none;color:#000000;font-size:11px;font-family:Verdana, sans-serif;}\n#af-form-319082494 .af-quirksMode .bodyText{padding-top:2px;padding-bottom:2px;}\n#af-form-319082494 .af-quirksMode{padding-right:15px;padding-left:15px;}\n#af-form-319082494 .af-standards .af-element{padding-right:15px;padding-left:15px;}\n#af-form-319082494 .bodyText p{margin:1em 0;}\n#af-form-319082494 .buttonContainer input.submit{background-image:none;background-color:#5E5E5E;color:#FFFFFF;text-decoration:none;font-style:normal;font-weight:normal;font-size:14px;font-family:Verdana, sans-serif;}\n#af-form-319082494 .buttonContainer input.submit{width:auto;}\n#af-form-319082494 .buttonContainer{text-align:right;}\n#af-form-319082494 body,#af-form-319082494 dl,#af-form-319082494 dt,#af-form-319082494 dd,#af-form-319082494 h1,#af-form-319082494 h2,#af-form-319082494 h3,#af-form-319082494 h4,#af-form-319082494 h5,#af-form-319082494 h6,#af-form-319082494 pre,#af-form-319082494 code,#af-form-319082494 fieldset,#af-form-319082494 legend,#af-form-319082494 blockquote,#af-form-319082494 th,#af-form-319082494 td{float:none;color:inherit;position:static;margin:0;padding:0;}\n#af-form-319082494 button,#af-form-319082494 input,#af-form-319082494 submit,#af-form-319082494 textarea,#af-form-319082494 select,#af-form-319082494 label,#af-form-319082494 optgroup,#af-form-319082494 option{float:none;position:static;margin:0;}\n#af-form-319082494 div{margin:0;}\n#af-form-319082494 fieldset{border:0;}\n#af-form-319082494 form,#af-form-319082494 textarea,.af-form-wrapper,.af-form-close-button,#af-form-319082494 img{float:none;color:inherit;position:static;background-color:none;border:none;margin:0;padding:0;}\n#af-form-319082494 input,#af-form-319082494 button,#af-form-319082494 textarea,#af-form-319082494 select{font-size:100%;}\n#af-form-319082494 p{color:inherit;}\n#af-form-319082494 select,#af-form-319082494 label,#af-form-319082494 optgroup,#af-form-319082494 option{padding:0;}\n#af-form-319082494 table{border-collapse:collapse;border-spacing:0;}\n#af-form-319082494 ul,#af-form-319082494 ol{list-style-image:none;list-style-position:outside;list-style-type:disc;padding-left:40px;}\n#af-form-319082494,#af-form-319082494 .quirksMode{width:100%;max-width:355px;}\n#af-form-319082494.af-quirksMode{overflow-x:hidden;}\n#af-form-319082494{background-color:#FFFFFF;border-color:#8C8C8C;border-width:1px;border-style:solid;}\n#af-form-319082494{display:block;}\n#af-form-319082494{overflow:hidden;}\n.af-body .af-textWrap{text-align:left;}\n.af-body input.image{border:none!important;}\n.af-body input.submit,.af-body input.image,.af-form .af-element input.button{float:none!important;}\n.af-body input.submit{white-space:inherit;}\n.af-body input.text{width:100%;float:none;padding:2px!important;}\n.af-body.af-standards input.submit{padding:4px 12px;}\n.af-clear{clear:both;}\n.af-element label{text-align:left;display:block;float:left;}\n.af-element{padding-bottom:5px;padding-top:5px;}\n.af-form-wrapper{text-indent:0;}\n.af-form{box-sizing:border-box;text-align:left;margin:auto;}\n.af-quirksMode .af-element{padding-left:0!important;padding-right:0!important;}\n.lbl-right .af-element label{text-align:right;}\nbody {\n}\n#af-form-319082494 .bodyText p {\n  margin: 0 0 1em !important;\n}\n\n#af-form-319082494 .af-body {\n  padding-top:\n}\n\n#af-form-319082494 .af-body .af-textWrap {\n  width: 100% !important;\n}\n\n#af-form-319082494 .af-body .af-element {\n  padding-top: 0px!important;\n  padding-bottom: 0px!important;\n}\n#af-form-319082494 .af-body .af-element:first-child {\n  margin-top: 0 !important;\n}\n#af-form-319082494 .af-body label.previewLabel {\n  font-weight: 700 !important;\n  margin-top: 0.25rem !important;\n  margin-bottom: .25rem !important;\n}\n#af-form-319082494 .af-body input.text,\n#af-form-319082494 .af-body textarea {\n  border-radius: 3px !important;\n  box-sizing: border-box !important;\n  color: #444444;\n  font-size: 1rem;\n  margin-bottom: 0.75rem !important;\n  padding: 8px 12px !important;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n}\n\n#af-form-319082494 .af-body select {\n  width: 100%;\n}\n#af-form-319082494 .af-body .af-dateWrap select {\n  width: 33%;\n}\n#af-form-319082494 .choiceList-radio-stacked {\n  margin-bottom: 1rem !important;\n  width: 100% !important;\n}\n#af-form-319082494 .af-element-radio {\n  margin: 0 !important;\n}\n#af-form-319082494 .af-element-radio input.radio {\n  display: inline;\n  height: 0;\n  opacity: 0;\n  overflow: hidden;\n  width: 0;\n}\n#af-form-319082494 .af-element-radio input.radio:checked ~ label {\n  font-weight: 700 !important;\n}\n#af-form-319082494 .af-element-radio input.radio:focus ~ label {\n  box-shadow: inset 0 0 0 2px rgba(25,35,70,.25);\n}\n#af-form-319082494 .af-element-radio input.radio:checked ~ label:before {\n  background-color: #777777;\n  border-color: #d6dee3;\n}\n#af-form-319082494 .af-element-radio label.choice {\n  border: 1px solid #d6dee3;\n  border-radius: 3px !important;\n  display: block !important;\n  font-weight: 300 !important;\n  margin: 0.5rem 0 !important;\n  padding: 1rem 1rem 1rem 2rem !important;\n  position: relative;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n}\n#af-form-319082494 .af-element-radio label.choice:before {\n  background-color: #FFF;\n  border: 1px solid #d6dee3;\n  border-radius: 50%;\n  content: '';\n  height: 0.75rem;\n  margin-left: -1.3rem;\n  position: absolute;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n  width: 0.75rem;\n}\n#af-form-319082494 .buttonContainer {\n  box-sizing: border-box !important;\n}\n#af-form-319082494 .af-footer {\n  box-sizing: border-box !important;\n}\n\n#af-form-319082494 .af-footer p {\n  margin: 0 !important;\n}\n#af-form-319082494 input.submit,\n#af-form-319082494 #webFormSubmitButton {\n  border: none;\n  border-radius: 3px !important;\n  font-weight: bold;\n  margin-top: 0.5rem !important;\n  margin-bottom: 1rem !Important;\n  padding: 0.6rem 1.5rem !important;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n  }\n#af-form-319082494 input.submit:hover,\n#af-form-319082494 #webFormSubmitButton:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n\n#af-form-319082494 input.text:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n\n.poweredBy a,\n.privacyPolicy p {\n  color: #000000 !important;\n  font-size: 0.65rem !important;\n}\n\n"
                }}
                />
                <form
                method="post"
                className="af-form-wrapper"
                acceptCharset="UTF-8"
                action="https://www.aweber.com/scripts/addlead.pl"
                >
                <div style={{ display: "none" }}>
                    <input
                    type="hidden"
                    name="meta_web_form_id"
                    defaultValue={319082494}
                    />
                    <input type="hidden" name="meta_split_id" defaultValue="" />
                    <input type="hidden" name="listname" defaultValue="awlist4807832" />
                    <input
                    type="hidden"
                    name="redirect"
                    defaultValue="http://www.batteryboss.co.in/thankyou.php"
                    id="redirect_c9a61b7cc10171b3ef82daf3a6c69bf7"
                    />
                    <input
                    type="hidden"
                    name="meta_adtracking"
                    defaultValue="Enquiry-Form"
                    />
                    <input type="hidden" name="meta_message" defaultValue={1} />
                    <input
                    type="hidden"
                    name="meta_required"
                    defaultValue="name,email,custom Mobile Number,custom Your Vehicle"
                    />
                    <input type="hidden" name="meta_tooltip" defaultValue="" />
                </div>
                <div id="af-form-319082494" className="af-form">
                    <div id="af-body-319082494" className="af-body af-standards">
                    <div className="af-element">
                        <div className="bodyText">
                        <p>&nbsp;</p>
                        <h4
                            className=" fs-4 fw-medium border-bottom pb-3 mb-0 text-start border-secondary"
                            style={{
                            boxSizing: "border-box",
                            paddingTop: 0,
                            paddingRight: 0,
                            paddingBottom: "1rem !important",
                            paddingLeft: 0,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: "0px !important",
                            marginLeft: 0,
                            fontWeight: 600,
                            lineHeight: "1.2",
                            fontSize: "1.5rem !important",
                            fontFamily: '"Roboto Slab", serif',
                            borderBottom: "1px solid #6c757d !important",
                            borderTopColor: "#6c757d !important",
                            borderRightColor: "#6c757d !important",
                            borderLeftColor: "#6c757d !important",
                            textAlign: "left !important",
                            color: "#212529",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            letterSpacing: "normal",
                            orphans: 2,
                            textIndent: 0,
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "#ffffff",
                            textDecorationThickness: "initial",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial"
                            }}
                        >
                            Request A Callback
                        </h4>
                        <p>
                            <br className="Apple-interchange-newline" />
                            <br />
                        </p>
                        </div>
                        <div className="af-clear" />
                    </div>
                    <div className="af-element">
                        <label className="previewLabel" htmlFor="awf_field-113512480">
                        Name:{" "}
                        </label>
                        <div className="af-textWrap">
                        <input
                            id="awf_field-113512480"
                            type="text"
                            name="name"
                            className="text"
                            defaultValue=""
                            onfocus=" if (this.value == '') { this.value = ''; }"
                            onblur="if (this.value == '') { this.value='';} "
                            tabIndex={500}
                        />
                        </div>
                        <div className="af-clear" />
                    </div>
                    <div className="af-element">
                        <label className="previewLabel" htmlFor="awf_field-113512481">
                        Email:{" "}
                        </label>
                        <div className="af-textWrap">
                        <input
                            className="text"
                            id="awf_field-113512481"
                            type="text"
                            name="email"
                            defaultValue=""
                            tabIndex={501}
                            onfocus=" if (this.value == '') { this.value = ''; }"
                            onblur="if (this.value == '') { this.value='';} "
                        />
                        </div>
                        <div className="af-clear" />
                    </div>
                    <div className="af-element">
                        <label className="previewLabel" htmlFor="awf_field-113512482">
                        Phone:
                        </label>
                        <div className="af-textWrap">
                        <input
                            type="text"
                            id="awf_field-113512482"
                            className="text"
                            name="custom Mobile Number"
                            defaultValue=""
                            onfocus=" if (this.value == '') { this.value = ''; }"
                            onblur="if (this.value == '') { this.value='';} "
                            tabIndex={502}
                        />
                        </div>
                        <div className="af-clear" />
                    </div>
                    <div className="af-element">
                        <label className="previewLabel" htmlFor="awf_field-113512483">
                        Select
                        </label>
                        <div className="af-selectWrap">
                        <select
                            id="awf_field-113512483"
                            name="custom Your City"
                            tabIndex={503}
                        >
                            <option className="multiChoice" value="Car Battery">
                            Car Battery
                            </option>
                            <option className="multiChoice" value="Inverter Battery">
                            Inverter Battery
                            </option>
                            <option className="multiChoice" value="SMF Battery">
                            SMF Battery
                            </option>
                            <option className="multiChoice" value="Two Wheeler Battery">
                            Two Wheeler Battery
                            </option>
                        </select>
                        </div>
                        <input
                        type="hidden"
                        name="meta_preselected_awf_field-113512483"
                        defaultValue=""
                        />
                        <div className="af-clear" />
                    </div>
                    <div className="af-element">
                        <label className="previewLabel" htmlFor="awf_field-113512484">
                        City
                        </label>
                        <div className="af-textWrap">
                        <input
                            type="text"
                            id="awf_field-113512484"
                            className="text"
                            name="custom Your Vehicle"
                            defaultValue=""
                            onfocus=" if (this.value == '') { this.value = ''; }"
                            onblur="if (this.value == '') { this.value='';} "
                            tabIndex={504}
                        />
                        </div>
                        <div className="af-clear" />
                    </div>
                    <div className="af-element buttonContainer">
                        <input
                        name="submit"
                        className="submit"
                        type="submit"
                        defaultValue="Submit"
                        tabIndex={505}
                        />
                        <div className="af-clear" />
                    </div>
                    </div>
                </div>
                <div style={{ display: "none" }}>
                    <img
                    src="https://forms.aweber.com/form/displays.htm?id=zIycDBxMLJws"
                    alt=""
                    />
                </div>
                </form>
                {/* /AWeber Web Form Generator 3.0.1 */}
                <style
                dangerouslySetInnerHTML={{
                    __html:
                    "\n        .af-form { border: none!important; }\n        .af-body.af-standards { padding: 0!important; }\n        .bodyText>p>br { display: none; }\n        .bodyText>p:before { content: \"\"; margin-top: -4px !important; margin-bottom: 22px; width: 75px!important; border: 2px solid #f21919; background-color: #f21919; display: block; }\n        .banner #custom-fm .af-form-wrapper .af-element input, .banner #custom-fm .af-form-wrapper .af-element select { border-radius: 0px!important; background-color: #f2f2f2!important; color: var(--var-color-2)!important; font-size: 14px!important; padding: 11px 13px!important; border: none !important; margin-bottom: 13px!important; width: 100%!important; }\n        .af-element .previewLabel { display: none!important; }\n        .af-selectWrap { display: block; width: 100%; min-width: 100%; }\n        .af-element.buttonContainer .submit, .banner #custom-fm .af-form-wrapper .af-element .submit { width: 100%!important; border-radius: 50px!important; background-color: #f21919!important; padding: 8px 49px!important; font-size: 16px!important; font-family: 'Roboto Slab', serif!important; color: var(--var-white)!important; border-color: #f21919!important; }\n        .af-body select { border-radius: 0px; background-color: #f2f2f2; color: var(--var-color-2); font-size: 14px; padding: 11px 13px; border: none !important; margin-bottom: 13px; width: 100%; }\n        .bodyText>p:nth-child(1) { display: none; }\n        /*#slider{min-height: 700px;}*/\n    "
                }}
                />
                <form className="d-none" name="enq-frm" method="post" id="enq-frm">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-12">
                    <input
                        type="text"
                        className=""
                        placeholder="Name*"
                        name="name"
                        id="name"
                    />
                    </div>
                    <div className="col-12 col-md-4 col-lg-12">
                    <input
                        type="email"
                        className=""
                        placeholder="Email*"
                        name="email"
                        id="email"
                    />
                    </div>
                    <div className="col-12 col-md-4 col-lg-12">
                    <input
                        type="text"
                        className=""
                        placeholder="Phone*"
                        name="phone"
                        id="phone"
                    />
                    </div>
                    <div className="col-12 col-md-4 col-lg-12">
                    {/* <input type="text" class="" placeholder="Modal Name*" name="vehicle" id="vehicle"> */}
                    <select className="form-select" name="vehicle" id="vehicle">
                        <option value="">Select</option>
                        <option value="Car Model">Car Model</option>
                        <option value="Inverter Battery">Inverter Battery</option>
                        <option value="SMF Battery">SMF Battery</option>
                        <option value="2 wheeler Battery">2 wheeler Battery</option>
                    </select>
                    </div>
                    <div className="col-12 col-md-4 col-lg-12">
                    <input
                        type="text"
                        className=""
                        placeholder="Your City*"
                        name="city"
                        id="city"
                    />
                    </div>
                    <div className="col-12 col-md-4 col-lg-12">
                    <button
                        type="submit"
                        id="submit"
                        name="submit"
                        value="submit"
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </section>
        <section className="sec-1 pb-4 pt-5 py-md-3">
            <div className="container">
            <div className="row">
                <div className="col-6 col-md-4 col-lg-2">
                <div className="card border-0 rounded-0 text-center  mb-md-0">
                    <div className="card-body ">
                    <img
                        src="images/car-icon.png"
                        className="img-fluid pb-1"
                        alt=""
                    />
                    <p className="">
                        Free Shipping &amp;
                        <br /> Installation
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                <div className="card border-0 rounded-0 text-center  mb-md-0">
                    <div className="card-body ">
                    <img src="images/icon-2.png" className="img-fluid " alt="" />
                    <p className="">
                        100% Genuine
                        <br /> Products
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                <div className="card border-0 rounded-0 text-center mb-md-0">
                    <div className="card-body ">
                    <img src="images/icon-3.png" className="img-fluid  pb-1" alt="" />
                    <p className="">
                        Lowest
                        <br /> Prices
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                <div className="card border-0 rounded-0 text-center mb-md-0">
                    <div className="card-body ">
                    <img src="images/icon-4.png" className="img-fluid mb-1" alt="" />
                    <p className="">
                        All Leading
                        <br /> Brands
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                <div className="card border-0 rounded-0 text-center  mb-md-0">
                    <div className="card-body ">
                    <img src="images/icon-5.png" className="img-fluid pb-1" alt="" />
                    <p className="">
                        Cash on <br />
                        Delivery
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                <div className="card border-0 rounded-0 text-center mb-md-0">
                    <div className="card-body ">
                    <img src="images/icon-6.png" className="img-fluid  pb-1" alt="" />
                    <p className="">
                        Easy Payment <br />
                        Options
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* section-2 */}
        <section className="sec-2  py-3 py-md-5">
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-12">
                <h2 className="text-center">Our Top Selling Products</h2>
                <div className="mx-auto mb-5" />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                <div className="card rounded-0">
                    <div className="card-body d-flex justify-content-between flex-column">
                    <div>
                        <div className="image">
                        <img src="images/card-1.jpg" className="img-fluid " alt="" />
                        </div>
                        <h4 className="fw-bold">Amaron GO 105D26R (72AH)</h4>
                       
                    </div>
                    <div className="d-flex justify-content-between flex-column">
                        
                        <div className="requestsec">
                       
                        <a
                            href="#custom-fm"
                            className="btn bg-blue text-white  rounded-0 text-center btn-1 py-2"
                            type="button"
                        >
                            Request a Call Back
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                <div className="card rounded-0">
                    <div className="card-body d-flex justify-content-between flex-column">
                    <div>
                        <div className="image">
                        <img src="images/card-2.png" className="img-fluid " alt="" />
                        </div>
                        <h4 className="fw-bold">Amaron FLO 36B20L (35AH)</h4>
                       
                    </div>
                    <div className="d-flex justify-content-between flex-column">
                        
                        <div className="requestsec">
                        
                        <a
                            href="#custom-fm"
                            className="btn bg-blue text-white  rounded-0 text-center btn-1 py-2"
                            type="button"
                        >
                            Request a Call Back
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                <div className="card rounded-0">
                    <div className="card-body d-flex justify-content-between flex-column">
                    <div>
                        <div className="image">
                        <img src="images/card-3.png" className="img-fluid " alt="" />
                        </div>
                        <h4 className="fw-bold">Amaron PRO 50B20L (35AH)</h4>
                       
                    </div>
                    <div className="d-flex justify-content-between flex-column">
                      
                        <div className="requestsec">
                       
                        <a
                            href="#custom-fm"
                            className="btn bg-blue text-white  rounded-0 text-center btn-1 py-2"
                            type="button"
                        >
                            Request a Call Back
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                <div className="card rounded-0">
                    <div className="card-body d-flex justify-content-between flex-column">
                    <div>
                        <div className="image">
                        <img src="images/card-4.png" className="img-fluid " alt="" />
                        </div>
                        <h4 className="fw-bold">Exide Mileage ML40LBH (40 AH)</h4>
                     
                    </div>
                    <div className="d-flex justify-content-between flex-column">
                       
                        <div className="requestsec">
                       
                        <a
                            href="#custom-fm"
                            className="btn bg-blue text-white  rounded-0 text-center btn-1 py-2"
                            type="button"
                        >
                            Request a Call Back
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                <div className="card rounded-0">
                    <div className="card-body d-flex justify-content-between flex-column">
                    <div>
                        <div className="image">
                        <img src="images/card-5.png" className="img-fluid " alt="" />
                        </div>
                        <h4 className="fw-bold">Exide Mileage ML38B20L (35AH)</h4>
                       
                    </div>
                    <div className="d-flex justify-content-between flex-column">
                        
                        <div className="requestsec">
                     
                        <a
                            href="#custom-fm"
                            className="btn bg-blue text-white  rounded-0 text-center btn-1 py-2"
                            type="button"
                        >
                            Request a Call Back
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                <div className="card rounded-0">
                    <div className="card-body d-flex justify-content-between flex-column">
                    <div>
                        <div className="image">
                        <img src="images/card-6.png" className="img-fluid " alt="" />
                        </div>
                        <h4 className="fw-bold">Exide Mileage MLDIN44LH (44 AH)</h4>
                       
                    </div>
                    <div className="d-flex justify-content-between flex-column">
                        
                        <div className="requestsec">
                     
                        <a
                            href="#custom-fm"
                            className="btn bg-blue text-white  rounded-0 text-center btn-1 py-2"
                            type="button"
                        >
                            Request a Call Back
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="py-0 sec-3 mb-0 mb-md-4 overflow-hidden">
            <div className="container position-relative">
            
            <div className="row gx-5">
                <h1 className="fs-2 fw-normal text-dark mb-3">
                BatteryBoss.co.in - Car Batteries Online
                </h1>
                <p>
                BatteryBoss.co.in, a major online battery shop in India, was founded
                as a simple and quick way for people to buy car batteries online at
                low prices. Our prices for car batteries, whether given on the web or
                over the phone, are inclusive of GST. We import Amaron car batteries,
                Exide car batteries, Power Zone Car Batteries, SF Sonic Car Batteries
                etc. directly from certified suppliers, allowing you, the customer, to
                benefit not only from extremely low prices but also from direct access
                to high-quality items. We're one of India's fastest-growing car
                battery providers on e-commerce platform, and we're dedicated in
                providing comprehensive assistance as well as a wide range of products
                at a low price. Buying a car battery from us is simple and
                straightforward; we strive to make the process as simple as possible.
                We take pleasure in offering our high-quality goods to a diverse range
                of clients and applications. From major industrial organisations to
                car battery wholesalers, we work hard to provide an effective service
                to all of our clients.
                </p>
                <div className="col-12 col-md-12 col-lg-6">
                <p>
                    BatteryBoss.co.in is India's top online automobile battery retailer,
                    offering Exide vehicle batteries, Amaron vehicle batteries, and
                    other products. Are you looking for a battery seller near you to buy
                    online? BatteryBoss.co.in is a one-stop store that offers the best
                    price for car batteries. Car batteries from all major battery brands
                    in India, whether it be Amaron or Exide or any other top brand.
                </p>
                <p>
                    BatteryBoss.co.in has 25 years of expertise in this field, which
                    allows us to understand the concerns of consumers looking for car
                    batteries online and give the best price; be it Wagon R car battery
                    price, i10 car battery price, i20 car battery price, Swift Petrol
                    car battery price, Honda City petrol car battery price, Alto car
                    battery price, Maruti car battery price, BMW 5 series battery price,
                    Polo petrol car battery price, XUV500 car battery price, Jeep
                    Compass car battery price. We're dedicated to provide help as well
                    as a wide range of products at a price that is both competitive and
                    unmatched.
                </p>
                Some clients who buy auto batteries online are concerned about the
                after-sales service. We want to make it obvious that automotive
                batteries do not require any kind of maintenance; charging the battery
                will only aid in cases such as alternator failure, standby mode, and
                so on. If you're looking to buy a vehicle battery online, go no
                farther than BatteryBoss.co.in, your one-stop shop for all your
                requirements.
                <p />
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                <img
                    src="images/about.png"
                    className="img-fluid mb-4 mb-md-4 mb-lg-0 z-index w-100"
                    alt="amaron battery price near me"
                />
                </div>
                <div className="col-12 col-md-12 col-lg-12">
                <p>
                    It makes no difference what brand or model of car you have; we offer
                    batteries for nearly all of them. Are you looking to replace the
                    battery? BatteryBoss.co.in offers the greatest deals on Amaron car
                    batteries, Exide car batteries, and you can pay online or cash on
                    delivery. We now deliver in more than 11 cities throughout India,
                    including Delhi, NCR, Noida, Greater Noida, Gurgaon, Faridabad,
                    Mumbai, Navi Mumbai, Thane, Panvel, Virar, Vasai, Nagpur, Pune and
                    Nashik. We're steadily expanding our delivery network to encompass
                    all of the main cities and villages around the country.
                </p>
                <p>
                    You may buy car batteries online from BatteryBoss.co.in We provide
                    moderate prices, as well as 100 percent authentic items, and free
                    installation for your online purchase. Buy automobile batteries
                    online at a very cheap price. Look for automobile batteries from
                    Amaron, Exide, SF Sonic and Power Zone. Car battery cost is
                    available with big savings at Battery Boss. Today, you may get
                    Amaron car batteries, Exide car batteries, AC Delco car batteries
                    for your car, or commercial vehicles. BatteryBoss.co.in is an online
                    store in India where you can get all types of car batteries for your
                    four-wheeler, such as automobiles, SUVs, and MUVs. To buy vehicle
                    batteries online or if you have any questions about our goods,
                    contact or text our dedicated call centre number 7588-010101 /
                    7588-020202. You may also place an order over the phone or online.
                </p>
                <p></p>
                <p>
                    <strong>
                    In Mumbai and Bangalore, express delivery is offered. In Mumbai
                    (Andheri, Bandra, Borivali, Colaba, Dadar, Goregaon, Juhu, Mulund,
                    Powai, Santacruz, Worli...) and Bangalore (Banashankari,
                    Basaveshwarnagar, BTM layout, Electronic city, Frazer Town,
                    Hebbal, HSR Layout, Marathahalli, Mahadevpura, Malleswaram, K R
                    Puram, Kormangala) Call us at 7588010101 if you have any questions
                    about delivery timings.{" "}
                    </strong>
                </p>
                </div>
            </div>
            </div>
        </section>
        {/* section-4 */}
        <section className=" py-2 sec-4 overflow-hidden">
            <div className="container position-relative">
            <div className="row gx-5">
                <h2 className="fs-2 fw-normal text-dark mb-3">Testimonials</h2>
                
                <TestiMonials></TestiMonials>
                {/* <div
                id="testimonial-slider"
                className="owl-carousel owl-loaded owl-drag"
                >
                <div className="testimonial">
                    <p className="description">
                    It was a sunday. Battery was dead. couldn't find anyone as each
                    and every shop was closed. Luckily found Battery boss. Agreed with
                    all the conditions and delivered and installed it right away
                    within 2 hrs. World use this service again if needed. Product was
                    also genuine. Thanks. keep up the good work
                    </p>
                    <h3 className="title">Prasenjeet Urunkar</h3>
                </div>
                <div className="testimonial">
                    <p className="description">
                    The car battery buying experience has been pleasant as the battery
                    has been replaced within 4 hours of my placing the order that too
                    at a very competitive price.{" "}
                    </p>
                    <h3 className="title">Mukesh Samtani</h3>
                </div>
                <div className="testimonial">
                    <p className="description">
                    Battery Boss is highly recommended for hassle free online battery
                    purchases. The customer care is extremely professional. They
                    provide best price and source skilled technicians for the job.{" "}
                    </p>
                    <h3 className="title"> Rohit Pillai</h3>
                </div>
                <div className="testimonial">
                    <p className="description">
                    Very Prompt Service. Got call within a few minutes of posting
                    requirement on website and battery delivered within an hour of
                    discussions. It's the Service that would set them apart from rest
                    of the Vendors. Thanks And Keep up the Good Job.{" "}
                    </p>
                    <h3 className="title"> Vikram Sharma</h3>
                </div>
                <div className="testimonial">
                    <p className="description">
                    Very good experience, hassle free battery replacement delivered at
                    doorstep , received exchange for the old battery as well ,
                    recommended!{" "}
                    </p>
                    <h3 className="title"> Sid Mathur</h3>
                </div>
                </div> */}
            </div>
            </div>
        </section>
        {/* section-5 */}
        <section className="py-5 sec-5">
            <div className="container position-relative">
            <div className="row">
                <div className="col-12 col-md-12">
                <h2 className="text-center fw-normal mb-4 pt-3">
                    Car Batteries Shop By Manufacturers
                </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <ul className="clogo" id="customer-logos">
                    <li>
                    <div>
                        <div className="clogoimg">
                        {" "}
                        <img src="images/sli-1.png" className="img-fluid" alt="" />
                        </div>
                        <p>
                        Audi
                        <br /> Car Batteries
                        </p>
                    </div>
                    </li>
                    <li>
                    <div>
                        <div className="clogoimg">
                        {" "}
                        <img src="images/sli-2.png" className="img-fluid" alt="" />
                        </div>
                        <p>
                        Volkswagen
                        <br /> Car Batteries
                        </p>
                    </div>
                    </li>
                    <li>
                    <div>
                        <div className="clogoimg">
                        {" "}
                        <img src="images/sli-3.png" className="img-fluid" alt="" />
                        </div>
                        <p>
                        Mercedes
                        <br /> Car Batteries
                        </p>
                    </div>
                    </li>
                    <li>
                    <div>
                        <div className="clogoimg">
                        {" "}
                        <img src="images/sli-4.png" className="img-fluid" alt="" />
                        </div>
                        <p>
                        BMW <br />
                        Car Batteries
                        </p>
                    </div>
                    </li>
                    <li>
                    <div>
                        <div className="clogoimg">
                        {" "}
                        <img src="images/sli-9.png" className="img-fluid" alt="" />
                        </div>
                        <p>
                        Skoda <br />
                        Car Batteries
                        </p>
                    </div>
                    </li>
                    <li>
                    <div>
                        <div className="clogoimg">
                        {" "}
                        <img src="images/sli-8.png" className="img-fluid" alt="" />
                        </div>
                        <p>
                        Maruti
                        <br /> Car Batteries
                        </p>
                    </div>
                    </li>
                    <li>
                    <div>
                        <div className="clogoimg">
                        {" "}
                        <img src="images/sli-7.png" className="img-fluid" alt="" />
                        </div>
                        <p>
                        Mahindra <br />
                        Car Batteries
                        </p>
                    </div>
                    </li>
                    <li>
                    <div>
                        <div className="clogoimg">
                        {" "}
                        <img src="images/sli-5.png" className="img-fluid" alt="" />
                        </div>
                        <p>
                        TATA
                        <br /> Car Batteries
                        </p>
                    </div>
                    </li>
                    <li>
                    <div>
                        <div className="clogoimg">
                        {" "}
                        <img src="images/sli-11.png" className="img-fluid" alt="" />
                        </div>
                        <p>
                        Hyundai <br />
                        Car Batteries
                        </p>
                    </div>
                    </li>
                    <li>
                    <div>
                        <div className="clogoimg">
                        {" "}
                        <img src="images/sli-12.png" className="img-fluid" alt="" />
                        </div>
                        <p>
                        Volvo <br />
                        Car Batteries
                        </p>
                    </div>
                    </li>
                    <li>
                    <div>
                        <div className="clogoimg">
                        {" "}
                        <img src="images/sli-6.png" className="img-fluid" alt="" />
                        </div>
                        <p>
                        Fiat <br /> Car Batteries
                        </p>
                    </div>
                    </li>
                    <li>
                    <div>
                        <div className="clogoimg">
                        {" "}
                        <img src="images/sli-13.png" className="img-fluid" alt="" />
                        </div>
                        <p>
                        Hindustan Motors <br />
                        Car Batteries
                        </p>
                    </div>
                    </li>
                    <li>
                    <div>
                        <div className="clogoimg">
                        {" "}
                        <img src="images/sli-14.png" className="img-fluid" alt="" />
                        </div>
                        <p>
                        Chevrolet
                        <br /> Car Batteries
                        </p>
                    </div>
                    </li>
                  
                    <li>
                    <div>
                        <div className="clogoimg">
                        {" "}
                        <img src="images/sli-10.png" className="img-fluid" alt="" />
                        </div>
                        <p>
                        Nissan <br />
                        Car Batteries
                        </p>
                    </div>
                    </li>
                    
                </ul>
                </div>
            </div>
            </div>
        </section>
        <section className="py-5 pt-0">
            <div className="container">
            <div className="manufacturesec">
                <div className="col-12 col-md-12">
                <h2 className="text-center fw-normal mb-4 pt-3">
                    Car Batteries by Brands
                </h2>
                </div>
                <div className="row">
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                    <div className="brand">
                    <img src="images/amaron-logo.jpg" className="img-fluid" />
                    </div>
                    <p>
                    Amaron
                    <br /> Car Batteries
                    </p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                    <div className="brand">
                    <img src="images/Exide-logo.jpg" className="img-fluid" />
                    </div>
                    <p>
                    Exide
                    <br /> Car Batteries
                    </p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                    <div className="brand">
                    <img src="images/powerzone-logo.jpg" className="img-fluid" />
                    </div>
                    <p>
                    Power Zone <br />
                    Car Batteries
                    </p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                    <div className="brand">
                    <img src="images/SF-Sonic-logo.jpg" className="img-fluid" />
                    </div>
                    <p>
                    Sf Sonic <br />
                    Car Batteries
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* section-6 */}
        <section className="sec-6 pb-2 pt-4 footer">
            <div className="container">
            <div className="row justify-content-between">
                <div className="col-12 col-md-3 col-lg-3 col-xl-3">
                <div className="card bg-transparent rounded-0 border-0 mb-0 mb-md-0">
                    <div className="card-body  pb-0 pb-md-3">
                    <div className="row">
                      
                        <div className="">
                        <h5 className="">Car Battery</h5>
                        <ul>
                            <li>i10 Car Battery</li>
                            <li>i20 Car Battery</li>
                            <li>Polo Diesel Car Battery</li>
                            <li>Polo Petrol Car Battery</li>
                            <li>Wagon R Car Battery</li>
                            <li>Swift Petrol Car Battery </li>
                            <li>Swift Dzire Car Battery</li>
                            <li>Kwid Car Battery</li>
                            <li>Honda City Petrol Car Battery</li>
                            <li>Honda City Diesel Car Battery</li>
                            <li>Honda Civic Car Battery</li>
                            <li>ford figo Car Battery </li>
                            <li>Toyota Altis petrol Car Battery </li>
                            <li>Ertiga Petrol Car Battery </li>
                            <li>Ertiga Diesel Car Battery</li>
                            <li>Alto Car Battery</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3 col-xl-3 col-xl-3">
                <div className="card bg-transparent rounded-0 border-0 mb-0 mb-md-0">
                    <div className="card-body  pb-2 pb-md-3">
                    <div className="row">
                       
                        <div className="">
                        <h5 className="">Inverter Batteries</h5>
                        <ul>
                            <li>Amaron Inverter batteries</li>
                            <li>Exide Inverter batteries</li>
                            <li>Okaya Inverter batteries</li>
                            <li>Luminous Inverter batteries</li>
                            <li>SF SOnic Inverter batteries</li>
                            <li>200AH inverter battery price</li>
                            <li>150 AH inverter battery price</li>
                            <li>Tubular batteries</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3 col-xl-3 mb-3 mb-md-0">
                <div className="card bg-transparent rounded-0 border-0 mb-4 mb-md-0">
                    <div className="card-body ">
                    <div className="row">
                       
                        <div className="">
                        <h5 className="">Car Batteries by Brands</h5>
                        <ul>
                            <li>Amaron Car Batteries</li>
                            <li>Exide Car Batteries</li>
                            <li>Power Zone Car Batteries</li>
                            <li>Sf Sonic Car Batteries</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3 col-xl-3 mb-3 mb-md-0">
                <div className="card bg-transparent rounded-0 border-0 mb-4 mb-md-0">
                    <div className="card-body">
                    <div className="row">
                        
                        <div className="infosec">
                        <h5 className="">Get in Touch</h5>
                        <ul>
                            <li>
                            {" "}
                            <div>
                                <img src="images/location.png" />
                            </div>
                            <div>
                                <h6>Batteryboss</h6>
                                <p>
                                C19, Abhilasha, Mathuradas Rd Extension, Kandivali
                                West Mumbai – 400067.
                                </p>
                            </div>
                            </li>
                            <li>
                            <div>
                                {" "}
                                <img src="images/call.png" />
                            </div>
                            <div>
                                <h6>Book Your Order</h6>
                                <p>
                                <a href="tel:+917588-010101">7588-010101,</a>{" "}
                                <a href="tel:+917588-020202">7588-020202</a>
                                </p>
                            </div>
                            </li>
                            <li>
                            {" "}
                            <div>
                                <img src="images/mailf.png" />
                            </div>
                            <div>
                                <h6>Email Us</h6>
                                <p>
                                <a href="mailto:info@batteryboss.co.in">
                                    info@batteryboss.co.in
                                </a>
                                </p>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css"
        />
        </>

    )
}
export default Text;